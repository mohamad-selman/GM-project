import { useState, useEffect } from 'react';
import Country from './Country';
import LoadMore from './LoadMore';

const CountryList = ({ countries, searchText }) => {
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
          <Country
            key={idx}
            name={country.name}
            flag={country.flag}
            capital={country.capital || "N/A"}
            region={country.region || "N/A"}
            population={country.population || "N/A"}
            language={country.language || "N/A"}
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

const filteredCountries = (countries, searchText) => {
  return countries.filter((country) => (
    country.name.toLowerCase().indexOf(searchText.toLowerCase()) != -1
  ))
}
