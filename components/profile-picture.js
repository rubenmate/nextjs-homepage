import { Box, Image, useColorModeValue } from '@chakra-ui/react'

const ProfilePicture = () => {
    return (
        <Box
            flexShrink={0}
            mt={{ base: 4, md: 4 }}
            ml={{ md: 6 }}
            align='center'
        >
            <Image
                borderColor={useColorModeValue('purple', '#8be9fd ')}
                borderWidth={2}
                borderStyle='solid'
                maxWidth='150px'
                display='inline-block'
                borderRadius='full'
                src='/images/profileimage.png'
                alt='Profile Image'
                bgGradient={useColorModeValue(
                    'linear(to-t, #6B46C1 3%, white 70%)',
                    'linear(to-t, #8be9fd 3%, #161b22 70%)'
                )}
            />
        </Box>
    )
}

export default ProfilePicture
