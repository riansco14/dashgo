import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";


interface SidebarDrawerProviderProps {
    children: ReactNode
}

type SidebarDrawerProps = UseDisclosureReturn
const SidebarDrawerContext = createContext({} as SidebarDrawerProps)

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
    const disclosure = useDisclosure()
    const router = useRouter()

    useEffect(() => {
        disclosure.onClose()
    }, [router.asPath])
    

    return (
        <SidebarDrawerContext.Provider value={disclosure}>
            {children}
        </SidebarDrawerContext.Provider>
    )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)