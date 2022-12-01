import "./adminScreen.scss";
import React from "react";
import useFetch from "../../hooks/useFetch";
import { Container } from "react-bootstrap";

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
        <Container fluid>
          <h1>AdminScreen</h1>
          {data && data?.data.map((item, i) => <div key={i}>{item.mail}</div>)}
        </Container>
      </main>
    </>
  );
}
export default AdminScreen;
