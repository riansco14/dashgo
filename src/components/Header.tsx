import { Avatar, Box, Flex, HStack, Icon, Input, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri'

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
                _placeholder={{ color: 'gray.400' }}
            />

            <Icon as={RiSearchLine} fontSize="20" />

        </Flex>

        <Flex
            align="center"
            marginLeft="auto"
        >
            <HStack
                spacing="8"
                marginX="8"
                paddingRight="8"
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
            </HStack>

            <Flex align="center">
                <Box mr="4" textAlign="right">
                    <Text>Rian Rabelo</Text>
                    <Text color="gray.300" fontSize="small">riantal@gmail.com</Text>
                </Box>

                <Avatar size="md" name="Rian Rabelo" />
            </Flex>
        </Flex>
    </Flex>)
}