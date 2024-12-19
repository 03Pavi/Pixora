import { Box } from '@mui/material'
import React from 'react'
import SearchBar from '../searchbar'
import "./styles.css"
import ContactList from './contact-list'
const Contacts = () => {
  return (
    <Box className="contacts">
      <SearchBar/>
      <ContactList title='Groups'/>
      <ContactList title='People'/>
    </Box>
  )
}

export default Contacts
