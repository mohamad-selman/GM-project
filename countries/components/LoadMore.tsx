interface Props {
  fetchNextPage: any
  hasNextPage: boolean | undefined
  isFetchingNextPage: boolean
}

const LoadMore = ({ fetchNextPage, hasNextPage, isFetchingNextPage }: Props) => {
  return (
    <div className="py-8 flex justify-center">
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage
          ? 'Loading more...'
          : hasNextPage
            ? 'Load More'
            : 'Nothing more to load'}
      </button>
    </div>
  )
}

export default LoadMore