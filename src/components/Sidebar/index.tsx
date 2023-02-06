import { useSidebarDrawer } from '@/contexts/SidebarDrawerContext'
import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import { SidebarNav } from './SidebarNav'


export function Sidebar() {
    const isDrawerSidebar = useBreakpointValue({ base: true, lg: false })
    const {isOpen, onClose}=useSidebarDrawer()

    if (isDrawerSidebar) {
        return (<Drawer isOpen={isOpen} placement="left" onClose={onClose} >
            <DrawerOverlay>
                <DrawerContent bgColor={"gray.800"} padding="4">
                    <DrawerCloseButton marginTop="6" />
                    <DrawerHeader>Navegação</DrawerHeader>

                    <DrawerBody>
                        <SidebarNav />
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>)
    }

    return (<Box as="aside" w="64" marginRight="8">
        <SidebarNav />
    </Box>
    )
}