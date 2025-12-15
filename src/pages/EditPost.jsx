import React, { useEffect, useState } from "react";
import Container from "../components/container/Container";
import PostForm from "../components/post-form/PostForm";
import appwriteService from "../Appwrite/config";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();
  const navigate = useNavigate();

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

  if (loading) {
    return (
      <div className="py-10 text-center text-sm text-gray-400">
        Loading post...
      </div>
    );
  }

  return (
    <section className="py-10">
      <Container>
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-200">Edit post</h1>
          <p className="mt-1 text-sm text-gray-400">
            Update your content and publish changes.
          </p>
        </div>

        {post && <PostForm post={post} />}
      </Container>
    </section>
  );
}

export default EditPost;
