// Single Comment

import React from "react";
import moment from "moment";

import "./_comment.scss";

const Comment = () => {
  return (
    <div className="comment p-1 d-flex">
      <img
        src="https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png"
        alt="avatar"
        className="rounded-circle mr-3"
      />
      <div className="comment__body">
        <p className="comment__header mb-2 mt-1">
          Shashank Verma • {moment("2021-03-26").fromNow()}
        </p>
        <p className="mb-2">Amazing Music!</p>
      </div>
    </div>
  );
};

export default Comment;
