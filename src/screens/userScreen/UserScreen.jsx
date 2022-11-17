import "./userScreen.scss";
import React from "react";
import useFetch from "../../hooks/useFetch";

function LoggedScreen() {
  const { data, loading, error, text } = useFetch("article");

  if (loading) return <div>Loading ...</div>;

  if (error) {
    console.log(error, text);
    return <div>Error ! </div>;
  }

  return (
    <>
      <main>
        <h1>LoggedScreen ?</h1>
        {data && data?.data.map((item, i) => <div key={i}>{item.title}</div>)}
      </main>
    </>
  );
}
export default LoggedScreen;
