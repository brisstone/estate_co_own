import React, { useState } from "react";
import LoginCover from "../../assets/loginCover.png";
import "./CompleteSignUp.scss";
import Logo2 from "../../assets/logo2.png";
import TextInput from "../../components/Input/TextInput";
import AppButton from "../../components/Button/AppButton";
import Modal from "../../components/Modal/Modal";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { Col, notification, Row, Select, Spin } from "antd";
import { baseUrl } from "../../utils";
const { Option } = Select;



export default function CompleteSignUp() {
  const [isOpen, setIsOpen] = useState(false);
  let location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState(location?.state?.email);
  const [referralId, setreferralId] = useState(location?.state?.referralId);
  const [phoneNumber, setphoneNumber] = useState();
  const [password, setpassword] = useState();
  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();
  const [gender, setgender] = useState("Male");

  const CompleteSignUp = async () => {
    if (!phoneNumber) {
      return notification.error({
        message: "Error",
        description: "PhoneNumber is Required!!",
        // duration: 6000000
      });
    }
    if (!password) {
      return notification.error({
        message: "Error",
        description: "Password is Required!!",
        // duration: 6000000
      });
    }

    try {
      const result = await axios.post(
        `${baseUrl}/complete-registration/${email}`,
        {
          email: email,
          password: password,
          phone: phoneNumber,
          first_name: firstName,
          last_name: lastName,
          gender: gender,
          referralId,
        }
      );
      notification.success({
        message: "Successful Registration",
        description: result?.response?.data?.message || result.message,
        // duration: 6000000
      });

      setIsOpen(true);
    } catch (error) {
      return notification.error({
        message: "Error",
        description: error?.response?.data?.message || error.message,
        // duration: 6000000
      });
    }
  };
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
        <div className="complete_container_content_label">Email</div>
        <div className="complete_container_content_input">
          <TextInput
            placeholder="08123456789"
            name="user_name"
            required
            defaultValue={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <Row gutter={3} style={{ width: "100%" }}>
          <Col sm={24} md={12} style={{ width: "100%" }}>
            <div
              className="complete_container_content_label"
              style={{ textAlign: "left" }}
            >
              First Name
            </div>
            <div className="complete_container_content_input">
              <TextInput
                placeholder="John"
                name="user_name"
                required
                onChange={(e) => {
                  setfirstName(e.target.value);
                }}
              />
            </div>
          </Col>
          <Col sm={24} md={12} style={{ width: "100%" }}>
            {" "}
            <div
              className="complete_container_content_label"
              style={{ textAlign: "left" }}
            >
              Last Name
            </div>
            <div className="complete_container_content_input">
              <TextInput
                placeholder="Doe"
                name="user_name"
                required
                onChange={(e) => {
                  setlastName(e.target.value);
                }}
              />
            </div>
          </Col>
        </Row>

        <Row gutter={3} style={{ width: "100%" }}>
          <Col sm={24} md={12} style={{ width: "100%" }}>
            <div
              className="complete_container_content_label"
              style={{ textAlign: "left" }}
            >
              Phone Number
            </div>
            <div className="complete_container_content_input">
              <TextInput
                placeholder="08123456789"
                name="phone_number"
                required
                onChange={(e) => {
                  setphoneNumber(e.target.value);
                }}
              />
            </div>
          </Col>
          <Col sm={24} md={12} style={{ width: "100%" }}>
            {" "}
            <div
              className="complete_container_content_label"
              style={{ textAlign: "left" }}
            >
              Gender
            </div>
            <div className="complete_container_content_input">
              <Select
                style={{ width: "100%", height: "10px" }}
                onChange={(value) => setgender(value)}
                defaultValue="Male"
                // className="modal_container_select"
              >
                <Option value="Male" className="">
                  Male
                </Option>
                <Option value="Female" className="">
                  Female
                </Option>
              </Select>
            </div>
          </Col>
        </Row>

        <div className="complete_container_content_label">Password</div>
        <div className="complete_container_content_input">
          <TextInput
            placeholder="*************"
            name="user_name"
            required
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </div>
        <div className="complete_container_content_label">Referral Code</div>
        <div className="complete_container_content_input">
          <TextInput
            placeholder="(optional)"
            name="user_name"
            required
            defaultValue={referralId}
            onChange={(e) => {
              setreferralId(e.target.value);
            }}
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
            onClick={() => CompleteSignUp()}
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
