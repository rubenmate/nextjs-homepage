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
} from "@chakra-ui/react"
import IntroCard from "../components/intro-card"
import ProfilePicture from "../components/profile-picture"
import { Project, ProjectTitle } from "../components/projects"
import { IoLogoGithub } from "react-icons/io5"
import { IoLogoLinkedin } from "react-icons/io"

const Page = () => {
    return (
        <Container>
            <Box display={{ md: "flex" }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Rubén Maté
                    </Heading>
                </Box>
            </Box>
            <IntroCard>
                Hello, my name is Rubén and I&apos;m a computer science student
                from Burgos, Spain. I love coding and I love doing it on Neovim.
            </IntroCard>
            <ProfilePicture />

            <Box as="section" mb={6}>
                <Heading as="h3" variant="section-title">
                    Whoami
                </Heading>
                <Box textAlign="justify">
                    I&apos;m a last year student of Computer Science degree in
                    Burgos University. I love everything related to coding and
                    learning new programming languages and frameworks. My
                    developer workflow revolves around the terminal and I have
                    my own{" "}
                    <Link href="https://github.com/rubenmate/dotfiles">
                        Neovim config and dotfiles
                    </Link>
                    . <br />
                    Thanks for stopping by!
                </Box>
            </Box>

            <Box mb={6}>
                <Heading as="h3" variant="section-title">
                    Projects
                </Heading>
                <Box textAlign="justify">
                    I&apos;m currently learning JavaScript/Typescript, HTML/CSS
                    and React.
                    <Project>
                        <ProjectTitle>
                            <Link href="https://pokedex.rubenmate.com">
                                Pokedex App:
                            </Link>
                        </ProjectTitle>
                        Project to experiment with a fullstack aproach to web
                        development. It uses a stack consisting of Next.js, tRPC
                        and Tailwind.
                        <br />
                        Link to the source code on{" "}
                        <Link href="https://github.com/rubenmate/pokedex-app">
                            GitHub
                        </Link>
                    </Project>
                    <Project>
                        <ProjectTitle>
                            <Link href="https://github.com/rubenmate/homepage">
                                My own homepage:
                            </Link>
                        </ProjectTitle>
                        Built with Next.js as a React framework and ChakraUI (an
                        accesible library for React components){" "}
                    </Project>
                    <Project>
                        <ProjectTitle>
                            <Link href="https://github.com/rubenmate/Letterboxd-Tweet-Poster">
                                LetterBot:
                            </Link>
                        </ProjectTitle>
                        Simple Python script to automate a repetitive task. It
                        will search your Letterboxd profile and tweet your last
                        logged films in a Twitter thread.
                    </Project>
                </Box>
            </Box>
            <Box as="section" mb={6}>
                <Heading as="h3" variant="section-title">
                    Web Presence
                </Heading>
                <List>
                    <ListItem>
                        <Link
                            href="https://github.com/rubenmate"
                            target="_blank"
                        >
                            <Button
                                variant="ghost"
                                colorScheme={useColorModeValue(
                                    "purple",
                                    "telegram"
                                )}
                                leftIcon={<Icon as={IoLogoGithub} />}
                            >
                                @rubenmate
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link
                            href="https://www.linkedin.com/in/ruben-mate"
                            target="_blank"
                        >
                            <Button
                                variant="ghost"
                                colorScheme={useColorModeValue(
                                    "purple",
                                    "telegram"
                                )}
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
