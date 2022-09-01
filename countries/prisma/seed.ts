import axios from 'axios'
import { PrismaClient } from '@prisma/client'
import { Country, CountryResObj } from '../types'

const prisma = new PrismaClient()

const load = async () => {
  const response = await axios.get('https://restcountries.com/v3.1/all')
  const results = response.data
  const data: Country[] = []

  // Separated this step to prevent connection timeout
  results.map(
    (country: CountryResObj) => {
      data.push({
        name: country.name.official,
        capital: country.capital?.[0],
        region: country.region,
        population: country.population,
        language: country.languages ? Object.values(country.languages)[0] : undefined,
        map: country.maps.googleMaps,
        flag: country.flags.svg,
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