const { Box } = require('@chakra-ui/react')

const Footer = () => {
    return (
        <Box align='center' opacity={0.28} fontSize='sm'>
            &copy; {new Date().getFullYear()} Rubén Maté
        </Box>
    )
}

export default Footer
