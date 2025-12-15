import React from "react";
import Container from "../components/container/Container";
import PostForm from "../components/post-form/PostForm";

function AddPost() {
  return (
    <section className="py-10">
      <Container>
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-200">
            Write a new post
          </h1>
        </div>

        <PostForm />
      </Container>
    </section>
  );
}

export default AddPost;
