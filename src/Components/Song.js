import React from 'react'

import {
    Flex,
    Text,
} from '@chakra-ui/react'

const Song = ({song, index}) => {
    return (
        <>
            <Flex _hover={{cursor: 'pointer', bg: 'gray.300'}} pl={5} pr={5} align='center' justifyContent='space-between' w='100%' rounded={5} bg='white' mt={2} h={50}>
                <Text>{index + 1}. {song.title}</Text>
                <Text>{song.artist}</Text>
                <Text>{song.duration}</Text>
            </Flex>
        </>
    )
}

export default Song