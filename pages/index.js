import { Container } from '@chakra-ui/react'
import Footer from '../components/footer'
import IntroCard from '../components/intro-card'

const Page = () => {
    return (
        <Container>
            <IntroCard>
                Hello, my name is Rubén and I&apos;m a computer science student
                from Burgos, Spain. I love coding and I love doing it on Neovim.
            </IntroCard>
            <Footer />
        </Container>
    )
}

export default Page
