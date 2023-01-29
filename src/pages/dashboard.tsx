import React from 'react'
import { Header } from '@/components/Header'
import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import { Sidebar } from '@/components/Sidebar'
import dynamic from 'next/dynamic'
import { theme } from '@/styles/theme'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const options = {
    chart: {
        toolbar: {
            show: false
        },
        zoom: {
            enable: false
        },
        foreColor: theme.colors.gray[500]
    },
    grid: {
        show: false
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    tooltip: {
        enabled: false
    },
    xaxis: {
        type: 'datetime',
        axisBorder: {
            color: theme.colors.gray[600]
        },
        axisTicks: {
            color: theme.colors.gray[600]
        },
        categories: [
            '2021-03-18T00:00:00.000Z',
            '2021-03-19T00:00:00.000Z',
            '2021-03-20T00:00:00.000Z',
            '2021-03-21T00:00:00.000Z',
            '2021-03-22T00:00:00.000Z',
            '2021-03-23T00:00:00.000Z',
            '2021-03-24T00:00:00.000Z',
        ]
    },
    fill: {
        opacity: 0.3,
        type: 'gradient',
        gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.2  
        }
    }
}

const series = [{ name: "Batata", data: [10, 20, 100, 1000, 2434, 4, 87] }]

export default function Dashboard() {
    return (
        <Flex direction="column" h="100vh">
            <Header />
            <Flex w="100%" marginY="6" maxWidth={1480} marginX="auto" paddingX="6">
                <Sidebar />
                <SimpleGrid
                    flex="1"
                    gap="4"
                    minChildWidth="320px"
                >
                    <Box
                        padding="8"
                        bg="gray.800"
                        borderRadius="8"
                    >
                        <Text fontSize="lg" marginBottom="4">Inscritos da semana</Text>
                        <Chart options={options} series={series} type="area" height={160} width="100%" />

                    </Box>

                    <Box
                        padding="8"
                        bg="gray.800"
                        borderRadius="8"
                    >
                        <Text fontSize="lg" marginBottom="4">Inscritos da semana</Text>

                    </Box>

                </SimpleGrid>
            </Flex>
        </Flex>
    )
}