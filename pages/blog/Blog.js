import {getAllPostData} from '../../components/Post';
import Link from "next/link";

export default function Blog({posts}) {
  return(
    <div className='blog-page'>
      {posts.map((post,index)=>(
        <div className='blog-preview' key={index}>
          <Link href={'/blog/'+ post.slug}>
              <h3>{post.title}</h3>
          </Link>
          <p className='p-2'>{post.date}</p>
          <p className='p-2 p-a'>{post.author}</p>
          <p className='p-3'>{post.excerpt}</p>
        </div>
      ))}     
    </div>
  )
}

export async function getStaticProps(){
  const posts = getAllPostData()

  return {
    props:{
      posts
    }
  }
}