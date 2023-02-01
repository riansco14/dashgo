import { Icon, Link, LinkProps, Text } from '@chakra-ui/react'
import React, { ElementType } from 'react'

interface NavLinkProps extends LinkProps{
    icon: ElementType,
    children: string
}

export function NavLink({icon, children , ...rest }: NavLinkProps) {
    return (
        <Link display="flex" alignItems="center" href="#" {...rest}>
            <Icon as={icon} />
            <Text marginLeft="4" fontWeight="medium">{children}</Text>
        </Link>
    )
}