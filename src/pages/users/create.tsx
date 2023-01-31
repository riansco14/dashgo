import React from 'react'
import { Box, Button, Divider, Flex, Grid, Heading, HStack, Icon, SimpleGrid, VStack } from "@chakra-ui/react"
import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'
import { RiAddLine } from 'react-icons/ri'
import { Input } from '@/components/Form/Input'

export default function UserCreate() {

    return (<Box>
        <Header />
        <Flex w="100%" marginY="6" maxWidth={1480} marginX="auto" paddingX="6">
            <Sidebar />

            <Box flex="1" borderRadius={8} bgColor="gray.800" padding="8">
                <Heading size="lg" fontWeight="normal">Criar usuário</Heading>
                <Divider marginY="6" borderColor="gray.700" />

                <VStack spacing="8">
                    <SimpleGrid minChildWidth="240px" spacing="8" width="100%">
                        <Input name="name" label="Nome completo" />
                        <Input name="email" label="E-mail" />
                    </SimpleGrid>

                    <SimpleGrid minChildWidth="240px" spacing="8" width="100%">
                        <Input name="password" label="Senha" />
                        <Input name="password_repeat" label="Confirme a senha" />
                    </SimpleGrid>
                </VStack>
                <Flex marginTop="8" justify="flex-end">
                    <HStack spacing="4">
                        <Button colorScheme="whiteAlpha">Cancelar</Button>
                        <Button colorScheme="pink">Salvar</Button>
                    </HStack>
                </Flex>
            </Box>
        </Flex>
    </Box>)
}