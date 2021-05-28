import React, { useState } from "react";
import useLocalStorageState from "../hooks/useLocalStorageState";
import "../styles/AddComment.css"


export const AddComment = ({ onSubmit }) => {
const [comment, setComment] = useState("");
const [currUser, setCurrUser] = useLocalStorageState("username", "");

  return (
    <div className="w-full max-w-full">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={e => {
          e.preventDefault();
          onSubmit({ content: comment, author: currUser });
        }}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder={currUser}
            onChange={e => setCurrUser(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="comment"
          >
            Comment
          </label>
          <textarea
            name="comment"
            id="comment"
            className="font-sans shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows={2}
            placeholder="Share your thoughts about the movie🎬"
            value={comment}
            onChange={e => setComment(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-purple-700 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded border border-transparent focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add comment
          </button>
        </div>
      </form>
    </div>
  );
};
