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

        Heading: {
            variants: {
                title: {
                    textDecoration: 'underline',
                    fontSize: 32,
                    textUnderlineOffset: 6,
                    textDecorationColor: '#525252',
                    textDecorationThickness: 4,
                    marginTop: 3,
                    marginBottom: 4,
                },
                'section-title': {
                    textDecoration: 'underline',
                    fontSize: 22,
                    textUnderlineOffset: 6,
                    textDecorationColor: '#525252',
                    textDecorationThickness: 4,
                    marginTop: 3,
                    marginBottom: 4,
                },
                'post-title': {
                    textDecoration: 'underline',
                    fontSize: 20,
                    textUnderlineOffset: 6,
                    textDecorationColor: '#525252',
                    textDecorationThickness: 3,
                    marginBottom: 2,
                },
            },
        },
    },
})

export default theme
