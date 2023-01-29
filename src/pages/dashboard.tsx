import React from 'react'
import { Header } from '@/components/Header'
import { Flex } from '@chakra-ui/react'
import { Sidebar } from '@/components/Sidebar'


export default function Dashboard() {
    return (
        <Flex direction="column" h="100vh">
            <Header />
            <Flex w="100%" marginY="6" maxWidth={1480} marginX="auto" paddingX="6">
                <Sidebar />
            </Flex>
        </Flex>
    )
}