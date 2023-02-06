import React from 'react'
import { Box, Stack } from '@chakra-ui/react'
import { PaginationItem } from './PaginationItem'

interface PaginationProps {
    numberStart: number
    numberEnd: number
    numberTotal: number
}


export function Pagination({ numberStart, numberEnd, numberTotal }: PaginationProps) {
    return (<Stack
        direction="row"
        marginTop="8"
        justify="space-between"
        align="center"
    >
        <Box>
            <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
        </Box>
        <Stack
            direction="row"
            spacing="2"
        >
            {[{ number: 1, isCurrent: true }, { number: 2, isCurrent: false }, { number: 3, isCurrent: false }].map(
                item => {
                    return <PaginationItem key={item.number} number={item.number} isCurrent={item.isCurrent} />
                }
            )}
        </Stack>
    </Stack>
    )
}