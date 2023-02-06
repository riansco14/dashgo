import { Text } from '@chakra-ui/react'
import React from 'react'


export function Logo() {
    return (<Text
        fontSize={{sm: "2xl", md: "3xl"}}
        fontWeight="bold"
        letterSpacing="tight"
        width="64"
    >dashgo
        <Text as="span" color="pink.500" marginLeft="1">.</Text>
    </Text>)
}