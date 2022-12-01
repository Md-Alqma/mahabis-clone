import React, { useState, useEffect } from 'react'
import { Container, Flex, Skeleton } from '@chakra-ui/react';


import {
    Box,
    Card,
    Text,
    Button,
    ButtonGroup,
    Stack,
    Grid,
    GridItem,
    Image,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Checkbox, CheckboxGroup, useMediaQuery

} from '@chakra-ui/react'
import '../css/cart.css'

import {

    RadioGroup,
    Radio,

} from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'






const Products = () => {


  const [gender,setGender] = useState("")
    const media = useMediaQuery('min-width:768px');


     const changeGender=(gen)=>{
               setGender(gen);
               console.log(gender)
     }


    const [data, setData] = useState([]);

    useEffect(() => {
        getProducts();

    }, [])

    const getProducts = async () => {

        let res = await fetch(`https://collection-mart-default-rtdb.firebaseio.com/product.json`)
        let data = await res.json()
        setData(data)
        console.log(data);


    }
   
 
    return (

        <>
            <Box w='100%' h='36px' bg={'#f7f7f7'}>
                <Text opacity='0.7' margin='auto' fontSize='xs' align={'center'} >buy 2 or more pairs, get 20% with the code blackfri</Text>
            </Box>
            <Text mr='63.5%' fontSize='22px' color='black' fontFamily='Raleway,Sans-serif' fontWeight='550'>men's classic slippers</Text>
            <Flex width={'40%'} ml='10%' mt='0.7%' mb='0.7%'>
                <Menu  >
                    <MenuButton fontSize='13px' color='#7D7B7C' fontFamily='Raleway,Sans-serif' as={Button} border='none' opacity='1.7' bg='none' _hover={{
                        background: "none",
                        color: "black",
                        fontWeight: '500',
                        opacity: '5'

                    }}

                        _focus={
                            {
                                background: "none",
                                // boxShadow: 'outline',
                                border: "none"
                            }
                        }


                        rightIcon={<ChevronDownIcon />}

                    >
                        genders
                    </MenuButton>
                    <MenuList fontSize='3xl' direction='column' fontFamily='Raleway,Sans-serif' border='none'  >
                        <RadioGroup   >
                            <Stack   >
                                <Radio size='sm' value='1' onClick={() => changeGender("mens")} >men</Radio>
                                <Radio size='sm' value='2'>women</Radio>
                            </Stack>
                        </RadioGroup>
                    </MenuList>

                </Menu>

                <Menu fontFamily='Raleway,Sans-serif'>
                    <MenuButton fontSize='13px' color='#7D7B7C' fontFamily='Raleway,Sans-serif' as={Button} border='none' opacity='1.7' bg='none' _hover={{
                        background: "none",
                        color: "black",
                        fontWeight: '500',
                        opacity: '5'

                    }}

                        _focus={
                            {
                                background: "none",
                                // boxShadow: 'outline',
                                border: "none"
                            }

                        }


                        rightIcon={<ChevronDownIcon />}
                    >
                        size
                    </MenuButton>
                    <MenuList opacity='1.7' fontFamily='Raleway,Sans-serif' display='grid' border='none'>
                        <RadioGroup>
                            <Stack>
                                <Radio value='31' opacity='0.7' size='sm' colorScheme='blue'  >
                                    31
                                </Radio>
                                <Radio value='32' opacity='0.7' size='sm' colorScheme='blue'  >
                                    32
                                </Radio>
                                <Radio value='33' opacity='0.7' size='sm' colorScheme='blue'  >
                                    33
                                </Radio>
                                <Radio value='34' opacity='0.7' size='sm' colorScheme='blue'  >
                                    34
                                </Radio>
                                <Radio value='35' opacity='0.7' size='sm' colorScheme='blue'  >
                                    35
                                </Radio>
                                <Radio value='36' opacity='0.7' size='sm' colorScheme='blue'  >
                                    36
                                </Radio>
                            </Stack>
                        </RadioGroup>

                    </MenuList>
                </Menu>

                <Menu fontFamily='Raleway,Sans-serif' >
                    <MenuButton color='#7D7B7C' fontSize='13px' fontFamily='Raleway,Sans-serif' id='remove' as={Button} border='none' opacity='1.7' bg='none' _hover={{
                        background: "none",
                        color: "black",
                        fontWeight: '500',
                        opacity: '5'

                    }}

                        _focus={
                            {
                                background: "none",
                                // boxShadow: 'outline',
                                border: "none"
                            }
                        }
                        rightIcon={<ChevronDownIcon />}
                    >
                        collection
                    </MenuButton>
                    <MenuList fontFamily='Raleway,Sans-serif' display='grid' border='none'>
                        <RadioGroup>
                            <Stack>
                                <Radio value='classic' opacity='0.7' size='sm' colorScheme='blue'  >
                                    classic
                                </Radio>
                                <Radio value='curve' opacity='0.7' size='sm' colorScheme='blue'  >
                                    curve
                                </Radio>
                                <Radio value='mule' opacity='0.7' size='sm' colorScheme='blue'  >
                                    mule
                                </Radio>
                                <Radio value='breathe' opacity='0.7' size='sm' colorScheme='blue'  >
                                    breathe
                                </Radio>
                            </Stack>
                        </RadioGroup>

                    </MenuList>
                </Menu>

                <Menu  >
                    <MenuButton color='#7D7B7C' fontSize='13px' fontFamily='Raleway,Sans-serif' id='remove' as={Button} border='none' opacity='1.7' bg='none' _hover={{
                        background: "none",
                        color: "black",
                        fontWeight: '500',
                        opacity: '5'

                    }}

                        _focus={
                            {
                                background: "none",
                                // boxShadow: 'outline',
                                border: "none"
                            }
                        }
                        rightIcon={<ChevronDownIcon />}
                    >
                        upper color
                    </MenuButton>
                    <MenuList fontFamily='Raleway,Sans-serif' display='grid' border='none'>
                        <RadioGroup>
                            <Stack>
                                <Radio value='blue' opacity='0.7' size='sm' colorScheme='blue'  >
                                    blue
                                </Radio>
                                <Radio value='red' opacity='0.7' size='sm' colorScheme='blue'  >
                                    red
                                </Radio>

                                <Radio value='gray' opacity='0.7' size='sm' colorScheme='blue'  >
                                    gray
                                </Radio>

                                <Radio value='animRadio' opacity='0.7' size='sm' colorScheme='blue'  >
                                    animal print
                                </Radio>
                            </Stack>
                        </RadioGroup>
                    </MenuList>
                </Menu>

                <Menu  >
                    <MenuButton color='#7D7B7C' opacity='1.7' fontSize='13px' fontFamily='Raleway,Sans-serif' id='remove' as={Button} border='none' bg='none' _hover={{
                        background: "none",
                        color: "black",
                        fontWeight: '500',
                        opacity: '5'

                    }}

                        _focus={
                            {
                                background: "none",
                                // boxShadow: 'outline',
                                border: "none"
                            }
                        }
                        rightIcon={<ChevronDownIcon />}
                    >
                        sole color
                    </MenuButton>
                    <MenuList fontFamily='Raleway,Sans-serif' display='grid' border='none' >
                        <RadioGroup>
                            <Stack>
                                <Radio value='red' opacity='0.7' size='sm' colorScheme='blue'  >
                                    red
                                </Radio>
                                <Radio value='green' opacity='0.7' size='sm' colorScheme='blue'  >
                                    green
                                </Radio>
                                <Radio value='black' opacity='0.7' size='sm' colorScheme='blue'  >
                                    black
                                </Radio>
                                <Radio value='yellow' opacity='0.7' size='sm' colorScheme='blue'  >
                                    yellow
                                </Radio>
                                <Radio value='blue' opacity='0.7' size='sm' colorScheme='blue'  >
                                    blue
                                </Radio>
                            </Stack>
                        </RadioGroup>
                    </MenuList>
                </Menu>



                <Menu  >
                    <MenuButton color='#7D7B7C' fontSize='13px' fontFamily='Raleway,Sans-serif' as={Button} border='none' opacity='1.7' bg='none' _hover={{
                        background: "none",
                        color: "black",
                        fontWeight: '500',
                        opacity: '5'

                    }}

                        _focus={
                            {
                                background: "none",
                                // boxShadow: 'outline',
                                border: "none"
                            }
                        }
                        rightIcon={<ChevronDownIcon />}
                    >
                        sort by price
                    </MenuButton>
                    <MenuList fontFamily='Raleway,Sans-serif' display='grid' border='none' >
                        <RadioGroup>
                            <Stack>
                                <Radio value='red' opacity='0.7' size='sm' colorScheme='blue'  >
                                    ₹ 5000 - ₹ 10,000
                                </Radio>
                                <Radio value='green' opacity='0.7' size='sm' colorScheme='blue'  >
                                    ₹ 10,000 - ₹ 20,000
                                </Radio>
                                <Radio value='black' opacity='0.7' size='sm' colorScheme='blue'  >
                                    above - ₹ 20,000
                                </Radio>
                            </Stack>
                        </RadioGroup>
                    </MenuList>
                </Menu>
            </Flex >

            <Grid  w='80%' templateColumns={media ? 'repeat(3,1fr)' : 'repeat(2,1fr)'} justifyContent='center' margin='auto' rowGap='35'   >
                {data.map((ele) => {
                    return (
                        <div key={ele.id} className="cardLayout">
                            <div className="cardImgDiv">
                                <img src={ele.image.img1} alt="" />
                            </div>
                            <h3>{ele.title}</h3>
                            <p className="color">{ele.color}</p>
                            <p className="priceC">₹‌{ele.price}</p>
                        </div>


                    )
                })}
            </Grid>
        </>


    )
}
export { Products }


                        // <Box fontFamily='Raleway,Sans-serif' textAlign='left' w='100%' key={product.id} >
                        //     <Image mixBlendMode='multiply' bgColor='#f5f5f5' w='100%' src={product.image.img1} alt='Dan Abramov' />
                        //     <Text fontWeight='610' fontSize='17'>{product.title}</Text>
                        //     <Text>{product.color}</Text>
                        //     <Text fontWeight='610' fontSize='15' >₹{product.price}</Text>
                        // </Box>