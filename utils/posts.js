import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"

const postsDirectory = path.join(process.cwd(), "posts")

export function getSortedPostsData() {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, "")

        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, "utf8")

        const matterResult = matter(fileContents)

        return {
            id,
            ...matterResult.data,
        }
    })
    return allPostsData.sort(({ date: a }, { date: b }) => {
        if (a < b) {
            return 1
        } else if (a > b) {
            return -1
        } else {
            return 0
        }
    })
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory)

    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ""),
            },
        }
    })
}

export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, "utf8")

    const matterResult = matter(fileContents)

    const processedContent = await remark().process(matterResult.content)
    const contentMarkdown = processedContent.toString()

    return {
        id,
        contentMarkdown,
        ...matterResult.data,
    }
}

export async function generateRssFeed() {
    const posts = getSortedPostsData()
    const siteURL = process.env.SITE_URL
    const date = new Date()
    console.log(`Posts: ${posts} siteURL: ${siteURL} date: ${date}`)
    return siteURL
    //
    //     const author = {
    //         name: "Rubén Maté",
    //
    //         email: "contacto@rubenmate.com",
    //     }
    //
    //     // const feed = new Feed({
    //     //     title: "Rubén Maté blog",
    //     //
    //     //     description: "",
    //     //
    //     //     id: siteURL,
    //     //
    //     //     link: siteURL,
    //     //
    //     //     // image: `${siteURL}/logo.svg`,
    //     //     //
    //     //     // favicon: `${siteURL}/favicon.png`,
    //     //
    //     //     copyright: `All rights reserved ${date.getFullYear()}, Rubén Maté`,
    //     //
    //     //     updated: date,
    //     //
    //     //     generator: "Feed for Node.js",
    //     //
    //     //     feedLinks: {
    //     //         rss2: `${siteURL}/rss/feed.xml`,
    //     //
    //     //         json: `${siteURL}/rss/feed.json`,
    //     //
    //     //         atom: `${siteURL}/rss/atom.xml`,
    //     //     },
    //     //
    //     //     author,
    //     // })
    //
    //     console.log(posts)
    //
    //     // posts.forEach((post) => {
    //     //     const url = `${siteURL}/posts/${post.id}`
    //     //
    //     //     feed.addItem({
    //     //         title: post.title,
    //     //
    //     //         id: url,
    //     //
    //     //         link: url,
    //     //
    //     //         description: post.description,
    //     //
    //     //         content: post.content,
    //     //
    //     //         author: [author],
    //     //
    //     //         contributor: [author],
    //     //
    //     //         date: new Date(post.publishedAt),
    //     //     })
    //     // })
    //     //
    //     // fs.mkdirSync("./public/rss", { recursive: true })
    //     //
    //     // fs.writeFileSync("./public/rss/feed.xml", feed.rss2())
    //     //
    //     // fs.writeFileSync("./public/rss/atom.xml", feed.atom1())
    //     //
    //     // fs.writeFileSync("./public/rss/feed.json", feed.json1())
}
