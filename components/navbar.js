import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue,
} from '@chakra-ui/react'
import ColorModeToggleButton from './colormode-toggle-button'
import Logo from './logo'
import { HamburgerIcon } from '@chakra-ui/icons'
import { IoLogoGithub } from 'react-icons/io5'

const LinkItem = ({ path, href, target, children, ...props }) => {
    const isActive = path === href
    const inactiveColor = useColorModeValue('', 'whiteAlpha.900')
    return (
        <NextLink href={href} passHref={true} scroll={false}>
            <Link
                p={2}
                bg={
                    isActive
                        ? useColorModeValue('#6B46C1', '#8be9fd')
                        : undefined
                }
                color={
                    isActive
                        ? useColorModeValue('white', '#161b22')
                        : inactiveColor
                }
                target={target}
                {...props}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = (props) => {
    const { path } = props
    return (
        <Box
            position='fixed'
            as='nav'
            w='100%'
            bg={useColorModeValue('#FFFFFF80', '#161b2280')}
            style={{ backdropFilter: 'blur(10px)' }}
            zIndex={1}
            {...props}
        >
            <Container
                display='flex'
                justify='space-between'
                p={2}
                maxW='container.md'
                wrap='wrap'
            >
                <Flex align='center' mr={5} ml={{ base: 2 }}>
                    <Heading as='h1' size='lg' letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems='center'
                    justifyContent='flex-end'
                    flexGrow={3}
                    mt={{ base: 4, nmd: 0 }}
                >
                    <LinkItem href='/posts' path={path}>
                        Posts
                    </LinkItem>
                    <LinkItem href='/contact' path={path}>
                        Contact
                    </LinkItem>
                    <LinkItem
                        target='_blank'
                        href='https://github.com/rubenmate'
                        path={path}
                        display='inline-flex'
                        alignItems='center'
                        style={{ gap: 4 }}
                        pl={2}
                    >
                        <IoLogoGithub />
                        GitHub
                    </LinkItem>

                    <ColorModeToggleButton />
                </Stack>

                <Box display={{ md: 'none' }} flex={1} align='right'>
                    <ColorModeToggleButton />
                    <Box display={{ base: 'inline-block', md: 'none' }} ml={2}>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant='outline'
                                aria-label='options menu'
                                border='hidden'
                            />
                            <MenuList
                                bg={useColorModeValue('white', '#202023')}
                            >
                                <NextLink href='/contact' passHref>
                                    <MenuItem>Contact</MenuItem>
                                </NextLink>
                                <NextLink
                                    href='https://github.com/rubenmate'
                                    passHref
                                >
                                    <MenuItem style={{ gap: 4 }}>
                                        GitHub
                                        <IoLogoGithub />
                                    </MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar
