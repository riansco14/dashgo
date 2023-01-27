import { Flex, Icon, Input, Text } from '@chakra-ui/react'
import React from 'react'
import {RiSearchLine} from 'react-icons/ri'

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
        <Text
            fontSize="3xl"
            fontWeight="bold"
            letterSpacing="tight"
            width="64"
        >dashgo
            <Text as="span" color="pink.500" marginLeft="1">.</Text>
        </Text>

        <Flex
            as="label"
            flex="1"
            paddingY="4"
            paddingX="8"
            marginLeft="6"
            maxWidth="400"
            alignSelf="center"
            color="gray.200"
            bgColor="gray.800"
            borderRadius="full"
            position="relative"
        >
            <Input
                color="gray.50"
                variant="unstyled"
                paddingX="4"
                marginRight="4"
                placeholder="Buscar na plataforma"
                _placeholder={{color: 'gray.400'}}
            />

            <Icon as={RiSearchLine} fontSize="20" />

        </Flex>
    </Flex>)
}