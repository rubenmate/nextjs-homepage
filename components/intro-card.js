import { Box, useColorModeValue } from '@chakra-ui/react'

const IntroCard = ({ children }) => {
    return (
        <Box
            p={4}
            mb={6}
            mt={3}
            textAlign="center"
            bg={useColorModeValue('#6B46C1', '#8be9fd')}
            textColor={useColorModeValue('white', 'navy')}
            borderRadius="lg"
        >
            {children}
        </Box>
    )
}

export default IntroCard
