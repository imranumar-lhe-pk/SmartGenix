'use client'

import { Box, Button, Card, Container, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

function Cards() {
  const [formData, setFormData] = useState({
    firstName:'',
    lastName:'',
    email:''
  })

  const [errors, setErrors] = useState({})
  const [completeForm, setCompleteForm] = useState(true)

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({
      ...formData, [name] : value
    })
  }


  const submitHandler = (event) => {
    event.preventDefault();
    const validationError = {};
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    if (!formData.firstName.trim()) {
      validationError.firstName = 'Please Enter First Name';
    }
    if (!formData.lastName.trim()) {
      validationError.lastName = 'Please Enter Last Name';
    }
    if (!formData.email.trim()) {
      validationError.email = 'Please Enter Email';
    } else if (!regex.test(formData.email)) {
      validationError.email = 'Email is invalid';
    }
       setErrors(validationError);
    setFormData({ firstName: '', lastName: '', email: '', message: '' });
    }
  const isFormComplete = () => {
setCompleteForm(!Object.values(formData).every((value) => value.trim() !== ''))
  } 
  useEffect(() => {
isFormComplete()
  },[formData])
  
  
  return (
<Container>
    <Box>
        <Typography fontSize={22} fontWeight={'bold'} textAlign={'center'} mt={6}>
            Contact US
        </Typography>
    </Box>
    <Box display={'flex'} flexDirection={{sm:'row', xs:'column'}}  gap={10} mt={10} justifyContent={'center'}>
        <Card  sx={{border:'1px solid gray',borderRadius:'10px' , width:270 , height:300}} >
            <Typography pt={1} ml={3} fontWeight={'bold'}>Billing Quries</Typography>
            <Box component={'img'} m={2} width={250} src='/contact.png' />
        </Card>
        <Card  sx={{border:'1px solid gray',borderRadius:'10px' , width:270 , height:300}} >
        <Typography pt={1} ml={3} fontWeight={'bold'}>Sales Quries</Typography>
            <Box component={'img'} m={2} width={250} src='/contact.png' />
        </Card>
    </Box>
    <Box display={'flex'} flexDirection={{sm:'row', xs:'column'}}  gap={10} mt={10} justifyContent={'center'}>
    <Card sx={{ border: '1px solid gray', borderRadius: '10px', width: 570, height: 'auto', p: 3 }}>
      <Typography variant="h6" fontWeight="bold" mb={2}>
        Send us a quick message
      </Typography>
      <form  onSubmit={submitHandler}> 
        <Box display="flex" justifyContent="space-between" mb={2}>
          <Box>
          <TextField
            label="First Name"
            name='firstName'
            variant="outlined"
            value={formData.firstName}
            fullWidth
            sx={{ mr: 1 }}
            onChange={handleChange}
          />
          {errors.firstName && <span>{errors.firstName}</span>}
          </Box>
         <Box>
         <TextField
            label="Last Name"
            name='lastName'
            variant="outlined"
            value={formData.lastName}
            fullWidth
            sx={{ ml: 1 }}
            onChange={handleChange}
            />
            {errors.lastName && <span>{errors.lastName}</span>}
         </Box>
        </Box>
        <Box mb={2}>
          <TextField
            label="Email"
            name='email'
            variant="outlined"
            value={formData.email}
            fullWidth
            onChange={handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </Box>
        <Box mb={2}>
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
          />
          {<span>optional</span>}
        </Box>
        <Box textAlign="center">
          <Button type='submit' variant='contained' disabled={completeForm}
            color="primary">
            Send Queries
          </Button>
        </Box>
      </form>
    </Card>
        <Card  sx={{border:'1px solid gray',borderRadius:'10px' , bgcolor:'#020E3F' , width:340 , height:350}} >
        <Typography variant="h6" fontWeight="bold" mb={2} color={'white'} m={2}> 
        Our Offices      </Typography>
<Box component={'img'} width={380} m={1} src='/offices.png' />
        </Card>
    </Box>
</Container>
)
}

export default Cards