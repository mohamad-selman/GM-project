import axios from 'axios'
import { PrismaClient } from '@prisma/client'
import { Country } from '@prisma/client'
import { CountryResObj } from '../types'

const prisma = new PrismaClient()

const load = async () => {
  const response = await axios.get('https://restcountries.com/v3.1/all')
  const data: Omit<Country, 'id'>[] = []

  // Separated this step to prevent connection timeout
  response.data.map(
    (country: CountryResObj) => {
      data.push({
        name: country.name.official,
        capital: country.capital?.[0] || null,
        region: country.region,
        population: country.population,
        language: country.languages ? Object.values(country.languages)[0] : null,
        map: country.maps.googleMaps,
        flag: country.flags.svg || null,
      })
    }
  )

  data.sort((a, b) => a.name.localeCompare(b.name))

  await prisma.country.deleteMany({})

  await prisma.$queryRaw`ALTER TABLE Country AUTO_INCREMENT = 1`

  await prisma.country.createMany({
    data: data
  })
}

load()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })