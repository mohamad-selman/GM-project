import fetch from 'node-fetch';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

const load = async () => {
    try {
        const res = await fetch('https://restcountries.com/v3.1/all')
        const countries = await res.json()

        await prisma.country.deleteMany()

        countries.map(
            async (country) => {
                await prisma.country.create({
                    data: {
                        name: country.name.official,
                        capital: country.capital[0],
                        region: country.region,
                        population: country.population,
                        language: Object.values(country.languages)[0],
                        flag: country.flags.svg,
                        map: country.maps.googleMaps
                    }
                })
            }
        )
    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

load()
