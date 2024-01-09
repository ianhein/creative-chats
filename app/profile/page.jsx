"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

import { useRouter } from "next/navigation";

import Profile from "@components/Profile";

function MyProfile() {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    let isMounted = true;
    const fetchPosts = async () => {
      if (session?.user.id) {
        try {
          const response = await fetch(`/api/users/${session.user.id}/posts`);
          if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
          }
          const data = await response.json();
          if (isMounted) {
            setPosts(data);
          }
        } catch (error) {
          console.error("Failed to fetch posts:", error);
        }
      }
    };

    fetchPosts();
    return () => {
      isMounted = false;
    };
  }, [session?.user.id]);
  const handleEdit = (post) => {
    router.push(`update-prompt?id=${post._id}`);
  };

  const handleDelete = async (prompt) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this prompt?"
    );

    if (hasConfirmed) {
      try {
        await fetch(`api/prompt/${prompt._id}`, {
          method: "DELETE",
        });

        const filteredPrompts = posts.filter((p) => p._id !== prompt._id);
        setPosts(filteredPrompts);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Profile
      name="My "
      description="Welcome to your personalized profile page"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
}

export default MyProfile;
