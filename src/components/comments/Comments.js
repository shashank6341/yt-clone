import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addComment,
  getCommentsOfVideoById,
} from "../../redux/actions/comments.action";
import Comment from "../comment/Comment";

import "./_comments.scss";

const Comments = ({ videoId, totalComments }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommentsOfVideoById(videoId));
  }, [videoId, dispatch]);

  const { loading, comments } = useSelector((state) => state.commentsList);

  const _comments = comments?.map(
    (comment) => comment.snippet.topLevelComment.snippet
  );

  const [text, setText] = useState("");

  const handleComment = (e) => {
    e.preventDefault();
    if (text.length === 0) return;

    dispatch(addComment(videoId, text));
    setText("");
  };
  return (
    <div className="comments">
      <p>{totalComments} Comments</p>
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
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="border-0 p-2">Comment</button>
        </form>
      </div>
      <div className="comments__list">
        {!loading ? (
          _comments.map((comment, i) => <Comment comment={comment} key={i} />)
        ) : (
          <h6>Loading Comments</h6>
        )}
      </div>
    </div>
  );
};

export default Comments;
