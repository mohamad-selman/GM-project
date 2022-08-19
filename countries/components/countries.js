const Countries = ({ countries }) => {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4 lg:grid:6">
      {countries.map((country) => {
        return (
          <div key={country.name} className="block my-3 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-[#1A1A1A] dark:border-zinc-800">
            <div className="flex justify-center">
              <img src={country.flag} alt={country.name} className="h-12"/>
            </div>
    
            <h5 className="mt-4 mb-4 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {country.name}
            </h5>
    
            <p className="font-medium text-gray-900 dark:text-white">
              Capital: <span className="text-gray-700 dark:text-gray-400">{country.capital}</span>
            </p>
    
            <p className="font-medium text-gray-900 dark:text-white">
              Region: <span className="text-gray-700 dark:text-gray-400">{country.region}</span>
            </p>
    
            <p className="font-medium text-gray-900 dark:text-white">
              Population: <span className="text-gray-700 dark:text-gray-400">{country.population}</span>
            </p>
    
            <p className="font-medium text-gray-900 dark:text-white">
              Language: <span className="text-gray-700 dark:text-gray-400">{country.language}</span>
            </p>
    
            <a href={country.map}>
              <p className="mt-3 font-medium text-center text-gray-900 hover:text-gray-700 dark:text-white dark:hover:text-gray-400">
                Map
              </p>
            </a>
          </div>
        )
      })}
    </div>
  )
}

export default Countries