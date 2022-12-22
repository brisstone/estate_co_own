import React, { useState } from "react";
import LoginCover from "../../assets/loginCover.png";
import "./CompleteSignUp.scss";
import Logo2 from "../../assets/logo2.png";
import TextInput from "../../components/Input/TextInput";
import AppButton from "../../components/Button/AppButton";
import Modal from "../../components/Modal/Modal";

export default function CompleteSignUp() {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="complete_container">
      <div className="complete_container_content">
        <div className="complete_container_content_logo">
          <img src={Logo2} alt={Logo2} />
        </div>
        <div className="complete_container_content_header">Complete SignUp</div>
        {/* <div className="complete_container_content_text">
          Verification code will be sent to you. Make sure you can acess your
          email
        </div> */}
        <div className="complete_container_content_label">Phone Number</div>
        <div className="complete_container_content_input">
          <TextInput
            placeholder="08123456789"
            name="user_name"
            required
          />
        </div>
        <div className="complete_container_content_label">Password</div>
        <div className="complete_container_content_input">
          <TextInput
            placeholder="*************"
            name="user_name"
            required
          />
        </div>
        <div className="complete_container_content_label">Referral Code</div>
        <div className="complete_container_content_input">
          <TextInput
            placeholder="(optional)"
            name="user_name"
            required
          />
        </div>
        <div className="complete_container_content_button">
          <AppButton
            className="complete_container_content_button_appButtonEle"
            style={{
              height: "56px",
              fontSize: "18px",
              width: "100%",
              //   marginTop: "106px",
            }}
            onClick={() => setIsOpen(true)}
          >
            Continue
          </AppButton>
        </div>
      </div>
      <div className="complete_container_cover">
        <img
          src={LoginCover}
          alt={LoginCover}
          style={{ height: "100%", width: "100%" }}
        />
      </div>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </div>
  );
}
