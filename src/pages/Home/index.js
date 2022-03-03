import React, { useState, useEffect } from "react";
import PrivateRoute from "../../components/PrivateRoute";
import { loadUser, logout } from "../../data/actions/auth";
import { connect } from "react-redux";
import Style from "./Home.module.css";
import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import InputEmailIcon from "../../assets/icons/input-email-icon.svg";
import SuspenseSpinner from "../../components/Spinner";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { FaClock } from "react-icons/fa";
import { IoIosAlert } from "react-icons/io";
import { IoIosClose } from "react-icons/io";

const HomePage = (props) => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const { loadUser, user } = props;
  const [info, setInfo] = useState();
  const router = useHistory();
  console.log(user);
  const handleLogout = () => {
    dispatch(logout(setInfo, setIsLoaded, router));
  };

  useEffect(() => {
    async function fetchData() {
      await loadUser(setInfo);
    }
    fetchData();
    //eslint-disable-next-line
  }, []);

  return (
    <PrivateRoute>
      <div className="containerWrapper">
        <div className="conatiner">
          {!user ? (
            <SuspenseSpinner />
          ) : (
            <div className={Style.headerWrapper}>
              <div className={Style.headers}>
                <div className={Style.headerHead}>
                  <h3>Home</h3>
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
                <div className={Style.headerForm}>
                  <div className={Style.header}>
                    <p>first name</p>
                    <div className={Style.inputGroup}>
                      <div className={Style.inputGroupIcon}>
                        <IoPerson />
                      </div>
                      <input
                        id="firstname"
                        placeholder="e.g. Ademola"
                        value={user?.firstname}
                        className={Style.inputGroupinput}
                      />
                    </div>
                  </div>
                  <div className={Style.header}>
                    <p>last name</p>
                    <div className={Style.inputGroup}>
                      <div className={Style.inputGroupIcon}>
                        <IoPerson />
                      </div>
                      <input
                        id="last name"
                        placeholder="e.g. Ademola"
                        value={user?.lastname}
                        className={Style.inputGroupinput}
                      />
                    </div>
                  </div>
                  <div className={Style.header}>
                    <p>email</p>
                    <div class={Style.inputGroup}>
                      <div class={Style.inputGroupIcon}>
                        <img src={InputEmailIcon} alt="" />
                      </div>
                      <input
                        id="email"
                        value={user?.email}
                        className={Style.inputGroupinput}
                      />
                    </div>
                  </div>
                  <div className={Style.header}>
                    <p>Phone number</p>
                    <div className={Style.inputGroup}>
                      <div className={Style.inputGroupIcon}>
                        <FaPhoneAlt />
                      </div>
                      <input
                        id="phone"
                        value={user?.phone}
                        className={Style.inputGroupinput}
                      />
                    </div>
                  </div>
                  <div className={Style.header}>
                    <p>Last Login Time/Date</p>
                    <div className={Style.inputGroup}>
                      <div className={Style.inputGroupIcon}>
                        <FaClock />
                      </div>
                      <input
                        id="date"
                        value={user && localStorage.getItem("login_date")}
                        className={Style.inputGroupinput}
                      />
                    </div>
                  </div>
                </div>
                <div className={Style.buttonWrapper}>
                  <div className={Style.button}>
                    <button type="submit" onClick={handleLogout}>
                      {isLoaded ? "loading..." : "Logout"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </PrivateRoute>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { loadUser })(HomePage);
