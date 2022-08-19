const Layout = ({ children }) => {
  return (
    <div className='p-5'>
      <header>
        <h1 className='text-4xl font-semibold text-center mb-10 text-gray-900 dark:text-white'>
          Countries
        </h1>
      </header>

      <main>{children}</main>
    </div>
  )
}

export default Layout