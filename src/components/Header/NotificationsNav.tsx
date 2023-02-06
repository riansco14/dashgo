import React from 'react'
import { Flex, HStack, Icon } from '@chakra-ui/react'
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri'


export function NotificationsNav() {
    return (<HStack
        spacing={{ sm: "8" }}
        marginX={{ sm: "8" }}
        paddingRight={{ sm: "8" }}
        paddingY="1"
        direction="row"
        color="gray.300"
        borderRightWidth={1}
        borderColor="gray.700"

    >
        <Icon as={RiNotificationLine}
            fontSize="20"
        />
        <Icon as={RiUserAddLine}
            fontSize="20"
        />
    </HStack>)
}