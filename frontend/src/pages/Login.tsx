import { Box, Button, Typography } from '@mui/material'
import { IoIosLogIn } from "react-icons/io";
import React from 'react'
import CustomizedInput from '../components/shared/CustomizedInput'

function Login() {
  return (
    <Box width={'100%'} height={'100%'} display='flex' flex={1}>
      <Box padding={8} mt={5} display={{md:'flex', sm:'none', sx:'none'}}>
        <img src="airobot.png" alt="robot" style={{width:'400px'}} />
      </Box>
      <Box
      display={'flex'}
      flex={{xs: 1, md: 0.5}}
      justifyContent={'center'}
      alignItems={'center'}
      mt={'16'}
      ml={'auto'}
      padding={'2'}
      >
        <form style={{
          margin:"auto",
          padding:'30px',
          boxShadow:'10px 10px 20px #000',
          borderRadius:'10px',
          border:'none'
        }}>
          <Box sx={{
            display: "flex",
            flexDirection:'column',
            justifyContent: 'center'
          }}>
            <Typography 
            variant='h4'
            textAlign='center'
            padding={2}
            fontWeight={600}
            >
              Login
            </Typography>
            <CustomizedInput type='email' name='email' label='Email' />
            <CustomizedInput type='password' name='password' label='Password' />
            <Button sx={{
              px: 2,
              py:1,
              mt: 2,
              width: '400px',
              borderRadius: 2,
              bgcolor: '#00fffc',
              ":hover":{
                bgcolor: 'white',
                color: 'black'
              }
              }}
              endIcon={<IoIosLogIn />}
              >
                Login
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  )
}

export default Login