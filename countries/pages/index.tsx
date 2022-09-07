import type { NextPage } from 'next';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { Fragment } from 'react';
import Search from '../components/Search';
import { findCountries } from '../server/findCountries';
import { trpc } from '../utils/trpc';
import { Country } from '@prisma/client';
import { useForm } from 'react-hook-form';
import { Grid, Box, Typography, Container, Button } from '@mui/material';
import { CustomCard } from '../components/CustomCard';
import LoadingButton from '@mui/lab/LoadingButton';

interface Props {
  initialData: {
    pages: {
      items: Country[];
      nextCursor: number | undefined;
    }[];
  };
}

const Home: NextPage<Props> = ({ initialData }) => {
  const { register, watch, handleSubmit } = useForm();
  const { data, isFetchingNextPage, fetchNextPage, isLoading, hasNextPage } = trpc.useInfiniteQuery(
    [
      'infiniteCountries',
      {
        limit: 10,
        name: watch('name', ''),
      },
    ],
    {
      initialData: {
        pageParams: [undefined],
        ...initialData,
      },
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      refetchOnMount: false,
    }
  );
  const handleLoading = () => fetchNextPage();
  return (
    <Container sx={{ py: 4 }} maxWidth="xl">
      <Head>
        <title>Countries</title>
      </Head>

      <Typography sx={{ textAlign: 'center' }} variant="h4" fontWeight="fontWeightMedium">
        Countries
      </Typography>

      <Search register={register} handleSubmit={handleSubmit} />

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {data?.pages.map((page) => (
            <Fragment key={page.nextCursor}>
              {page.items.map((country, idx) => (
                <Grid key={idx} item xs={12} sm={6} md={4} lg={3}>
                  <CustomCard
                    img={country.flag}
                    alt={country.name}
                    action={<> {country.map && <Button href={country.map}>Map</Button>}</>}
                  >
                    <Typography gutterBottom variant="h5" component="div">
                      {country.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Capital:</strong> {country.capital || 'N/A'}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Region:</strong> {country.region || 'N/A'}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Population:</strong> {country.population || 'N/A'}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Language:</strong> {country.language || 'N/A'}
                    </Typography>
                  </CustomCard>
                </Grid>
              ))}
            </Fragment>
          ))}
        </Grid>
      </Box>
      <Box sx={{ textAlign: 'center', marginTop: '25px' }}>
        <LoadingButton variant='contained' disabled={!hasNextPage || isFetchingNextPage} loading={isLoading} onClick={handleLoading}>
          {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
              ? 'Load More'
              : 'Nothing more to load'}
        </LoadingButton>
      </Box>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { items, nextCursor } = await findCountries({
    limit: 10,
    where: {},
  });

  return {
    props: {
      initialData: {
        pages: [
          {
            items: items,
            nextCursor: nextCursor,
          },
        ],
      },
    },
  };
};

export default Home;