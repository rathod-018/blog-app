import React from "react";
import appwriteService from "../Appwrite/config.js";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  console.log(appwriteService.getFilePreview(featuredImage));
  return (
    <Link to={`/post/${$id}`} className="group">
      <article
        className="w-full rounded-xl border border-[#2a2a2f] bg-[#16161a]
                   overflow-hidden transition-all
                   hover:border-amber-500/40 hover:shadow-lg"
      >
        <div className="aspect-[16/9] w-full overflow-hidden bg-[#0e0e11]">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="h-full w-full object-cover transition-transform
                       duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h2
            className="text-base font-semibold text-gray-200 line-clamp-2
                       group-hover:text-amber-400 transition-colors"
          >
            {title}
          </h2>
        </div>
      </article>
    </Link>
  );
}

export default PostCard;
