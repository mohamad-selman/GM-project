import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Fragment } from 'react'
import Search from '../components/Search'
import CountryCard from '../components/CountryCard'
import LoadMore from '../components/LoadMore'
import { findCountries } from '../server/findCountries'
import { trpc } from '../utils/trpc'
import { Country } from '@prisma/client'
import { useForm } from 'react-hook-form'

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

  // const AllData = data?.pages.map((i) => i.items).flat()

  return (
    <>
      <Head>
        <title>Countries</title>
      </Head>

      <Search
        register={register}
        handleSubmit={handleSubmit}
      />

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4 lg:grid:6">
        {data?.pages.map((page) => (
          <Fragment key={page.nextCursor}>
            {page.items.map((country, idx) => (
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
          </Fragment>
        ))}
      </div>

      <LoadMore
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />
    </>
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