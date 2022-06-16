import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ColorModeToggleButton = () => {
    const { toggleColorMode } = useColorMode()
    return (
        <IconButton
            aria-label='Toggle color mode'
            icon={useColorModeValue(<SunIcon />, <MoonIcon />)}
            onClick={toggleColorMode}
        ></IconButton>
    )
}

export default ColorModeToggleButton
