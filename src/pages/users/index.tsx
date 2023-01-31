import React, { useState } from 'react'
import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"
import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import { Pagination } from '@/components/Pagination'

export default function UserList() {
    const [users, setUsers] = useState([
        { isSelected: true, name: "Rian Rabelo", email: "riantal@gmail.com", created_at: "04 de Abril, 2022" },
        { isSelected: false, name: "Rian Rabelo", email: "riantal@gmail.com", created_at: "04 de Abril, 2022" }
    ])


    const allChecked = users.every(userItem => userItem.isSelected)
    const isIndeterminate = users.some(userItem => userItem.isSelected) && !allChecked

    const changeAllUsersSelectState = (value: boolean) => setUsers(oldUsers => oldUsers.map(userItem => ({
        ...userItem,
        isSelected: value
    })))

    const changeOneUsersSelectState = (userItemOption: any, valueBoolean: boolean) => setUsers(oldUsers => oldUsers.map(userItem => {
        if (userItem === userItemOption) {
            return ({
                ...userItem,
                isSelected: valueBoolean
            })
        }
        return {
            ...userItem,
        }
    }))


    return (<Box>
        <Header />
        <Flex w="100%" marginY="6" maxWidth={1480} marginX="auto" paddingX="6">
            <Sidebar />

            <Box flex="1" borderRadius={8} bgColor="gray.800" padding="8">
                <Flex marginBottom="8" justify="space-between" align="center">
                    <Heading size="lg" fontWeight="normal">Usuários</Heading>
                    <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine} />}>Criar novo usuário</Button>
                </Flex>
                <Table colorScheme="whiteAlpha">
                    <Thead>
                        <Tr>
                            <Th px="6" color="gray.300" width="8">
                                <Checkbox
                                    isChecked={allChecked}
                                    isIndeterminate={isIndeterminate}
                                    onChange={(e) => changeAllUsersSelectState(e.target.checked)}
                                    colorScheme="pink" aria-checked={true} checked={true}></Checkbox>
                            </Th>
                            <Th>Usuário</Th>
                            <Th>Data de cadastro</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {users.map(userItem => {
                            return (<Tr bgColor={userItem.isSelected ? "gray.700" : "gray.800"}>
                                <Td px="6">
                                    <Checkbox
                                        isChecked={userItem.isSelected}
                                        onChange={(e) => changeOneUsersSelectState(userItem, e.target.checked)}
                                        colorScheme="pink"></Checkbox>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">{userItem.name}</Text>
                                        <Text fontSize="small" color="gray.300">{userItem.email}</Text>
                                    </Box>
                                </Td>
                                <Td>
                                    <Text>{userItem.created_at}</Text>
                                </Td>
                                <Td>
                                    <Button as="a" size="sm" fontSize="sm" colorScheme="purple" leftIcon={<Icon as={RiPencilLine} />}>Editar</Button>
                                </Td>
                            </Tr>)
                        })}

                    </Tbody>
                </Table>
                
            </Box>
        </Flex>
    </Box>)
}