import React, { useState, useEffect } from 'react'
import { Container, Flex, Skeleton } from '@chakra-ui/react';
import { FilterSection } from './FilterSection';

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
    Checkbox, CheckboxGroup,useMediaQuery

} from '@chakra-ui/react'
import '../css/cart.css'







const Products = () => {



    const media =useMediaQuery('min-width:768px');




    const [data, setData] = useState([]);

    useEffect(() => {
        getProducts();

    }, [])

    const getProducts = async () => {

        let res = await fetch('https://collection-mart-default-rtdb.firebaseio.com/product.json')
        let data = await res.json()
        setData(data)
        console.log(data);

    }
    const [sort, setSort] = useState(false);


    const sorting = (elem) => {
        setSort(elem)
    }
    console.log(sort)

    return (

        <>
            <FilterSection sorting={sorting} />
            <Grid w='80%' templateColumns={ media ? 'repeat(3,1fr)' : 'repeat(2,1fr)' } justifyContent='center' margin='auto' rowGap='35'   >
                {data.map((ele) => {
                    return (

                        // <Box fontFamily='Raleway,Sans-serif' textAlign='left' w='100%' key={product.id} >
                        //     <Image mixBlendMode='multiply' bgColor='#f5f5f5' w='100%' src={product.image.img1} alt='Dan Abramov' />
                        //     <Text fontWeight='610' fontSize='17'>{product.title}</Text>
                        //     <Text>{product.color}</Text>
                        //     <Text fontWeight='610' fontSize='15' >₹{product.price}</Text>
                        // </Box>
                        <div className="cardLayout">
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



// import { Icon } from '@chakra-ui/react'
// import { MdSettings } from 'react-icons/md'


// const Products = () => {


//     const [data, setData] = useState([]);

//     const [filter, setFilter] = useState(data);

//     const [loading, setloading] = useState(false);


//     let componentMounted = true;

//     useEffect(() => {
//         getProducts();
//     }, [])


//     const getProducts = async () => {

//         setloading(true);
//         if (componentMounted) {
//             let res = await fetch('https://collection-mart-default-rtdb.firebaseio.com/product.json')
//             let data = await res.json()
//             setloading(false);
//             console.log(data);
//             setData(data)
//         }
//         return () => {
//             componentMounted = false;
//         }
//     }



//     const Loading = () => {
//         (<>
//             {/* <Skeleton height='50px'></Skeleton> */}

//             loading..
//         </>)


//     }




//     // const ProductFilter = (cat) => {
//     //     const updatedData = data.filter((x) => x.category === cat)
//     //     setFilter(updatedData);
//     // }






//     const ShowProducts = () => {

//         return (
//             <Container>
//                 <Box w='100%' h='10' bg='#f7f7f7' >
//                     <Text opacity='0.7' fontSize='xs' > buy 2 or more pairs, get 20% with the code blackfri </Text>
//                 </Box>
//                 <Box w='100%'>
//                     <Text textAlign='left' fontSize='2xl' fontWeight='500'> men's classic slippers</Text>
//                 </Box>

//                 <Box display='flex'>
//                     <Menu>
//                         <MenuButton onClick={() => setFilter(data)} as={Button} border='none' opacity='0.4' bg='none' _hover={{
//                             background: "none",
//                             color: "black",
//                             //  opacity='0.7'

//                         }}

//                             _focus={
//                                 {
//                                     background: "none",
//                                     // boxShadow: 'outline',
//                                     border: "none"
//                                 }
//                             }

//                         >
//                             Gender
//                         </MenuButton>
//                         <MenuList display='grid' border='none'  >
//                             <Checkbox  opacity='0.7' size='sm' colorScheme='blue'  >
//                                 men
//                             </Checkbox>
//                             <Checkbox opacity='0.7' size='sm' colorScheme='blue'  >
//                                 women
//                             </Checkbox>
//                         </MenuList>
//                     </Menu>

//                     <Menu>
//                         <MenuButton id='remove' as={Button} border='none' opacity='0.4' bg='none' _hover={{
//                             background: "none",
//                             color: "black",

//                         }}

//                             _focus={
//                                 {
//                                     background: "none",
//                                     // boxShadow: 'outline',
//                                     border: "none"
//                                 }
//                             }

//                         >
//                             size
//                         </MenuButton>
//                         <MenuList display='grid' border='none'>
//                             <Checkbox opacity='0.7' size='sm' colorScheme='blue'  >
//                                 31
//                             </Checkbox>
//                             <Checkbox opacity='0.7' size='sm' colorScheme='blue'  >
//                                 32
//                             </Checkbox>
//                             <Checkbox opacity='0.7' size='sm' colorScheme='blue'  >
//                                 33
//                             </Checkbox>
//                             <Checkbox opacity='0.7' size='sm' colorScheme='blue'  >
//                                 34
//                             </Checkbox>
//                             <Checkbox opacity='0.7' size='sm' colorScheme='blue'  >
//                                 35
//                             </Checkbox>
//                             <Checkbox opacity='0.7' size='sm' colorScheme='blue'  >
//                                 36
//                             </Checkbox>
//                             <Checkbox opacity='0.7' size='sm' colorScheme='blue'  >
//                                 37
//                             </Checkbox>
//                             <Checkbox opacity='0.7' size='sm' colorScheme='blue'  >
//                                 38
//                             </Checkbox>
//                             <Checkbox opacity='0.7' size='sm' colorScheme='blue'  >
//                                 39
//                             </Checkbox>
//                             <Checkbox opacity='0.7' size='sm' colorScheme='blue'  >
//                                 40
//                             </Checkbox>
//                             <Checkbox opacity='0.7' size='sm' colorScheme='blue'  >
//                                 41
//                             </Checkbox>
//                             <Checkbox opacity='0.7' size='sm' colorScheme='blue'  >
//                                 42
//                             </Checkbox>
//                             <Checkbox opacity='0.7' size='sm' colorScheme='blue'  >
//                                 43
//                             </Checkbox>
//                             <Checkbox opacity='0.7' size='sm' colorScheme='blue'  >
//                                 44
//                             </Checkbox>
//                             <Checkbox opacity='0.7' size='sm' colorScheme='blue'  >
//                                 45
//                             </Checkbox>
//                             <Checkbox opacity='0.7' size='sm' colorScheme='blue'  >
//                                 46
//                             </Checkbox>
//                             <Checkbox opacity='0.7' size='sm' colorScheme='blue'  >
//                                 47
//                             </Checkbox>

//                             <Checkbox opacity='0.7' size='sm' colorScheme='blue'  >
//                                 48
//                             </Checkbox>
//                             <Checkbox opacity='0.7' size='sm' colorScheme='blue'  >
//                                 49
//                             </Checkbox>
//                             <Checkbox opacity='0.7' size='sm' colorScheme='blue'  >
//                                 50
//                             </Checkbox>
//                             <Checkbox opacity='0.7' size='sm' colorScheme='blue'  >
//                                 51
//                             </Checkbox>

//                         </MenuList>
//                     </Menu>

//                     <Menu>
//                         <MenuButton id='remove' as={Button} border='none' opacity='0.4' bg='none' _hover={{
//                             background: "none",
//                             color: "black",

//                         }}

//                             _focus={
//                                 {
//                                     background: "none",
//                                     // boxShadow: 'outline',
//                                     border: "none"
//                                 }
//                             }

//                         >
//                             collection
//                         </MenuButton>
//                         <MenuList display='grid' border='none'>
//                             <Checkbox opacity='0.7' size='sm' colorScheme='blue'  >
//                                 classic
//                             </Checkbox>
//                         </MenuList>
//                     </Menu>

//                     <Menu>
//                         <MenuButton id='remove' as={Button} border='none' opacity='0.4' bg='none' _hover={{
//                             background: "none",
//                             color: "black",

//                         }}

//                             _focus={
//                                 {
//                                     background: "none",
//                                     // boxShadow: 'outline',
//                                     border: "none"
//                                 }
//                             }

//                         >
//                             upper color
//                         </MenuButton>
//                         <MenuList display='grid' border='none'>
//                             <Checkbox opacity='0.7' size='sm' colorScheme='blue'  >
//                                 blue
//                             </Checkbox>
//                             <Checkbox opacity='0.7' size='sm' colorScheme='blue'  >
//                                 red
//                             </Checkbox>

//                             <Checkbox opacity='0.7' size='sm' colorScheme='blue'  >
//                                 gray
//                             </Checkbox>

//                             <Checkbox opacity='0.7' size='sm' colorScheme='blue'  >
//                                 animal print
//                             </Checkbox>
//                         </MenuList>
//                     </Menu>

//                     <Menu>
//                         <MenuButton id='remove' as={Button} border='none' opacity='0.4' bg='none' _hover={{
//                             background: "none",
//                             color: "black",

//                         }}

//                             _focus={
//                                 {
//                                     background: "none",
//                                     // boxShadow: 'outline',
//                                     border: "none"
//                                 }
//                             }

//                         >
//                             sole color
//                         </MenuButton>
//                         <MenuList display='grid' border='none' >
//                             <Checkbox opacity='0.7' size='sm' colorScheme='blue'  >
//                                 red
//                             </Checkbox>
//                             <Checkbox opacity='0.7' size='sm' colorScheme='blue'  >
//                                 green
//                             </Checkbox>
//                             <Checkbox opacity='0.7' size='sm' colorScheme='blue'  >
//                                 black
//                             </Checkbox>
//                             <Checkbox opacity='0.7' size='sm' colorScheme='blue'  >
//                                 yellow
//                             </Checkbox>
//                             <Checkbox opacity='0.7' size='sm' colorScheme='blue'  >
//                                 blue
//                             </Checkbox>
//                         </MenuList>
//                     </Menu>



//                     <Menu>
//                         <MenuButton id='remove' as={Button} border='none' opacity='0.4' bg='none' _hover={{
//                             background: "none",
//                             color: "black",

//                         }}

//                             _focus={
//                                 {
//                                     background: "none",
//                                     // boxShadow: 'outline',
//                                     border: "none"
//                                 }
//                             }

//                         >
//                             sort by price
//                         </MenuButton>
//                         <MenuList display='grid' border='none' >
//                             <Checkbox  opacity='0.7' size='sm' colorScheme='blue'  >
//                                 ₹ 5000 - ₹ 10,000
//                             </Checkbox>
//                             <Checkbox  opacity='0.7' size='sm' colorScheme='blue'  >
//                                 ₹ 10,000 - ₹ 20,000
//                             </Checkbox>
//                             <Checkbox  opacity='0.7' size='sm' colorScheme='blue'  >
//                                 above - ₹ 20,000
//                             </Checkbox>
//                         </MenuList>
//                     </Menu>




//                 </Box>
//             </Container>
//         )
//     }

//     return (

//         <Box>
//             <Box>
//                 {loading ? <Loading /> : <ShowProducts />}
//             </Box>



//             {data.map((product) => {
//                 return (
//                     <Box display='grid' templateColumns={{lg:'repeat(3,1fr)'}}>
//                         <Container border={'1px solid black'}>
//                             <Image boxSize='321.91' src={product.image.img1} alt='Dan Abramov' />
//                             <Text fontWeight='610' fontSize='17'>{product.title}</Text>
//                             <Text>{product.color}</Text>
//                             <Text fontWeight='610' fontSize='15' >₹{product.price}</Text>
//                         </Container>
//                     </Box>
//                 )
//             })}
//         </Box>
//     )
// }

// export { Products }






//             // <Stack direction='row' spacing={4} align='center'>
//             //     <Button onClick={() => setFilter(data)} colorScheme='teal' variant='solid'>
//             //         bestseller
//             //     </Button>

//             //     <Button onClick={() => ProductFilter("bestseller")} colorScheme='teal' variant='solid'>
//             //         backinstack
//             //     </Button>
//             // </Stack> 