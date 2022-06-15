import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children, router }) => {
    return (
        <Box as='main' pb={10}>
            <Head>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <title>ruben-mate</title>
            </Head>
            <Container maxW='container.md' pt={12}>
                {children}
            </Container>
        </Box>
    )
}

export default Main
