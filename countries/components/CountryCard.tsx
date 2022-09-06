import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material'
import { Country } from '@prisma/client'

const CountryCard = ({ name, flag, capital, region, population, language, map }: Omit<Country, 'id'>) => {
  return (
    <Card sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        {flag && (
          <CardMedia
            component='img'
            height='170px'
            image={flag}
            alt={name + ' flag'}
          />
        )}
        <CardContent>
          <Typography
            gutterBottom
            variant='h5'
            component='div'
          >
            {name}
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'
          >
            <strong>Capital:</strong> {capital || 'N/A'}
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'
          >
            <strong>Region:</strong> {region || 'N/A'}
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'
          >
            <strong>Population:</strong> {population || 'N/A'}
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'
          >
            <strong>Language:</strong> {language || 'N/A'}
          </Typography>
        </CardContent>
      </div>
      <CardActions sx={{ justifyContent: 'center' }}>
        {map && (
          <Button
            href={map}
          >
            Map
          </Button>
        )}
      </CardActions>
    </Card>
  )
}

export default CountryCard