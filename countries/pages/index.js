import Head from 'next/head'
import Layout from '../components/layout'
import Container from '../components/container'

function Home() {
  return (
    <Layout>
      <Head>
        <title>Countries</title>
      </Head>

      <h1 className='text-4xl font-semibold text-center mb-10 text-gray-900 dark:text-white'>
        Countries
      </h1>

      <form className="mb-6">
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <input type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-[#1A1A1A] dark:border-zinc-800 dark:placeholder-gray-400 dark:text-white" placeholder="Search ..." required=""/>
          <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        </div>
      </form>

      <Container>
        <div className="block my-3 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-[#1A1A1A] dark:border-zinc-800">
          <div className="flex justify-center">
            <img src="https://flagcdn.com/kw.svg" alt="Kuwait Flag" className="h-12"/>
          </div>

          <h5 className="mt-4 mb-4 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">State of Kuwait</h5>
          <p className="font-medium text-gray-900 dark:text-white">Capital: <span className="text-gray-700 dark:text-gray-400">Kuwait City</span></p>
          <p className="font-medium text-gray-900 dark:text-white">Region: <span className="text-gray-700 dark:text-gray-400">Asia</span></p>
          <p className="font-medium text-gray-900 dark:text-white">Population: <span className="text-gray-700 dark:text-gray-400">4270563</span></p>
          <p className="font-medium text-gray-900 dark:text-white">Language: <span className="text-gray-700 dark:text-gray-400">Arabic</span></p>
        </div>
      </Container>

      <div className="py-8 flex justify-center">
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Load More</button>
      </div>
    </Layout>
  )
}

export default Home