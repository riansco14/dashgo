import { Icon, Link, LinkProps, Text } from '@chakra-ui/react'
import React, { ElementType } from 'react'

interface NavLinkProps extends LinkProps{
    icon: ElementType,
    children: string
    href: string
}

export function NavLink({icon, children, href, ...rest }: NavLinkProps) {
    return (
        <Link display="flex" alignItems="center" href={href} {...rest}>
            <Icon as={icon} />
            <Text marginLeft="4" fontWeight="medium">{children}</Text>
        </Link>
    )
}