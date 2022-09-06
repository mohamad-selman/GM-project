import axios from 'axios';
import { PrismaClient } from '@prisma/client';
import { CountryResObj } from '../types';

const prisma = new PrismaClient();

const load = async () => {
	const response = await axios.get<CountryResObj[]>('https://restcountries.com/v3.1/all');
	// Separated this step to prevent connection timeout
	await prisma.country.deleteMany({});
	// this code block should handle sqlite provided,
	if ('create' in prisma.country) {
		for (const country of response.data) {
			await prisma.country.create({
				data: {
					name: country.name.official,
					capital: country.capital?.[0] || null,
					region: country.region,
					population: country.population,
					language: country.languages ? Object.values(country.languages)[0] : null,
					map: country.maps.googleMaps,
					flag: country.flags.svg || null,
				},
			});
		}
	}
	// this code block should handle other providers
	if ('createMany' in prisma.country) {
		// @ts-ignore
		await prisma.country.createMany({
			data: response.data.map((country: CountryResObj) => ({
				name: country.name.official,
				capital: country.capital?.[0] || null,
				region: country.region,
				population: country.population,
				language: country.languages ? Object.values(country.languages)[0] : null,
				map: country.maps.googleMaps,
				flag: country.flags.svg || null,
			})),
		});
	}
};

load()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
