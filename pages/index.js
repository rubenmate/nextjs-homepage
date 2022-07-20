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
} from "@chakra-ui/react"
import styled from "@emotion/styled"
import IntroCard from "../components/intro-card"
import ProfilePicture from "../components/profile-picture"
import { Project, ProjectTitle } from "../components/projects"
import { IoLogoGithub } from "react-icons/io5"
import { IoLogoLinkedin } from "react-icons/io"

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
            </Box>

            <Box mb={6}>
                <Heading as="h3" variant="section-title">
                    Projects
                </Heading>
                <Box textAlign="left">
                    I&apos;m currently learning JavaScript/Typescript, HTML/CSS and React.
                    <Project>
                        <ProjectTitle>
                            <Link href="https://pokedex.rubenmate.com">Pokedex App:</Link>
                        </ProjectTitle>
                        Project to experiment with a fullstack aproach to web development. It uses a
                        stack consisting of Next.js, tRPC and Tailwind.
                        <br />
                        Link to the source code on{" "}
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
                            <Link href="https://github.com/rubenmate/Letterboxd-Tweet-Poster">
                                LetterBot:
                            </Link>
                        </ProjectTitle>
                        Simple Python script to automate a repetitive task. It will search your
                        Letterboxd profile and tweet your last logged films in a Twitter thread.
                    </Project>
                </Box>
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
