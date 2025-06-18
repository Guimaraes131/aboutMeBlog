import PostModel from "components/PostModel";
import { Route, Routes, useParams } from "react-router-dom"
import posts from "json/posts.json"
import ReactMarkdown from "react-markdown"
import "./Post.css"
import DefaultPage from "components/DefaultPage";
import NotFound from "pages/NotFound";

const Post = () => {

  const parameters = useParams();
  const post = posts.find((post) => post.id === Number(parameters.id));

  if (!post) {
    return <NotFound/>
  }

  return (

    <Routes>
      <Route path="*" element={<DefaultPage />}>
        <Route index element={
          <PostModel
            fotoCapa={`/assets/posts/${post.id}/capa.png`}
            title={post.titulo}
          >
            <div className="post-markdown-container">
              <ReactMarkdown>
                {post.texto}
              </ReactMarkdown>
            </div>
          </PostModel>}
        />
      </Route>
    </Routes>


  )
}

export default Post