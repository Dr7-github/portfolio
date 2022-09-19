import fs from 'fs'
import path from "path";
import matter from "gray-matter";
import {remark} from 'remark';
import html from 'remark-html'

const postDirectory = path.join(process.cwd(),'posts')

export function getAllPostData(){
    const files = fs.readdirSync(postDirectory)
    const allPostData = files.map(filesname => {
        const slug = filesname.replace(/\.md$/,'')

        const fullPath = path.join(postDirectory,filesname)
        const fileContents = fs.readFileSync(fullPath,'utf-8')

        const matterResult = matter(fileContents)

        return {
            slug,
            ...matterResult.data
        }
    })
    
    return allPostData
}

export function getAllPostSlug(){
    const files = fs.readdirSync(postDirectory)
    return files.map(filename => {
        return {
            params: {
                slug:filename.replace(/\.md$/,'')
            }
        }
    })
}

export async function getPostData(slug){
    const fullPath = path.join(postDirectory,slug + '.md')
    const fileContent = fs.readFileSync(fullPath,'utf-8')

    const matterResult = matter(fileContent)

    const processedContent = await remark()
    .use(html)
    .process(matterResult.content)

    const contentHtml = processedContent.toString()

    return {
        slug,
        contentHtml,
        ...matterResult.data
    }
}