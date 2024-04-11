import React, { useState } from "react";
import LoginCover from "../../assets/loginCover.png";
import AppButton from "../../components/Button/AppButton";
import TextInput from "../../components/Input/TextInput";
import "./EmailVerification.scss";
import Logo2 from "../../assets/logo2.png";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { notification, Spin } from "antd";
import { baseUrl } from "../../utils";


export default function EmailVerification() {
  let location = useLocation();
  const navigate = useNavigate();
  console.log(location.state.referralId, "djdjdj");

  const [email, setemail] = useState(location?.state?.email);
  const [referralId, setreferralId] = useState(location?.state?.referralId);
  const [token, setToken] = useState();
  const [loading, setloading] = useState(false);

  const verifyToken = async (token) => {
    // /resend-verification-link/{email}
    if (!token) {
      return notification.error({
        message: "Error",
        description: "Token is Required!!",
        // duration: 6000000
      });
    }

    try {
      setloading(true);

      const config = { 'content-type': 'application/json' };
      const result = await axios.post(
        `${baseUrl}/confirm-token`,
        { email: email, token: token }, config
      );
      setloading(false)
      console.log(result, "kkkkkkk");
      navigate(`/complete-signup/${email}`, {
        state: { referralId: referralId, email: email },
      });
    } catch (error) {
      setloading(false)
      console.log(error, "sjsjjsi", error?.response?.data);
      return notification.error({
        message: "Error",
        description: error?.response?.data?.messsage || error?.response?.data?.message || error.message,
        // duration: 6000000
      });
   
    }
  };

  const getToken = (email) => {
    // /resend-verification-link/{email}
    const result = axios.get(
      `${baseUrl}/resend-verification-link/${email}`
    );
    console.log(result, "kkkkkkk");
    window.location.href = "/complete-signup";
  };
  
  return (
    <div className="emailv_container">
      <div className="emailv_container_content">
        <div className="emailv_container_content_logo">
          <img src={Logo2} alt={Logo2} />
        </div>
        {loading &&  <div style={{display: 'flex', justifyContent:'center', width:'100%'}}><Spin/></div>}
        <div className="emailv_container_content_header">
          Enter The Verification Code
        </div>
        <div> sent to {email} </div>
        <div
          className="emailv_container_content_text"
          onClick={() => (window.location.href = `/signup/${referralId}`)}
        >
          Wrong Email?
        </div>
        <div className="emailv_container_content_label">Code</div>
        <div className="emailv_container_content_input">
          <TextInput
            placeholder="xxxx"
            name="user_email"
            required
            onChange={(e) => {
              setToken(e.target.value);
              console.log(e.target.value);
            }}
          />
        </div>
        <div className="emailv_container_content_button">
          <AppButton
            className=""
            style={{
              height: "56px",
              fontSize: "18px",
              width: "100%",
              //   marginTop: "106px",
            }}
            onClick={() => verifyToken(token)}
          >
            Continue
          </AppButton>
        </div>
        <div
          className="emailv_container_content_resend"
          onClick={() => (window.location.href = `/signup/${referralId}`)}
        >
          Didn’t get code ? &nbsp;{" "}
          <span style={{ color: "#07C168" }} onClick={() => getToken()}>
            Resend
          </span>{" "}
        </div>
      </div>
      <div className="emailv_container_cover">
        <img
          src={LoginCover}
          alt={LoginCover}
          style={{ height: "100%", width: "100%" }}
        />
      </div>
    </div>
  );
}
