import React, { useState } from "react";
import Style from "./Register.module.css";
import InputEmailIcon from "../../assets/icons/input-email-icon.svg";
import InputPasswordIcon from "../../assets/icons/input-password-icon.svg";
import { Link, useHistory } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import TextInput from "../../components/TextInput";
import { useDispatch } from "react-redux";
import { createUser } from "../../data/actions/auth";
import { IoIosAlert } from "react-icons/io";
import { IoIosClose } from "react-icons/io";

const Register = () => {
  const router = useHistory();
  const dispatch = useDispatch();
  const [passwordShow, setPasswordShow] = useState(false);
  const [pageloader, setPageLoader] = useState(false);
  const [info, setInfo] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegisterUser = (values) => {
    if (values.password === values.confirmpassword) {
      dispatch(createUser(values, setInfo, setPageLoader, router));
    } else {
      setInfo("Password does not match");
    }
  };
  console.log(info);
  return (
    <div className="containerWrapper">
      <div className="conatiner">
        <div className={Style.registerWrapper}>
          <form onSubmit={handleSubmit(handleRegisterUser)}>
            <div className={Style.registers}>
              <div className={Style.registerHead}>
                <h3>Register</h3>
                <p>Kindly fill in the fields create an account.</p>
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
              <div className={Style.registerForm}>
                <div className={Style.register}>
                  <p>first name</p>
                  <div className={Style.inputGroup}>
                    <div className={Style.inputGroupIcon}>
                      <IoPerson />
                    </div>
                    <TextInput
                      id="firstname"
                      placeholder="e.g. Ademola"
                      isInValid={!!errors.firstname}
                      validationMessage={errors.firstname?.message}
                      {...register("firstname", {
                        required: "Name is required",
                        min: {
                          value: 2,
                          message: "Enter at lease 2 characters",
                        },
                        maxLength: { value: 100, message: "too long" },
                      })}
                      required
                    />
                  </div>
                </div>
                <div class={Style.register}>
                  <p>last name</p>
                  <div class={Style.inputGroup}>
                    <div class={Style.inputGroupIcon}>
                      <IoPerson />
                    </div>

                    <TextInput
                      id="lastname"
                      placeholder="e.g. Ademola"
                      isInValid={!!errors.lastname}
                      validationMessage={errors.lastname?.message}
                      {...register("lastname", {
                        required: "Name is required",
                        min: {
                          value: 2,
                          message: "Enter at lease 2 characters",
                        },
                        maxLength: { value: 100, message: "too long" },
                      })}
                      required
                    />
                  </div>
                </div>
                <div class={Style.register}>
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
                <div className={Style.register}>
                  <p>Phone Number</p>
                  <div className={Style.inputGroup}>
                    <div className={Style.inputGroupIcon}>
                      <FaPhoneAlt />
                    </div>
                    <TextInput
                      id="phoneNumber"
                      placeholder="e.g. 08085765317"
                      type="number"
                      isInValid={!!errors.phone}
                      validationMessage={errors.phone?.message}
                      {...register("phone", {
                        required: "Phone Number is required",
                      })}
                      required
                    />
                  </div>
                </div>
                <div className={Style.register}>
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
                <div className={Style.register}>
                  <p>Confirm your password</p>
                  <div className={Style.inputGroup}>
                    <div className={Style.inputGroupIcon}>
                      <img src={InputPasswordIcon} alt="" />
                    </div>
                    <TextInput
                      id="confirmpassword"
                      type={passwordShow ? "text" : "password"}
                      isInValid={!!errors.confirmpassword}
                      className={Style.inputGroupinput}
                      validationMessage={errors.confirmpassword?.message}
                      {...register("confirmpassword", {
                        required: "Password is required",
                      })}
                      required
                    />
                    <div className={Style.inputGroupIconRight}>
                      {passwordShow ? (
                        <p
                          onClick={() => setPasswordShow(false)}
                          classNames={Style.green}
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
                <button>{pageloader ? "loading..." : "Register"}</button>
              </div>
              <div className={Style.accountWrapper}>
                <p className={Style.account}>Already have an account ?</p>{" "}
                <Link to="/login" style={{ cursor: "pointer" }}>
                  <p className={Style.signin}>Sign in</p>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
