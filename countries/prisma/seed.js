const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const load = async () => {
  const res = await fetch('https://restcountries.com/v3.1/all')
  const countries = await res.json()

  const data = []

  // Separated this step to prevent connection timeout
  countries.map(
    (country) => {
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
