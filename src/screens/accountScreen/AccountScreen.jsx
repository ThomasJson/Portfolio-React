import "./accountScreen.scss";
import React from "react";
import { useContext } from "react";
import useFetch from "../../hooks/useFetch";
import { AuthContext } from "../../contexts/AuthContext";

function AccountScreen() {
  const { auth } = useContext(AuthContext);
  const { data, loading, error, text } = useFetch("app_user" + auth.id);

  if (loading) return <div>Loading ...</div>;

  if (error) {
    console.log(error, text);
    return <div>Error ! </div>;
  }

  return (
    <>
      <h1>AccountScreen</h1>
      {data && data.mail}
    </>
  );
}
export default AccountScreen;
