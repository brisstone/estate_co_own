import React from "react";
import LoginCover from "../../assets/loginCover.png";
import AppButton from "../../components/Button/AppButton";
import TextInput from "../../components/Input/TextInput";
import "./EmailVerification.scss";
import Logo2 from "../../assets/logo2.png";
import axios from "axios";

export default function EmailVerification() {
  // const [email, setemail] = useState();
  // const getToken = (email) => {
  //   // /resend-verification-link/{email}
  //   const result = axios.get(
  //     `https://admin.fragvest.com/api/v1/resend-verification-link/${email}`
  //   );
  //   console.log(result, "kkkkkkk");
  //   window.location.href = "/complete-signup";
  // };
  return (
    <div className="emailv_container">
      <div className="emailv_container_content">
        <div className="emailv_container_content_logo">
          <img src={Logo2} alt={Logo2} />
        </div>
        <div className="emailv_container_content_header">
          Enter Verification Code
        </div>
        <div
          className="emailv_container_content_text"
          onClick={() => (window.location.href = "/signup")}
        >
          Wrong Email?
        </div>
        <div className="emailv_container_content_label">Code</div>
        <div className="emailv_container_content_input">
          <TextInput
            placeholder="example@quickr.com"
            name="user_email"
            required
            // onChange={(e) => {
            //   setemail(e.target.value);
            //   console.log(e.target.value);
            // }}
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
            // onClick={() => getToken()}
          >
            Continue
          </AppButton>
        </div>
        <div
          className="emailv_container_content_resend"
          onClick={() => (window.location.href = "/signup")}
        >
          Didn’t get code ? &nbsp;{" "}
          <span style={{ color: "#07C168" }}>Resend</span>{" "}
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
