import type { NextPage } from 'next'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { Fragment } from 'react'
import Search from '../components/Search'
import CountryCard from '../components/CountryCard'
import LoadMore from '../components/LoadMore'
import { findCountries } from '../server/findCountries'
import { trpc } from '../utils/trpc'
import { Country } from '@prisma/client'
import { useForm } from 'react-hook-form'
import { Grid, Box, Typography, Container } from '@mui/material'

interface Props {
  initialData: {
    pages: {
      items: Country[]
      nextCursor: number | undefined
    }[]
  }
}

const Home: NextPage<Props> = ({ initialData }) => {
  const { register, watch, handleSubmit } = useForm()
  const {
    status,
    data,
    error,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = trpc.useInfiniteQuery(
    ['infiniteCountries', {
      limit: 10,
      name: watch('name', ''),
    }],
    {
      initialData: ({
        pageParams: [undefined],
        ...initialData,
      }),
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      refetchOnMount: false,
    },
  )

  return (
    <Container sx={{ py: 4 }} maxWidth='xl'>
      <Head>
        <title>Countries</title>
      </Head>

      <Typography sx={{textAlign: 'center'}} variant='h4' fontWeight='fontWeightMedium'>
        Countries
      </Typography>

      <Search
        register={register}
        handleSubmit={handleSubmit}
      />

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {data?.pages.map((page) => (
            <Fragment key={page.nextCursor}>
              {page.items.map((country, idx) => (
                <Grid key={idx} item xs={12} sm={6} md={4} lg={3}>
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
                </Grid>
              ))}
            </Fragment>
          ))}
        </Grid>
      </Box>

      <LoadMore
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { items, nextCursor } = await findCountries({
    limit: 10,
    where: {},
  })

  return {
    props: {
      initialData: {
        pages: [{
          items: items,
          nextCursor: nextCursor
        }]
      }
    }
  }
}

export default Home