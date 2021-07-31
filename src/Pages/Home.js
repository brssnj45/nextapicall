import React, { useState } from 'react';

import {
    Text,
    Flex
} from '@chakra-ui/react'

import Song from '../Components/Song'
import Controls from '../Components/Controls';
const Home = () => {
    // eslint-disable-next-line
    const [songs, setSongs] = useState([
        {
            title: 'Know yourself',
            artist: 'Drake',
            duration: '3:08'
        },
        {
            title: 'Know yourself',
            artist: 'Drake',
            duration: '3:08'
        },
        {
            title: 'Know yourself',
            artist: 'Drake',
            duration: '3:08'
        },
        {
            title: 'Know yourself',
            artist: 'Drake',
            duration: '3:08'
        },
        {
            title: 'Know yourself',
            artist: 'Drake',
            duration: '3:08'
        },
    ])
    return (
        <>
            <Flex h='100vh' flexDir='column'>
                <Text fontWeight='200' textAlign='center' fontSize={30}>Songs</Text>
                {songs ?
                    <>
                        <Flex ml={10} mr={10} flexDir='column'>
                            {songs.map((song, index) => (
                                <Song index={index} key={index} song={song} />
                            ))}
                        </Flex>

                    </>
                    : <Text>Nothing to see here</Text>}
                <Controls />
            </Flex>
        </>
    )
}

export default Home