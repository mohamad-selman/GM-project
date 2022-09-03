import { Country } from '@prisma/client'

const CountryCard = ({ name, flag, capital, region, population, language, map }: Omit<Country, 'id'>) => {
  return (
    <div className="block my-3 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-[#1A1A1A] dark:border-zinc-800">
      <div className="flex justify-center">
        {flag && <img
          src={flag}
          alt={name + " flag"}
          className="h-12"
        />}
      </div>

      <h5 className="mt-4 mb-4 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {name}
      </h5>

      <ul className="font-medium text-gray-900 dark:text-white">
        <li>
          Capital: <span className="text-gray-700 dark:text-gray-400">{capital || "N/A"}</span>
        </li>

        <li>
          Region: <span className="text-gray-700 dark:text-gray-400">{region || "N/A"}</span>
        </li>

        <li>
          Population: <span className="text-gray-700 dark:text-gray-400">{population}</span>
        </li>

        <li>
          Language: <span className="text-gray-700 dark:text-gray-400">{language || "N/A"}</span>
        </li>
      </ul>

      {map && (
        <a href={map}>
          <p className="mt-3 font-medium text-center text-gray-900 hover:text-gray-700 dark:text-white dark:hover:text-gray-400">
            Map
          </p>
        </a>
      )}
      
    </div>
  )
}

export default CountryCard