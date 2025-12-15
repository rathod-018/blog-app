import React, { useEffect, useState } from "react";
import appwriteService from "../Appwrite/config";
import PostCard from "../components/PostCard";
import Container from "../components/container/Container";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    appwriteService.getPosts([]).then((response) => {
      if (response) {
        setPosts(response.documents);
      }
      setLoading(false);
    });
  }, []);

  return (
    <section className="py-10">
      <Container>
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-200">All Posts</h1>
          <p className="mt-1 text-sm text-gray-400">
            Explore articles written by the community.
          </p>
        </div>
        {loading && <p className="text-sm text-gray-400">Loading posts...</p>}
        {!loading && posts.length === 0 && (
          <p className="text-sm text-gray-400">No posts available yet.</p>
        )}
        {!loading && posts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard
                key={post.$id}
                $id={post.$id}
                title={post.title}
                featuredImage={post.featuredImage}
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

export default AllPosts;
