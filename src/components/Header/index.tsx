import { useSidebarDrawer } from '@/contexts/SidebarDrawerContext'
import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import { RiMenuLine } from 'react-icons/ri'
import { Logo } from '../Header/Logo'
import { NotificationsNav } from '../Header/NotificationsNav'
import { Profile } from '../Header/Profile'
import { SearchBox } from '../Header/SearchBox'

export function Header() {
    const { onOpen } = useSidebarDrawer()

    const isLargeVersion = useBreakpointValue({ base: false, lg: true })


    return (<Flex
        as="header"
        w="100%"
        maxWidth={1480}
        h="20"
        mx="auto"
        mt="4"
        px="6"
        align="center"
    >
        {!isLargeVersion && (
            <IconButton
                aria-label='Abrir menu'
                icon={<Icon as={RiMenuLine} />}
                fontSize="24"
                variant="unstyled"
                onClick={onOpen}
                marginRight="2"
                marginTop="2"
            >

            </IconButton>
        )}
        <Logo />
        {isLargeVersion && <SearchBox />}
        <Flex
            align="center"
            marginLeft="auto"
        >
            <NotificationsNav />
            <Profile showProfileData={isLargeVersion} />
        </Flex>

    </Flex>)
}