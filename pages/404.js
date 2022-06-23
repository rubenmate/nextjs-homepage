import NextLink from 'next/link'
import {
    Box,
    Heading,
    Text,
    Container,
    Divider,
    Button,
    useColorModeValue
} from '@chakra-ui/react'

const NotFound = () => {
    return (
        <Container mt={10} textAlign='center'>
            <Heading as='h1'>Error 404 - Not Found</Heading>
            <Text>This page could not be found</Text>
            <Divider my={6} />
            <Box my={6} align='center'>
                <NextLink href='/'>
                    <Button
                        colorScheme={useColorModeValue('purple', 'telegram')}
                    >
                        Go back to home
                    </Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound
