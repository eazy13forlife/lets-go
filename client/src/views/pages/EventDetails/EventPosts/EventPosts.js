import React, { useState, useEffect } from "react";
import moment from "moment";

import { getEventPosts, createEventPost } from "./helpers.js";
import EventPost from "../../../../components/EventPost/EventPost.js";
import "./EventPosts.scss";

const EventPosts = ({ user, eventId }) => {
  const [posts, setPosts] = useState([]);

  const [postBody, setPostBody] = useState("");

  const [findPostsErrors, setFindPostsErrors] = useState([]);

  const [createPostErrors, setCreatePostErrors] = useState([]);

  useEffect(() => {
    getEventPosts(eventId, setPosts, setFindPostsErrors);
  }, []);

  const onPostSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      postBody: postBody,
      eventId,
      author: user.username,
      appUserId: user.appUserId,
      postDate: moment().format("YYYY-MM-DDThh:mm:ss"),
    };

    const response = await createEventPost(postData, user.jwtToken);

    if (response.status === 201) {
      await getEventPosts(eventId, setPosts, setFindPostsErrors);

      setPostBody("");
    } else {
      setCreatePostErrors(response.errorMessages);
    }
  };

  const renderedPosts = posts.map((post) => {
    return (
      <EventPost
        postBody={post.postBody}
        eventId={post.eventId}
        postId={post.postId}
        appUserId={post.appUserId}
        author={post.author}
        postDate={post.postDate}
        key={post.postId}
        getEventPosts={async () => {
          await getEventPosts(eventId, setPosts, setFindPostsErrors);
        }}
      />
    );
  });

  return (
    <div className="EventPosts">
      <h2 className="EventPosts__heading">Event Posts</h2>
      <form onSubmit={onPostSubmit}>
        <div className="EventPosts__form-group">
          <textarea
            value={postBody}
            onChange={(e) => {
              setPostBody(e.target.value);
            }}
            className="EventPosts__text-area"
            placeholder="What are your thoughts on this event..."
          ></textarea>
        </div>
        <div className="align-right">
          <button
            className="button-outline button-outline--primary"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      {renderedPosts}
    </div>
  );
};

export default EventPosts;
