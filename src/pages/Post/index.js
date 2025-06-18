import styles from "./Post.module.css"
import PostModel from "components/PostModel";
import { Route, Routes, useParams } from "react-router-dom"
import posts from "json/posts.json"
import ReactMarkdown from "react-markdown"
import "./Post.css"
import DefaultPage from "components/DefaultPage";
import NotFound from "pages/NotFound";
import PostCard from "components/PostCard";

const Post = () => {

  const parameters = useParams();
  const post = posts.find((post) => post.id === Number(parameters.id));

  if (!post) {
    return <NotFound/>
  }

  const recommendedPosts = posts
    .filter((post) => post.id !== Number(parameters.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);

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

            <h2 className={styles.titleOthersPosts}>Other posts you might like:</h2>

            <ul className={styles.recommendedPosts}>
              {recommendedPosts.map((post) =>
                <li>
                  <PostCard post={post} key={post.id}/>
                </li>
              )}
            </ul>

          </PostModel>}
        />
      </Route>
    </Routes>
  )
}

export default Post