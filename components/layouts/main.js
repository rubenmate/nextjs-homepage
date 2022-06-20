import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar'
import Footer from '../footer'

const Main = ({ children, router }) => {
    return (
        <Box as='main' height='100vh' display='flex' flexDir='column'>
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
    )
}

export default Main
