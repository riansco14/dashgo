import React from 'react'
import { Avatar, Box, Flex, Text } from '@chakra-ui/react'


export function Profile() {
    return (<Flex align="center">
        <Box mr="4" textAlign="right">
            <Text>Rian Rabelo</Text>
            <Text color="gray.300" fontSize="small">riantal@gmail.com</Text>
        </Box>

        <Avatar size="md" name="Rian Rabelo" />
    </Flex>)
}