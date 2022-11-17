import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const getCookieValue = (name) => {

    console.log(document.cookie.match("(^|;)\\s*" + name + "\\s*=\\s*([^;]+)")?.pop() ||
      "");
    return (
      document.cookie.match("(^|;)\\s*" + name + "\\s*=\\s*([^;]+)")?.pop() ||
      ""
      
    );
  };
  const [auth, setAuth] = useState({ role: 0 });

  useEffect(() => {
    fetch("http://portfolio-api/auth/check", {
      credentials: "include",
      headers: {
        Authorization: getCookieValue("blog"),
      },
    })
      .then((resp) => resp.json())
      .then((json) => {
        console.log('json:', json)
        if (json.data?.result) {
          setAuth({ role: +json.data?.role });
        } else {
          setAuth({ role: 0 });
          document.cookie = `blog=null;max-age=0`;
        }
      });
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
