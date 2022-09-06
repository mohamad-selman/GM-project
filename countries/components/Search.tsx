import { UseFormRegister, UseFormHandleSubmit, FieldValues } from 'react-hook-form'
import {  FormControl, TextField, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

interface Props {
  register: UseFormRegister<FieldValues>,
  handleSubmit: UseFormHandleSubmit<FieldValues>
}

const Search = ({ register, handleSubmit }: Props) => {
  const onSubmit = handleSubmit((data, event) => {
    event?.preventDefault();
  })

  return (
    <>
      <FormControl sx={{ marginTop: '25px', marginBottom: '25px'}} variant='standard' fullWidth>
        <TextField
          onKeyUp={onSubmit}
          placeholder='Search for a country ...'
          size='medium'
          margin='dense'
          fullWidth
          type='text'
          {...register('name')}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon color='inherit' />
              </InputAdornment>
            )
          }}
        />
      </FormControl>
    </>
  )
}

export default Search