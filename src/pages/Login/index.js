import React, { useState } from "react";
import Style from "./Login.module.css";
import InputEmailIcon from "../../assets/icons/input-email-icon.svg";
import InputPasswordIcon from "../../assets/icons/input-password-icon.svg";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../data/actions/auth";
import { useForm } from "react-hook-form";
import TextInput from "../../components/TextInput";
import { IoIosAlert } from "react-icons/io";
import { IoIosClose } from "react-icons/io";

const Login = () => {
  const router = useHistory();
  const dispatch = useDispatch();
  const [passwordShow, setPasswordShow] = useState(false);
  const [pageloader, setPageLoader] = useState(false);
  const [info, setInfo] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLoginUser = (values) => {
    // console.log(values);
    dispatch(loginUser(values, setInfo, setPageLoader, router));
    // const token = localStorage.getItem("token");
  };

  return (
    <div className="containerWrapper">
      <div className="conatiner">
        <div className={Style.loginWrapper}>
          <form onSubmit={handleSubmit(handleLoginUser)}>
            <div className={Style.logins}>
              <div className={Style.loginHead}>
                <h3>Sign In</h3>
                <p>Kindly fill in the fields below to access your account.</p>
              </div>
              {info && (
                <div className={Style.alertWrapper}>
                  <div className={Style.alert}>
                    <IoIosAlert style={{ marginRight: "10px" }} />
                    {info}
                  </div>
                  <IoIosClose
                    onClick={() => setInfo(null)}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              )}
              <div className={Style.loginForm}>
                <div className={Style.login}>
                  <p>Email Address</p>
                  <div className={Style.inputGroup}>
                    <div className={Style.inputGroupIcon}>
                      <img src={InputEmailIcon} alt="" />
                    </div>
                    <TextInput
                      id="email"
                      type="email"
                      isInValid={!!errors.email}
                      placeholder="doe@doe.com"
                      validationMessage={errors.email?.message}
                      className={Style.inputGroupinput}
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email",
                        },
                      })}
                      required
                    />
                  </div>
                </div>
                <div className={Style.login}>
                  <p>your password</p>
                  <div className={Style.inputGroup}>
                    <div className={Style.inputGroupIcon}>
                      <img src={InputPasswordIcon} alt="" />
                    </div>
                    <TextInput
                      id="password"
                      type={passwordShow ? "text" : "password"}
                      isInValid={!!errors.password}
                      className={Style.inputGroupinput}
                      validationMessage={errors.password?.message}
                      {...register("password", {
                        required: "Password is required",
                      })}
                      required
                    />
                    <div className={Style.inputGroupIconRight}>
                      {passwordShow ? (
                        <p
                          onClick={() => setPasswordShow(false)}
                          className={Style.green}
                        >
                          Hide
                        </p>
                      ) : (
                        <p onClick={() => setPasswordShow(true)}>Reveal</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={Style.buttonWrapper}>
              <div className={Style.button}>
                <button type="submit">
                  {pageloader ? "loading..." : "Login"}
                </button>
              </div>
              <div className={Style.accountWrapper}>
                <p className={Style.account}>Don't have an account yet?</p>{" "}
                <Link to="/register" style={{ cursor: "pointer" }}>
                  <p className={Style.register}>Register</p>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
