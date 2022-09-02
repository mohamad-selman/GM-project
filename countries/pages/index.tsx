import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { prisma } from '../lib/prisma'
import Search from '../components/Search'
import CountryList from '../components/CountryList'
import { HomeProps } from '../types'

const Home: NextPage<HomeProps> = ({ countries }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <Head>
        <title>Countries</title>
      </Head>

      <Search
        onSearch={setSearchText}
      />

      <CountryList
        countries={countries}
        searchText={searchText}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await prisma.country.findMany()

  return {
    props: {
      countries: data
    }
  }
}

export default Home