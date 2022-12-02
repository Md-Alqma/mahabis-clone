import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Image,
  Link,
  LinkBox,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import CountVal from "./CountVal";

function Cart() {
  const [total, setTotal] = useState(1);

  // const increaseCount = () => {
  //   setCount(count + 1);
  // };

  // const decreaseCount = () => {
  //   setCount(count - 1);
  // };

  let cartArray = JSON.parse(localStorage.getItem("cart")) || [];

  const deleteProduct = (i) => {
    cartArray.splice(i, 1);
    localStorage.setItem("cart", JSON.stringify(cartArray));
  };

  return (
    <Container p="200" pt="50">
      <Text>Your Cart</Text>
      <Flex>
        <Box w="65%">
          {cartArray.map((el, index) => (
            <Flex
              justifyContent="space-around"
              mb="20"
              boxShadow="0 2px 2px black">
              <Box w="15%">
                <Image
                  w="100%"
                  src="https://cdn.shopify.com/s/files/1/0238/5795/products/MC-F-LG-HV-A2-2_300x.jpg?v=1668705500"
                />
              </Box>
              <Box w="65%" p="60" pt="0" pb="0">
                <Text m="0" mt="10">
                  {el.title}
                </Text>
                <Text m="0">8</Text>
                <CountVal />
              </Box>
              <Box w="10%" mr="50">
                <Text
                  textAlign="end"
                  cursor="pointer"
                  onClick={deleteProduct(index)}>
                  x
                </Text>
                <Text mt="50" mr="30">
                  ₹{el.price}
                </Text>
              </Box>
            </Flex>
          ))}
        </Box>
        {/* <Flex direction="column" border="1px solid red">
          {cartArray.map((el) => (
            <Box boxShadow="0 2px 2px black">
              <Flex align="center" justify="space-between">
                <Box w="60%">
                  <Flex justify="space-between" border="1px solid green">
                    <Box w="20%">
                      <Image
                        w="100%"
                        src="https://cdn.shopify.com/s/files/1/0238/5795/products/MC-F-LG-HV-A2-2_300x.jpg?v=1668705500"
                      />
                    </Box>
                    <Box w="65%" p="60" pt="0" pb="0">
                      <Text>{el.title}</Text>
                      <Text>8</Text>
                      <Box align="center">
                        <CountVal />
                        {/* <Button
                      w="20px"
                      h="20px"
                      onClick={() => {
                        setCount(count + 1);
                      }}>
                      +
                    </Button>
                    <Text>{count}</Text>
                    <Button
                      w="20px"
                      h="20px"
                      onClick={() => {
                        if (count == 1) {
                          return;
                        }
                        setCount(count - 1);
                      }}>
                      -
                    </Button> */}
        {/* </Box>
                    </Box>
                    <Box w="10%" mr="50">
                      <Text textAlign="end">x</Text>
                      <Text mt="50" mr="30">
                        ₹{el.price}
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          ))} */}
        {/* </Flex> */}
        <Box w="30%" ml="20">
          <Flex justify="space-between">
            <Text>SUBTOTAL</Text>
            <Text></Text>
          </Flex>
          <Flex justify="space-between">
            <Text>SHIPPING</Text>
            <Text>calculated at checkout</Text>
          </Flex>
          <Button
            w="100%"
            p="10"
            mb="20"
            bgColor="#f34c3f"
            border="none"
            color="white"
            cursor="pointer">
            CHECKOUT
          </Button>
          <Box textAlign="center">
            <Link>CONTINUE SHOPPING</Link>
            <br />
            <Link>CLEAR CART</Link>
          </Box>
        </Box>
      </Flex>
      <Box textAlign="center">
        <Text>add a product from the rest of our collection</Text>

        <Box></Box>
      </Box>
    </Container>
  );
}

export default Cart;
