import React from 'react'
import {
    Grid,
    Box, Skeleton, SkeletonCircle, SkeletonText,Flex,
}
    from '@chakra-ui/react'
const Skeletons = () => {
    return (
        <Grid gridTemplateColumns={'repeat(3,1fr)'} gap='16px'>
       
            <Skeleton width={'100%'} height='350px' />
            
       
        </Grid>

    )
}
export { Skeletons }
