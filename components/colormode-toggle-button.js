import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

// TODO: Add animations with Framer-motion
const ColorModeToggleButton = () => {
    const { toggleColorMode } = useColorMode()
    return (
        <IconButton
            aria-label='Toggle color mode'
            icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
            onClick={toggleColorMode}
            colorScheme={useColorModeValue('purple', 'orange')}
        ></IconButton>
    )
}

export default ColorModeToggleButton
