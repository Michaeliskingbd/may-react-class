import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { SlSettings } from "react-icons/sl";
import { useParams } from "react-router-dom";

const SinglePostPage = () => {
  const [post, setPost] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios(`https://dummyjson.com/posts/${id}`);

        setPost(response.data);
      } catch (err) {
        console.error("error", err);
      }
    };
    fetch();
  }, [id]);
  return (
    <section className="p-10">
      <article className="px-4 py-4 border-[1px] shadow-lg min-w-[300px]">
        <header className="flex justify-between items-center">
          <div className="flex gap-3">
            <img
              className="size-12 rounded-full"
              src="https://images.unsplash.com/photo-1756312148347-611b60723c7a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8"
              alt="profile-image"
            />
            <div>
              <p className="font-bold">{post.title}</p>
              <div className="flex items-center gap-3">
                <span className="text-gray-500 text-sm">{post.views}</span>
                <SlSettings />
              </div>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <BsThreeDots className="text-2xl cursor-pointer" />
            <IoClose className="text-3xl cursor-pointer" />
          </div>
        </header>
        <p className="mt-4">{post.body}</p>
      </article>
    </section>
  );
};

export default SinglePostPage;
