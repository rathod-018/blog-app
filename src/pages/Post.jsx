import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../Appwrite/config";
import Button from "../components/Button";
import Container from "../components/container/Container";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const { slug } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData && post.userId === userData.$id;

  useEffect(() => {
    if (!slug) {
      navigate("/");
      return;
    }

    appwriteService.getPost(slug).then((response) => {
      if (response) {
        setPost(response);
      } else {
        navigate("/");
      }
      setLoading(false);
    });
  }, [slug, navigate]);

  const deletePost = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (!confirmed) return;

    const status = await appwriteService.deletePost(post.$id);
    if (status) {
      if (post.featuredImage) {
        await appwriteService.deleteFile(post.featuredImage);
      }
      navigate("/");
    }
  };

  if (loading) {
    return (
      <div className="py-10 text-center text-sm text-gray-400">
        Loading post...
      </div>
    );
  }

  if (!post) return null;

  return (
    <section className="py-10">
      <Container>
        {post.featuredImage && (
          <div className="relative mb-8 overflow-hidden rounded-xl border border-[#2a2a2f]">
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="w-full max-h-[420px] object-cover"
            />

            {isAuthor && (
              <div className="absolute right-4 top-4 flex gap-2">
                <Link to={`/edit-post/${post.$id}`}>
                  <Button variant="ghost">Edit</Button>
                </Link>
                <Button variant="ghost" onClick={deletePost}>
                  Delete
                </Button>
              </div>
            )}
          </div>
        )}
        <h1 className="mb-6 text-3xl font-semibold text-gray-200">
          {post.title}
        </h1>
        <article className="prose prose-invert max-w-none prose-p:text-gray-300 prose-headings:text-gray-200">
          {parse(post.content)}
        </article>
      </Container>
    </section>
  );
}
