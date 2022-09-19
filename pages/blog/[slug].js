import { getAllPostSlug, getPostData } from "../../components/Post"

export default function PostPage({postData}){
    return (
        <>
        <div className="blog-content">
            <div dangerouslySetInnerHTML={{__html:postData.contentHtml}}></div>
        </div>
        </>
    )
}

export async function getStaticPaths(){
    const paths = getAllPostSlug()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}){
    const postData = await getPostData(params.slug)

    return {
        props: {
            postData
        }
    }
}
