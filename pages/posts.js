import { useState } from "react"

const { Box, Container, Heading } = require("@chakra-ui/react")

const Posts = () => {
    const [isEmpty, setIsEmpty] = useState(true)
    const emptyView = (
        <Box pt={50} align="center">
            <Heading as="h3" variant="section-title">
                Nothing to see here... yet
            </Heading>
        </Box>
    )
    const normalView = (
        <Box pt={2} align="center">
            <Heading as="h3">A lot to see here...</Heading>
        </Box>
    )
    return <Container>{isEmpty ? emptyView : normalView}</Container>
}

export default Posts
