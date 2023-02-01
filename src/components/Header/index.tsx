import { Flex } from '@chakra-ui/react'
import React from 'react'
import { Logo } from '../Header/Logo'
import { NotificationsNav } from '../Header/NotificationsNav'
import { Profile } from '../Header/Profile'
import { SearchBox } from '../Header/SearchBox'

export function Header() {
    return (<Flex
        as="header"
        w="100%"
        maxWidth={1480}
        h="20"
        mx="auto"
        mt="4"
        px="6"
        alignItems="center"
    >
        <Logo />
        <SearchBox />
        <Flex
            align="center"
            marginLeft="auto"
        >
            <NotificationsNav />
            <Profile />
        </Flex>

    </Flex>)
}