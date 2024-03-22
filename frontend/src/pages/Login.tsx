import { Box, Button, Typography } from '@mui/material'
import { IoIosLogIn } from "react-icons/io";
import React from 'react'
import CustomizedInput from '../components/shared/CustomizedInput'
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const auth = useAuth()
  const  handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get("email") as  string
    const password = formData.get("password") as string
    try {
      toast.loading("Signing In",{id: 'login'})
      await auth?.login(email, password)
      toast.success("Signed In successfully", {id: 'login'})
    } catch (error) {
      console.log(error);
      toast.error("signing In Failed", {id: 'login'})
      
    }
  }
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
        <form
          onSubmit={handleSubmit} 
          style={{
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