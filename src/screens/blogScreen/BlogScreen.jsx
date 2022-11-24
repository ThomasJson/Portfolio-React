import "./blogScreen.scss";
import React from "react";
import Article from "../../components/article/Article";
import useFetch from "../../hooks/useFetch";

const BlogScreen = () => {
  const { data, loading, error, text } = useFetch("article/0", {
    method: "POST",
    body: JSON.stringify({ with: ["image", "category"] }),
  });

  if (loading) return <div>Loading ...</div>;

  if (error) {
    console.log(error, text);
    return <div>Error ! </div>;
  }

  return (
    <main>
      {data &&
        data?.data.map((article) => {
          return (
            <div key={article.Id_article} className="blog-container">
              <Article
                title={article.title}
                content={article.content}
                src={article.with[0]?.src}
                alt={article.with[0]?.alt}
                category={article.with[1]?.title}
              />
            </div>
          );
        })}
    </main>
  );
};

export default BlogScreen;
