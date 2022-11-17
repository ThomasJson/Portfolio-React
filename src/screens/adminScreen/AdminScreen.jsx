import "./adminScreen.scss";
import React from "react";
import useFetch from "../../hooks/useFetch";

function AdminScreen() {
  const { data, loading, error, text } = useFetch("app_user");

  if (loading) return <div>Loading ...</div>;

  if (error) {
    console.log(error, text);
    return <div>Error ! </div>;
  }

  return (
    <>
      <main>
        <h1>AdminScreen</h1>
        {data && data?.data.map((item, i) => <div key={i}>{item.mail}</div>)}
      </main>
    </>
  );
}
export default AdminScreen;
