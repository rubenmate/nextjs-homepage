import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Div100vh from 'react-div-100vh'
import Navbar from '../navbar'
import Footer from '../footer'

const Main = ({ children, router }) => {
    return (
        <Div100vh>
            <Box as='main' height='full' display='flex' flexDir='column'>
                <Head>
                    <meta
                        name='viewport'
                        content='width=device-width, initial-scale=1'
                    />
                    <title>ruben-mate</title>
                </Head>
                <Navbar path={router.asPath} />
                <Container maxW='container.md' pt={12}>
                    {children}
                </Container>
                <Footer />
            </Box>
        </Div100vh>
    )
}

export default Main
