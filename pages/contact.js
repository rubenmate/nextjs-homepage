import { Box, Link, Heading, Container } from '@chakra-ui/react'
import { AiTwotoneMail } from 'react-icons/ai'

const Contact = () => {
    return (
        <Container>
            <Box mb={6}>
                <Heading as='h3' variant='section-title'>
                    Contact
                </Heading>
                You can reach me at{' '}
                <Link
                    href='mailto:contacto@rubenmate.com'
                    display='inline-flex'
                    alignItems='center'
                    style={{ gap: 4 }}
                >
                    contacto@rubenmate.com
                    <AiTwotoneMail />
                </Link>
            </Box>
        </Container>
    )
}

export default Contact
