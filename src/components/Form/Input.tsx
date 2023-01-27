import { FormControl, FormLabel, Input as InputChakra, InputProps as InputChakraProps } from '@chakra-ui/react'
import React from 'react'

interface InputProps extends InputChakraProps {
    name: string
    label?: string
}

export function Input({ name, label, ...rest }: InputProps) {
    return (
        <FormControl>
            {!!label ? <FormLabel htmlFor={name}>
                {label}
            </FormLabel> : null}
            <InputChakra
                id={name}
                name={name}
                type={name}
                focusBorderColor="pink.500"
                bgColor="gray.900"
                variant="filled"
                _hover={{
                    bgColor: "gray.900"
                }}
                size="lg"
                {...rest}
            />
        </FormControl>
    )
}