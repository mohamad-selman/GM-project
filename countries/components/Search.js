const Search = ({ onSearch }) => {
  const searchHandler = (e) => {
    onSearch(e.target.value)
  }

  return (
    <div className="mb-6 relative">
      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      </div>
      <input
        className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-[#1A1A1A] dark:border-zinc-800 dark:placeholder-gray-400 dark:text-white"
        placeholder="Search ..."
        onChange={searchHandler}
      />
    </div>
  )
}

export default Search