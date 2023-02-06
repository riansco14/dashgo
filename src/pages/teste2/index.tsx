import { Box, Button, Container, Divider, Flex, Grid, GridItem, HStack, Icon, Link, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function Teste() {
    const [shadow, setShadow] = useState(false);
    const activeSlideRef = useRef(null);
    const [menu, setMenu] = useState(false)
    const [tabActive, setTabActive] = useState("home")

    const navigateTo = (elementHeight: number) => {
        document.body.scrollTo(0, elementHeight);
        window.scrollTo(0, elementHeight);
    }

    useEffect(() => {

        const handleShadow = (event) => {
            if (document.body.scrollTop > 100) {
                setMenu(true)
            } else {
                setMenu(false)
            }
            if (document.body.scrollTop <= (activeSlideRef.current.offsetTop - 150)) {
                setTabActive("home")
            }
            else if (document.body.scrollTop > (activeSlideRef.current.offsetTop - 150)) {
                setTabActive("aplicativo")
            }
        };
        window.addEventListener("scroll", handleShadow, true); //moved it out the function's body
        return window.removeEventListener("scroll", handleShadow);
    }, []);


    return (<Box
        width="100%"
        height="100%"
        bgColor="white"
    >
        <Box zIndex={0} position="absolute" style={{
            width: "100%",
            height: "900px",
            backgroundSize: "1900px auto",
            backgroundImage: `url(/Vector.svg)`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top left",
        }}>

        </Box>
        <Box height="100vh">
            <Flex
                zIndex={5}
                position="fixed"
                top={0}
                left={0}
                height="20"
                width="100%"
                alignItems="center"
                style={menu?{
                    backgroundSize: "1900px auto",
                    backgroundImage: `url(/Vector.svg)`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top left",
                }:{}}
            >
                <Container maxWidth="1180px">
                    <Flex align="center">
                        <Flex flex="1">
                            <Image src={require("./logo.png")} alt="kid bengala" width={113} height={50} quality={100}>
                            </Image>
                        </Flex>
                        <HStack spacing="9">
                            <Box style={tabActive === "home" ? { borderBottomWidth: 1, borderBottomColor: "white" } : {}}>
                                <Link
                                    fontWeight="bold"
                                    fontSize="18px"
                                    lineHeight="24px"
                                    _hover={{ color: "red.300" }}
                                    onClick={() => navigateTo(0)}
                                    ariaLabel="asd"
                                >Home</Link>
                            </Box>

                            <Box style={tabActive === "aplicativo" ? { borderBottomWidth: 1, borderBottomColor: "white" } : {}}>
                                <Link
                                    fontWeight="medium"
                                    fontSize="16px"
                                    lineHeight="24px"
                                    _hover={{ color: "red.300" }}
                                    onClick={() => navigateTo(activeSlideRef.current.offsetTop - 120)}
                                >Aplicativo</Link>
                            </Box>

                            <Box style={tabActive === "other" ? { borderBottomWidth: 1, borderBottomColor: "white" } : {}}>
                                <Link
                                    fontWeight="medium"
                                    fontSize="16px"
                                    lineHeight="24px"
                                    _hover={{ color: "red.300" }}
                                >Planos</Link>
                            </Box>
                            <Box style={tabActive === "other" ? { borderBottomWidth: 1, borderBottomColor: "white" } : {}}>
                                <Link
                                    fontWeight="medium"
                                    fontSize="16px"
                                    lineHeight="24px"
                                    _hover={{ color: "red.300" }}
                                >Sobre a doença</Link>
                            </Box>

                            <Box style={tabActive === "other" ? { borderBottomWidth: 1, borderBottomColor: "white" } : {}}>
                                <Link
                                    fontWeight="medium"
                                    fontSize="16px"
                                    lineHeight="24px"
                                    _hover={{ color: "red.300" }}
                                >
                                    Sobre nós</Link>
                            </Box>
                            <Box style={tabActive === "other" ? { borderBottomWidth: 1, borderBottomColor: "white" } : {}}>
                                <Link
                                    fontWeight="medium"
                                    fontSize="16px"
                                    lineHeight="24px"
                                    _hover={{ color: "red.300" }}
                                >Contato</Link>
                            </Box>
                        </HStack>
                    </Flex>
                </Container>
            </Flex>
            <Flex
                zIndex={3}
                position="relative"
                flexDirection="column"
                paddingTop="20"
            >
                <Flex flex="1">
                    <Container maxWidth="1180px">
                        <Grid templateColumns={{ md: "1fr 450px" }} gridTemplateAreas={{ sm: `'b' 'a'`, md: `'a b'`, lg: `'a b'` }} paddingTop="10">
                            <GridItem gridArea="a">
                                <Flex marginTop={{ sm: 8, md: 0 }} align={{sm: "center", md: "baseline"}} justify="center" flexDirection="column">
                                    <Box fontSize={{ sm: "2xl", md: "4xl", lg: "5xl" }} fontWeight="bold" color="white">
                                        <Text textAlign={{sm: "center", md: "left"}}>Acompanhe sua evolução do tratamento da paralisia facial com o aplicativo BELLS</Text>
                                    </Box>
                                    <Button
                                        marginTop="2"
                                        paddingX="16"
                                        paddingY="6"
                                        bgGradient="linear-gradient(90deg, #F78C1F 0%, #F92B7F 100%)"
                                        borderRadius="12px"
                                    >
                                        <Text
                                            fontSize="14px"
                                            textTransform="uppercase"
                                            fontWeight="bold"
                                        >Experimente agora</Text>
                                    </Button>
                                </Flex>
                            </GridItem>

                            <GridItem gridArea="b">
                                <Flex align="center" justify="center">
                                    <Box maxWidth={{ sm: "350px", md: "440px", lg: "440px" }}  >

                                        <Image style={{
                                            width: '100%',
                                            maxWidth: 440,
                                            height: "auto"
                                        }} src={require('./maskgroup.png')} alt="fireSpot" quality={100} />
                                    </Box>
                                </Flex>
                            </GridItem>
                        </Grid>

                        <Box id="aplicativo" ref={activeSlideRef} marginTop="110px">
                            <Flex flexDirection="column" align="center">
                                <Box width="100px" rounded="full" height={"1"} bgGradient="linear(90deg, #F78C1F 0%, #F92B7F 100%)"></Box>
                                <Box marginTop="16px" width="200px" rounded="full" height={"1"} bgGradient="linear(90deg, #F78C1F 0%, #F92B7F 100%)"></Box>
                                <Box marginTop="12px" width="200px" rounded="full" height={"40px"}>
                                    <Flex>
                                        <Image alt="kid" src={require("./appIcon.svg")} width={31} height={38} />
                                        <div style={{
                                            background: "linear-gradient(90deg, #F78C1F 0%, #F92B7F 100%)",
                                            backgroundClip: "text",
                                            WebkitTextFillColor: 'transparent',
                                            WebkitBackgroundClip: "text"
                                        }}>
                                            <Text marginLeft="4" fontSize="2xl" fontWeight="medium">O Aplicativo</Text>

                                        </div>
                                    </Flex>
                                </Box>
                            </Flex>
                            <Box marginTop="38px">
                                <Flex justify="center"><Text marginLeft="4" fontSize="20px" fontWeight="medium" color="#212529">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac nunc felis.</Text></Flex>
                                <Grid templateColumns='1fr 450px'>
                                    <GridItem>
                                        <Flex marginTop="42px" paddingX={"36px"}>
                                            <Text fontWeight="normal" fontSize="16px" color="#495057">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac nunc felis. Etiam tempus massa sit amet tincidunt iaculis. Integer semper justo sed massa pretium scelerisque viverra vitae elit. Duis ac nisi eget mauris elementum sagittis. Mauris mattis commodo risus, a gravida metus varius a. Phasellus feugiat pellentesque cursus. Nunc ut nulla in odio lobortis laoreet.</Text>
                                        </Flex>

                                    </GridItem>
                                    <GridItem>
                                        <Image alt="icon people" src={require("./iconPeople.png")} width={454} height={440}>
                                        </Image>
                                    </GridItem>
                                </Grid>

                            </Box>
                        </Box>

                        <Box width={600} height={600}></Box>
                        <Box width={600} height={600}></Box>
                        <Box width={600} height={600}></Box>
                        <Box width={600} height={600}></Box>


                    </Container>

                </Flex>



            </Flex>
        </Box>

    </Box >
    )
}