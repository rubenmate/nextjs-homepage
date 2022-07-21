import NextLink from 'next/link'

const { Box, Container, Heading, Text } = require('@chakra-ui/react')
import { getSortedPostsData } from '../utils/posts'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData,
        },
    }
}

const Posts = ({ allPostsData }) => {
    console.log(allPostsData)

    const emptyView = (
        <Box pt={50} align="center">
            <Heading as="h3" variant="section-title">
                Nothing to see here... yet
            </Heading>
        </Box>
    )
    const normalView = (
        <Box pt={2}>
            <Heading as="h3" variant="title" pb={6}>
                Posts
            </Heading>
            {allPostsData.map(({ id, date, title, description }) => {
                let dateToFormat = new Date(date)
                return (
                    <>
                        <NextLink key={id} href={`/posts/${id}`} passHref scroll={false}>
                            <Box
                                as="article"
                                justifySelf="start"
                                cursor="pointer"
                                _hover={{
                                    'background-color': '#80808010',
                                }}
                            >
                                <Heading as="h4" variant="post-title">
                                    {title}
                                </Heading>
                                <Box as="p">{description}</Box>
                                <Text fontSize="sm" pt={2} mb={4}>
                                    {dateToFormat.toLocaleString('en-US', {
                                        weekday: 'short',
                                        day: 'numeric',
                                        year: 'numeric',
                                        month: 'long',
                                    })}
                                </Text>
                            </Box>
                        </NextLink>
                        <Box mt={12} />
                    </>
                )
            })}
        </Box>
    )
    return <Container>{allPostsData.at(0) === undefined ? emptyView : normalView}</Container>
}

export default Posts
