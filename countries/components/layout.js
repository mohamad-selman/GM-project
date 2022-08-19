import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <div className="p-5">
      <Head>
        <title>Countries</title>
      </Head>

      <h1 className='text-4xl font-semibold text-center mb-10 text-gray-900 dark:text-white'>
        Countries
      </h1>

      <main>
        {children}
      </main>
    </div>
  )
}
