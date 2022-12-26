import "./accountValidateScreen.scss";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import doFetch from "../../helpers/fetchHelper";
import Footer from "../../components/footer/Footer";
import { Container } from "react-bootstrap";
// import Footer from "../../components/footer/Footer";

function AccountValidateScreen() {
  const token = useParams("token");
  const navigate = useNavigate();

  const { data: account, loading } = useFetch("auth/validate", {
    method: "POST",
    body: JSON.stringify(token),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formInvalid = (errors) => console.log("Errors", errors);

  const formSubmit = async (formData) => {
    Object.assign(formData, account);

    const { data: created } = await doFetch("auth/create", {
      method: "PUT",
      body: JSON.stringify(formData),
    });
    if (created.data?.result) {
      navigate("/login");
    }
  };

  const validPw = () => {
    return (
      document.getElementById("pass-input").value ===
      document.getElementById("confirm-input").value
    );
  };

  if (loading) {
    return "Veuillez patienter ...";
  }
  if (!account.data?.result) {
    return "Votre inscription n'a pas pu être validée, envoyez une nouvelle demande";
  }

  return (
    <>
      <main>
        <Container fluid className="center-bloc">
          <div className="password-section">
            {account.data?.result && (
              <>
                <h2 className="mb-4">Password</h2>
                <form
                  noValidate
                  className="pass-form"
                  onSubmit={handleSubmit(formSubmit, formInvalid)}
                >
                  {/* <label htmlFor="pass-input" className="form-label">
                    Password{" "}
                    <i className={"text-danger"}>{errors.pass ? " *" : " "}</i>
                  </label> */}
                  <input
                    id="pass-input"
                    type="password"
                    placeholder="Enter Password"
                    className="mb-3"
                    {...register("pass", {
                      required: true,
                      regex: /^(?=.*[A-Z]).{6,}$/,
                    })}
                    onInput={() => {
                      const input = document.getElementById("pass-input");
                      input.classList.add("onInput");
                    }}
                  />
                  <i className={"text-danger d-block"}>
                    {errors.pass
                      ? "* at least 6 letters including a capital letter"
                      : " "}
                  </i>

                  {/* <label htmlFor="confirm-input" className="form-label">
                    Confirm{" "}
                    <i className={"text-danger"}>
                      {errors.confirm ? " *" : " "}
                    </i>
                  </label> */}
                  <input
                    id="confirm-input"
                    type="password"
                    placeholder="Confirm Password"
                    className="mb-3"
                    {...register("confirm", {
                      required: true,
                      regex: /^(?=.*[A-Z]).{6,}$/,
                      validate: validPw,
                    })}
                    onInput={() => {
                      const input = document.getElementById("confirm-input");
                      input.classList.add("onInput");
                    }}
                  />
                  <i className={"text-danger d-block"}>
                    {errors.confirm
                      ? "* must be the same as entered password"
                      : " "}
                  </i>

                  <button type="submit" className="btn btn-primary btn-style w-100">
                    Submit
                  </button>
                </form>
              </>
            )}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default AccountValidateScreen;
