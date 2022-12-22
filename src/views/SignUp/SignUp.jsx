import { notification } from "antd";
import axios from "axios";
import React, { useState } from "react";
import LoginCover from "../../assets/loginCover.png";
import Logo2 from "../../assets/logo2.png";
import AppButton from "../../components/Button/AppButton";
import TextInput from "../../components/Input/TextInput";
import "./SignUp.scss";

export default function SignUp() {
  const [email, setemail] = useState();
  const getToken = async (email) => {
    // /resend-verification-link/{email}
    console.log(email);
    if(!email){
    return notification.error({
        message: "Error",
        description: "Email is Required!!",
        // duration: 6000000
      });
    }
    const result = await axios.post(
      `https://admin.fragvest.com/api/v1/resend-verification-link/${email}`
    );
    console.log(result, "kkkkkkk");
    // window.location.href = "/complete-signup";
  };

  return (
    <div className="login_container">
      <div className="login_container_content">
        <div className="login_container_content_logo">
          <img src={Logo2} alt={Logo2} />
        </div>
        <div className="login_container_content_header">
          Welcome! Create Account Now
        </div>
        <div className="login_container_content_text">
          Verification code will be sent to you. Make sure you can acess your
          email
        </div>
         {/* <form 
        ref={formRef} onSubmit={handleSubmit}
        ></form> */}
        <div className="login_container_content_label">Email Address</div>
        <div className="login_container_content_input">
          <TextInput
            placeholder="example@quickr.com"
            name="user_email"
            required={true}
            type="email"
            onChange={(e) => {
              setemail(e.target.value);
              console.log(e.target.value);
            }}
          />
        </div>

       
        <div className="login_container_content_button">
          <AppButton
            className=""
            style={{
              height: "56px",
              fontSize: "18px",
              width: "100%",
              //   marginTop: "106px",
            }}
            // onClick={() => (window.location.href = "/email-verification")}
            onClick={() => getToken(email)}
          >
            Create Account
          </AppButton>
        </div>
      </div>
      <div className="login_container_cover">
        <img
          src={LoginCover}
          alt={LoginCover}
          style={{ height: "100%", width: "100%" }}
        />
      </div>
    </div>
  );
}
