import React from 'react';
import {
  Box,
  Table,
  Thead,
  Tbody,
  Button,
  Text,
  Input,
  Tr,
  Divider,
  Image,
  Th,
  Td,
  TableContainer,
  Center
} from '@chakra-ui/react'
import source from "../Images/Logo mahabis.png"
import SocialMediaImage from '../Images/social media logos.png'
const Footer = () => {

  return (
    <Box display={"flex"} w="100" height="500px" bg='black' justifyContent="spaceBetween " >
      <Box display={"flex"} w="42%" height="500px" >
        <Box gap='5px' display='grid' width="50%" height="200px" margin='auto' mt='13%'>
          <Image width='30px' height='20px' src={source} />
          <Text color='white' fontWeight='bold' fontSize='17' ml='-64%' >get 15% off*</Text>
          <Text opacity='0.9' fontSize='10' color='white' >Your first pair of mahabis slippers when you sign up to receive emails.</Text>
          <Box display="flex">
            <Input type='email' />
            <Button>SignUp</Button>
          </Box>
          <Text opacity='0.9' fontSize='10' color='white'>by signing up to our newsletter you are agreeing to our privacy policy
            please note: only new subscribers and customers will receive an email</Text>
          <Image width='100px' height='30px' src={SocialMediaImage} />

        </Box>
      </Box>


      <Center  mt='5%' height='220px' >
        <Divider color='white'  orientation='vertical' />
      </Center>

      <Box w="70%" height="500px" pl="50px">



        <TableContainer fontSize='12' w='71%' mt="9%"
        >
          <Table size="m" color="white" lineHeight='22px' variant="none" >
            <Thead  >
              <Tr >
                <Th fontSize='10' color="white">Help</Th>
                <Th fontSize='10' color="white">About</Th>
                <Th fontSize='10' color="white" >Sustainability</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Contact us</Td>
                <Td>Who we are</Td>
                <Td >Our sustainable steps forward</Td>
              </Tr>
              <Tr>
                <Td>Exchange and returns</Td>
                <Td>Read our reviews</Td>
                <Td >Recyclig scheme</Td>
              </Tr>
              <Tr>
                <Td>FAQs</Td>
                <Td>Stories of the time well spent</Td>
                <Td >Ecology patnership</Td>
              </Tr>
              <Tr>
                <Td>Size chart</Td>
                <Td>Carriers</Td>
              </Tr>
              <Tr>
                <Td>Delivery info</Td>
                <Td>offers</Td>
              </Tr>
              <Tr>
                <Td>Track your offers</Td>
                <Td>Affiliates</Td>
              </Tr>
              <Tr>
                <Td>Offer T&Cs</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>



        <Text w='42%' opacity='0.4' color='white' opeci fontSize='11' ml='-8%' mt='6%'>
          © all rights reserved ECA FOOTWEAR 21 LTD 2022
          ECA Footwear 21 Ltd t/a mahabis, 8 Shepherd Market, Suite 314, London, England, W1J 7JY
          (this is not an address for returns)
          extended producer responsibility (EPR) no. FR239126_01BONC
          design registration no. 002398388-0001 and 002398388-0002
          terms // privacy policy // Offer T&Cs

          beautiful footer imagery by: @marklivermore @hali.mason @curatedisplay @thecrapflat
        </Text>


      </Box>

    </Box>
  )
}
export { Footer }