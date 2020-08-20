import { Heading, Grid, Flex, Link, Button, Text } from '@chakra-ui/core';

import { FaGithub } from 'react-icons/fa';

import Input from '../components/Input';
import Divider from '../components/Divider';

export default function Home() {
  return (
    <Grid
      as='main'
      height='100vh'
      templateColumns='1fr 480px 480px 1fr'
      templateRows='1fr 480px 1fr'
      templateAreas="
        '. . . .'
        '. logo form .'
        '. . . .'
      "
      justifyContent='center'
      alignItems='center'
    >
      <Flex
        gridArea='logo'
        flexDir='column'
        alignItems='flex-start'
        paddingRight={24}
      >
        <img src='/fingerprint.svg' alt='Rocketseat' />
      </Flex>

      <Flex
        gridArea='form'
        height='100%'
        backgroundColor='gray.700'
        borderRadius='md'
        flexDir='column'
        alignItems='stretch'
        padding={16}
      >
        <Input type='email' placeholder='E-mail' />

        <Input type='password' placeholder='Password' marginTop={2} />

        <Link
          alignSelf='flex-start'
          marginTop={2}
          fontSize='sm'
          color='purple.600'
          fontWeight='bold'
          _hover={{ color: 'purple.500' }}
        >
          Forgot your password?
        </Link>

        <Button
          backgroundColor='purple.500'
          height='50px'
          borderRadius='sm'
          marginTop={6}
          _hover={{ backgroundColor: 'purple.600' }}
        >
          Sign In
        </Button>

        <Text textAlign='center' fontSize='sm' color='gray.300' marginTop={6}>
          Create an account{' '}
          <Link
            color='purple.600'
            fontWeight='bold'
            _hover={{ color: 'purple.500' }}
          >
            Sign Up
          </Link>
        </Text>

        <Divider />

        <Flex alignItems='center'>
          <Text fontSize='sm'>Or Sign in with</Text>
          <Button
            height='50px'
            flex='1'
            backgroundColor='gray.600'
            marginLeft={6}
            borderRadius='sm'
            _hover={{ backgroundColor: 'purple.500' }}
          >
            <FaGithub size={24} style={{ marginRight: '6px' }} />
            GITHUB
          </Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
