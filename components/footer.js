const { Box, Flex } = require('@chakra-ui/react')

const Footer = () => {
    return (
        <Flex
            height='max'
            flexGrow='1'
            flexDir='column'
            justify='flex-end'
            pb={8}
        >
            <Box align='center' opacity={0.28} fontSize='sm'>
                &copy; {new Date().getFullYear()} Rubén Maté | Design inspired
                by <a href='https://www.craftz.dog/'>crafztdog</a>
            </Box>
        </Flex>
    )
}

export default Footer
