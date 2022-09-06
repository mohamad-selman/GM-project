import { CardActions, Button } from '@mui/material'

interface Props {
  fetchNextPage: any
  hasNextPage: boolean | undefined
  isFetchingNextPage: boolean
}

const LoadMore = ({ fetchNextPage, hasNextPage, isFetchingNextPage }: Props) => {
  return (
    <CardActions sx={{ justifyContent: 'center', marginTop: '25px' }}>
      <Button
        variant='contained'
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage
          ? 'Loading more...'
          : hasNextPage
            ? 'Load More'
            : 'Nothing more to load'}
      </Button>
      </CardActions>
  )
}

export default LoadMore