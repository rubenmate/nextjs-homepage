import { Box, Container, Heading } from "@chakra-ui/react"
import styled from "@emotion/styled"
import { Remark } from "react-remark"
import { getAllPostIds, getPostData } from "../../utils/posts"

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData,
        },
    }
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false,
    }
}

const Paragraph = styled.p`
    margin-bottom: 20px;
    margin-top: 20px;
`
export default function Post({ postData }) {
    const dateToFormat = new Date(postData.date)
    return (
        <Container>
            <Box pt={2}>
                <Heading as="h3" variant="title">
                    {postData.title}
                </Heading>
                <Box mb={8}>
                    <Box textAlign="left">
                        {dateToFormat.toLocaleString("en-US", {
                            weekday: "short",
                            day: "numeric",
                            year: "numeric",
                            month: "long",
                        })}
                    </Box>
                </Box>
                <Remark
                    remarkToRehypeOptions={{ allowDangerousHtml: true }}
                    rehypeReactOptions={{
                        components: {
                            p: (props) => <Paragraph {...props} />,
                        },
                    }}
                >
                    {postData.contentMarkdown}
                </Remark>
                {/* <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> */}
            </Box>
        </Container>
    )
}
