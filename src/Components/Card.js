'use client'

import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
  Flex,
  Spacer,
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

export default function Pricing({db}) {
    console.log(db.list)
  return (
    <Center py={6}>
      <Box
        maxW={'330px'}
        w={'330px'}
        h={'500px'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Stack
          textAlign={'center'}
          p={6}
          color={useColorModeValue('gray.800', 'white')}
          align={'center'}>
          <Text
            fontSize={'sm'}
            fontWeight={500}
            bg={db.cor}
            p={2}
            px={3}
            color={'#FFFFFF'}
            rounded={'full'}>
            {db.name}
          </Text>
          <Stack direction={'row'} align={'center'} justify={'center'}>
            <Text fontSize={'3xl'}>R$</Text>
            <Text fontSize={'6xl'} fontWeight={800} color={'#1A202C'}>
              {db.price}
            </Text>
            <Text color={'gray.500'}>/mensal</Text>
          </Stack>
        </Stack>

        <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
          <Flex  h={'240px'} direction='column'>
              <Box>
                  <List spacing={3}>
                    {db.list.map((item)=>{
                        return (
                            <ListItem>
                                <Flex>
                                    <ListIcon as={CheckIcon} color="green.400" />
                                    <p>{item}</p>
                                </Flex>
                            </ListItem>
                        )
                    })
                    }
                  </List>
              </Box>
              <Spacer />
              <Box>
                  <Button
                    mt={10}
                    w={'full'}
                    bg={db.cor}
                    color={'white'}
                    rounded={'xl'}
                    boxShadow={'0 2px 5px 0px rgb(000 000 000 / 20%)'}
                    _hover={{
                      bg: 'green.500',
                    }}
                    _focus={{
                      bg: 'green.500',
                    }}>
                    Selecionar
                  </Button>
              </Box>
          </Flex>
        </Box>
      </Box>
    </Center>
  )
}