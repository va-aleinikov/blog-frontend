import React, { useEffect, useState } from "react";
import { Button } from "../atoms/Button";
import { clearToken, getToken } from "../../services/auth";
import { useNavigate } from "react-router-dom";

interface Post {
  id: number;
  title: string;
  body: string;
}

export const PostsList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!getToken()) {
      navigate("/");
      return;
    }
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => res.json())
      .then(setPosts)
      .catch(console.error);
  }, [navigate]);

  const handleLogout = () => {
    clearToken();
    navigate("/");
  };

  return (
    <main>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          background: "#007bff",
          color: "white",
          padding: "1rem",
        }}
      >
        <h2>Posts</h2>
        <Button onClick={handleLogout}>Logout</Button>
      </header>
      <div style={{ padding: "1rem" }}>
        {posts.map((p) => (
          <div
            key={p.id}
            style={{
              background: "white",
              borderRadius: "8px",
              padding: "1rem",
              marginBottom: "1rem",
              boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </div>
        ))}
      </div>
    </main>
  );
};
