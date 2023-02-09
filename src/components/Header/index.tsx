import { useSidebarDrawer } from '@/contexts/SidebarDrawerContext'
import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import { RiMenuLine } from 'react-icons/ri'
import { useSwipeable } from 'react-swipeable'
import { Logo } from '../Header/Logo'
import { NotificationsNav } from '../Header/NotificationsNav'
import { Profile } from '../Header/Profile'
import { SearchBox } from '../Header/SearchBox'

export function Header() {
    const { onOpen } = useSidebarDrawer()

    const isLargeVersion = useBreakpointValue({ base: false, lg: true })

    const { ref: documentRef } = useSwipeable({
        onSwiped: ({ dir, event }) => {
            if (dir === "Right" && event.changedTouches[0].clientX < 240) {
                onOpen()
            }
            console.log(event.changedTouches[0].clientX)
        },
        preventDefaultTouchmoveEvent: true
    });
    // attach swipeable to document
    React.useEffect(() => {
        if (!isLargeVersion)
            documentRef(document);
        else {
            documentRef({});
        }
        // Clean up swipeable event listeners
        return () => documentRef({});
    }, [isLargeVersion]);

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