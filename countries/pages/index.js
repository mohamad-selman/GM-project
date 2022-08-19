import Layout from '../components/layout'
import Countries from '../components/countries'
import { useEffect, useState } from 'react'
import { PrismaClient } from '@prisma/client'

export const getStaticProps = async () => {
  const prisma = new PrismaClient()
  const data = await prisma.country.findMany()

  return {
    props: {
      countries: data
    }
  }
}

const Home = ({ countries }) => {
  return (
    <Layout>
      <div className="mb-6 relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="text" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-[#1A1A1A] dark:border-zinc-800 dark:placeholder-gray-400 dark:text-white" placeholder="Search ..."/>
      </div>

      <Countries countries={countries}/>

      <div className="py-8 flex justify-center">
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Load More
        </button>
      </div>
    </Layout>
  )
}

export default Home