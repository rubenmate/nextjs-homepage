import NextLink from "next/link"
import {
    Container,
    Box,
    Heading,
    Link,
    List,
    ListItem,
    Button,
    Icon,
    useColorModeValue,
    useColorMode,
    Flex,
} from "@chakra-ui/react"
import styled from "@emotion/styled"
import IntroCard from "../components/intro-card"
import ProfilePicture from "../components/profile-picture"
import { Project, ProjectTitle } from "../components/projects"
import { IoLogoGithub } from "react-icons/io5"
import { IoLogoLinkedin } from "react-icons/io"
import { ChevronRightIcon } from "@chakra-ui/icons"

const TextHighlight = styled.span`
    font-weight: bold;
    color: ${(props) => (props.light ? "gray" : "turquoise")};
`

const TextUnderline = styled.span`
    text-decoration: underline;
`
const Page = () => {
    const { colorMode } = useColorMode()
    return (
        <Container>
            <Box height={30} />
            <IntroCard>
                Hello, my name is <TextUnderline>Rubén Maté</TextUnderline> and I&apos;m a front end
                developer from Spain
            </IntroCard>
            <ProfilePicture />

            <Box as="section" mb={6}>
                <Heading as="h3" variant="section-title">
                    Whoami
                </Heading>
                <Box textAlign="left">
                    I&apos;m a last year student of Computer Science degree in Burgos University. I
                    love everything related to coding and learning new programming languages and
                    frameworks but I&apos;m mostly learning{" "}
                    {colorMode === "light" ? (
                        <TextHighlight light>web development</TextHighlight>
                    ) : (
                        <TextHighlight dark>web development</TextHighlight>
                    )}
                    .
                </Box>
                <Box textAlign="left" mt={6}>
                    My developer workflow revolves around the terminal and I have my own{" "}
                    <Link href="https://github.com/rubenmate/dotfiles">
                        Neovim config and dotfiles
                    </Link>
                    . <br />
                    Thanks for stopping by!
                </Box>
                <Box align="center" mb={6}>
                    <NextLink href="/posts" passHref scroll={false}>
                        <Button
                            mt={4}
                            colorScheme={useColorModeValue("purple", "orange")}
                            rightIcon={<ChevronRightIcon />}
                        >
                            Check my latest blog posts!
                        </Button>
                    </NextLink>
                </Box>
            </Box>

            <Box mb={6}>
                <Heading as="h3" variant="section-title">
                    Projects
                </Heading>
                <Box textAlign="left">
                    <Project>
                        <ProjectTitle>
                            <Link href="https://pokedex.rubenmate.com">Pokedex App:</Link>
                        </ProjectTitle>
                        Project to experiment with a fullstack aproach to web development. It uses a
                        stack consisting of Next.js, tRPC and Tailwind.
                        <br />
                        Source code on{" "}
                        <Link href="https://github.com/rubenmate/pokedex-app">GitHub</Link>
                    </Project>
                    <Project>
                        <ProjectTitle>
                            <Link href="https://github.com/rubenmate/homepage">
                                My own homepage:
                            </Link>
                        </ProjectTitle>
                        Built with Next.js as a React framework and ChakraUI (an accesible library
                        for React components){" "}
                    </Project>
                    <Project>
                        <ProjectTitle>
                            <Link href="https://todo-list-rubenmate.vercel.app/">To-Do App:</Link>
                        </ProjectTitle>
                        Simple To-Do List app written in React. Built for learning the React
                        fundamentals with Typescript. It is also using Vite and Tailwind CSS.
                        <br />
                        Source code on{" "}
                        <Link href="https://github.com/rubenmate/todo-list">GitHub</Link>
                    </Project>
                </Box>
            </Box>

            <Box as="section" mb={6}>
                <Heading as="h3" variant="section-title">
                    Skills
                </Heading>
                <Flex as="div" justify="space-around" align="center">
                    <Box
                        w={{ base: "40px", sm: "60px" }}
                        _hover={{ transform: "scale(1.2)", transition: "transform 0.3s ease" }}
                    >
                        <svg viewBox="0 0 128 128">
                            <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path>
                            <path
                                fill="#323330"
                                d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
                            ></path>
                        </svg>
                    </Box>
                    <Box
                        w={{ base: "40px", sm: "60px" }}
                        _hover={{ transform: "scale(1.2)", transition: "transform 0.3s ease" }}
                    >
                        <svg viewBox="0 0 128 128">
                            <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path>
                            <path
                                data-name="original"
                                fill="#007acc"
                                d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
                            ></path>
                        </svg>
                    </Box>

                    <Box
                        w={{ base: "40px", sm: "60px" }}
                        _hover={{ transform: "scale(1.2)", transition: "transform 0.3s ease" }}
                    >
                        <svg viewBox="0 0 128 128">
                            <g fill="#61DAFB">
                                <circle cx="64" cy="64" r="11.4"></circle>
                                <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
                            </g>
                        </svg>
                    </Box>

                    <Box
                        w={{ base: "40px", sm: "60px" }}
                        _hover={{ transform: "scale(1.2)", transition: "transform 0.3s ease" }}
                    >
                        <svg viewBox="0 0 128 128">
                            <path
                                fill="#E44D26"
                                d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
                            ></path>
                            <path
                                fill="#F16529"
                                d="M64 116.8l36.378-10.086 8.559-95.878H64z"
                            ></path>
                            <path
                                fill="#EBEBEB"
                                d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
                            ></path>
                            <path
                                fill="#fff"
                                d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
                            ></path>
                        </svg>
                    </Box>
                    <Box
                        w={{ base: "40px", sm: "60px" }}
                        _hover={{ transform: "scale(1.2)", transition: "transform 0.3s ease" }}
                    >
                        <svg viewBox="0 0 128 128">
                            <path
                                fill="#1572B6"
                                d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"
                            ></path>
                            <path
                                fill="#33A9DC"
                                d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"
                            ></path>
                            <path
                                fill="#fff"
                                d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"
                            ></path>
                            <path
                                fill="#EBEBEB"
                                d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"
                            ></path>
                            <path
                                fill="#fff"
                                d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"
                            ></path>
                            <path
                                fill="#EBEBEB"
                                d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"
                            ></path>
                        </svg>
                    </Box>
                    <Box
                        w={{ base: "40px", sm: "60px" }}
                        _hover={{ transform: "scale(1.2)", transition: "transform 0.3s ease" }}
                    >
                        <svg viewBox="0 0 128 128">
                            <path
                                fill="#F34F29"
                                d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z"
                            ></path>
                        </svg>
                    </Box>
                </Flex>
            </Box>

            <Box as="section" mb={6}>
                <Heading as="h3" variant="section-title">
                    Web Presence
                </Heading>
                <List>
                    <ListItem>
                        <Link href="https://github.com/rubenmate" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme={useColorModeValue("purple", "telegram")}
                                leftIcon={<Icon as={IoLogoGithub} />}
                            >
                                @rubenmate
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://www.linkedin.com/in/ruben-mate" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme={useColorModeValue("purple", "telegram")}
                                leftIcon={<Icon as={IoLogoLinkedin} />}
                            >
                                @ruben-mate
                            </Button>
                        </Link>
                    </ListItem>
                </List>
            </Box>
        </Container>
    )
}

export default Page
