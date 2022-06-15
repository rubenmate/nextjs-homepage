import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const theme = extendTheme({
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: true,
    },

    styles: {
        global: (props) => ({ body: { bg: mode('white', '#161b22')(props) } }),
    },

    fonts: {
        heading: "'M PLUS Rounded 1c'",
    },

    components: {
        Link: {
            baseStyle: (props) => ({
                color: mode('#6B46C1', '#8be9fd')(props),
                textUnderlineOffset: 3,
                fontWeight: 'bold',
                // TODO: Decide if bold or semibold
            }),
        },
    },
})

export default theme
