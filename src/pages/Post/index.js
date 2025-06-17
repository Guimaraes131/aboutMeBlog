import PostModel from "components/PostModel";
import { useParams } from "react-router-dom"
import posts from "json/posts.json"
import ReactMarkdown from "react-markdown"
import "./Post.css"

const Post = () => {

  const parameters = useParams();
  const post = posts.find((post) => post.id === Number(parameters.id));

  if (!post) {
    return <h1>Not Found</h1>
  }

  return (
    <PostModel
      fotoCapa={`/assets/posts/${post.id}/capa.png`}
      title={post.titulo}
    >
      <div className="post-markdown-container">
        <ReactMarkdown>
          {post.texto}
        </ReactMarkdown>
      </div>
    </PostModel>
  )
}

export default Post