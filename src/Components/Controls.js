import React, { useState } from 'react'

import {
    Flex,
    Icon,
    Text,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    Box
} from '@chakra-ui/react'

import { MdGraphicEq } from "react-icons/md";

import { Play, Pause, ArrowLeft, ArrowRight } from 'react-feather'
const Controls = () => {
    const [playing, setPlaying] = useState(false)
    return (
        <>
            <Flex justifyContent='center' align='center' bg='gray.900' pos='absolute' bottom={0} w='100%' h={65}>
                <Icon color='gray.300' w={35} h={35} _hover={{ color: 'white', cursor: 'pointer' }} as={ArrowLeft} />
                <Icon onClick={() => setPlaying(!playing)} _hover={{ fill: 'white', cursor: 'pointer' }} w={35} h={35} color='white' as={playing ? Pause : Play} />
                <Icon color='gray.300' w={35} h={35} _hover={{ color: 'white', cursor: 'pointer' }} as={ArrowRight} />
                <Slider ml={10} w='50%' aria-label="slider-ex-1" defaultValue={30}>
                    <SliderTrack>
                        <SliderFilledTrack bg='purple.600' />
                    </SliderTrack>
                    <SliderThumb boxSize={6}>
                        <Box color="purple.600" as={MdGraphicEq} />
                    </SliderThumb>
                </Slider>
            </Flex>
        </>
    )
}

export default Controls