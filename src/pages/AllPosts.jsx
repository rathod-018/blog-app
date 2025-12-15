import React, { useState, useEffect } from "react";
import appwriteService from "../Appwrite/config";
import PostCard from "../components/PostCard";
import Container from "../components/container/Container";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts([]).then((post) => {
      if (post) {
        setPosts(post.documents);
      }
    });
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-2/4">
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
