import React from "react";
import Comment from "../comment/Comment";

import "./_comments.scss";

const Comments = () => {
  const handleComment = () => {};
  return (
    <div className="comments">
      <p>10 Comments</p>
      <div className="comments__form d-flex w-100 my-2">
        <img
          src="https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png"
          alt="avatar"
          className="rounded-circle mr-3"
        />
        <form onSubmit={handleComment} className="d-flex flex-grow-1">
          <input
            placeholder="Write a comment"
            type="text"
            className="flex-grow-1"
          />
          <button className="border-0 p-2">Comment</button>
        </form>
      </div>
      <div className="comments__list">
          {
              [...new Array(10)].map((value, i) => <Comment key={i}/>)
          }
      </div>
    </div>
  );
};

export default Comments;
