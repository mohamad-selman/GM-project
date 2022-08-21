import { useState, useEffect } from 'react'
import CountryCard from './CountryCard'
import LoadMore from './LoadMore'
import { Country, CountryListProps } from '../types'

const CountryList = ({ countries, searchText }: CountryListProps) => {
  const defaultStep = 10
  const [listData, setListData] = useState(countries)
  const [toItem, setToItem] = useState(defaultStep)

  useEffect(() => {
    setListData(filteredCountries(countries, searchText))
    setToItem(countries.length < defaultStep ? countries.length : defaultStep)
  }, [countries, searchText])

  return (
    <>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4 lg:grid:6">
        {listData.slice(0, toItem).map((country, idx) => (
          <CountryCard
            key={idx}
            name={country.name}
            flag={country.flag}
            capital={country.capital}
            region={country.region}
            population={country.population}
            language={country.language}
            map={country.map}
          />
        ))}
      </div>
      <LoadMore
        listDataLength={listData.length}
        to={toItem}
        setTo={setToItem}
      />
    </>
  )
}

export default CountryList

const filteredCountries = (countries: Country[], searchText: string) => {
  return countries.filter((country: Country) => (
    country.name.toLowerCase().indexOf(searchText.toLowerCase()) != -1
  ))
}
