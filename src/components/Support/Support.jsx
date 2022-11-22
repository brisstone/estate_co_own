import { Checkbox, Col, notification, Row } from "antd";
import React, { useRef, useState } from "react";
import AppButton from "../Button/AppButton";
import TextInput from "../Input/TextInput";
import "./Support.scss";
import operator from "../../assets/operator.png";
import engineer from "../../assets/engineers.png";
import home from "../../assets/home.svg";
import call from "../../assets/call.svg";
import message from "../../assets/message.svg";
import emailjs from "emailjs-com";

export default function Support() {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [subject, setsubject] = useState();
  const [message, setmessage] = useState();
  const [loading, setloading] = useState(false);
  const [done, setDone] = useState(false);
  const formRef = useRef();
  
  const handleSubmit = (e) => {
    setloading(true)
    e.preventDefault();
    console.log(formRef, "jsddjjksjk", e);
    emailjs
      .sendForm(
        "service_ho1heon",
        "template_adkv8f8",
        formRef.current,
        "VpgkON418hSezef02"
      )
      .then(
        (result) => {
          console.log(result.text);
          setloading(false);
          setDone(true);
          notification.success({
            message: "success",
            description: "Thank you... We'll get back shortly!",
            duration: 6000000
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div className="support_wrapper">
        <Row className="support_cont">
          <Col
            lg={12}
            md={24}
            xl={12}
            xxl={12}
            sm={24}
            xs={24}
            // style={{ border: "2px solid green" }}
          >
            <div className="support_form_cont">
              <div className="support_header">
                Need Additional Help? Send us a Message
              </div>
              <div className="support_header2">
                Are you ready to own Frags on your first investment property?
                Fill out the form and we will respond as soon as possible.
              </div>

              <form ref={formRef} onSubmit={handleSubmit}>
                {/* <div className="support_checkbox">
                <div className="support_checkbox_cont">
                  <Checkbox /> <div>Yes</div>
                </div>
                <div className="support_checkbox_cont">
                  <Checkbox />
                  <div>No</div>
                </div>
              </div> */}
                <div className="support_input_cont">
                  <div className="support_input_form">
                    <div className="support_input_cont_label">
                      <label>Full Name </label>
                    </div>
                    <TextInput
                      className="input_div"
                      placeholder="example@quickr.com"
                      onChange={(e) => setname(e.target.value)}
                      name="user_name"
                      required
                    />
                  </div>
                  <div className="support_input_form">
                    <div className="support_input_cont_label">
                      <label>Email Address</label>
                    </div>
                    <TextInput
                      className="input_div"
                      placeholder="example@quickr.com"
                      onChange={(e) => setemail(e.target.value)}
                      name="user_email"
                      type="email"
                      required
                    />
                  </div>
                  <div className="support_input_form">
                    <div className="support_input_cont_label">
                      <label>Subject</label>
                    </div>
                    <TextInput
                      className="input_div"
                      placeholder="0803445XXXXXX"
                      onChange={(e) => setsubject(e.target.value)}
                      name="user_subject"
                      required
                    />
                  </div>
                  <div className="support_input_form">
                    <div className="support_input_cont_label">
                      <label>Message</label>
                    </div>
                    <TextInput
                      rows="4"
                      cols="50"
                      // className="input_div"
                      placeholder="Write Something......."
                      textArea={true}
                      // onChange={(e) => setmessage(e.target.value)}
                      required
                      name="message"
                    />
                    {/* <TextInput
                      className="input_div"
                      placeholder="0803445XXXXXX"
                      onChange={(e) => setsubject(e.target.value)}
                      name="user_subject"
                      required
                    /> */}
                  </div>
                  <div
                    style={{
                      color: "green",
                      fontSize: "1.2rem",
                      fontWeight: "500",
                      marginTop: "20px",
                    }}
                  >
                    {done && "Thank you... we'll get back shortly!"}
                  </div>
                  <div className="support_button">
                    <AppButton
                      style={{ width: "593px" }}
                      type="submit"
                      loading={loading}
                    >
                      Send Message
                    </AppButton>
                  </div>
                </div>
              </form>
            </div>
          </Col>
          {/* <div>
            <img src={operator} alt={operator} className="image" />
          </div> */}
          <Col
            lg={12}
            md={24}
            xl={12}
            xxl={12}
            sm={24}
            xs={24}
            // style={{ border: "2px solid red", padding: "0" }}
          >
            <div className="support_img_cont">
              {/* <div>
                <img src={operator} alt={operator} className="image" />
              </div> */}

              <div className="support_company">
                <div className="support_company_cont">
                  <div>
                    <img src={home} alt={home} />
                  </div>
                  <div className="support_company_text">
                    Suite 70, De Avalon Plaza, Utako, Abuja FCT Nigeria
                  </div>
                </div>
                <div className="support_company_cont">
                  <div>
                    <img src={call} alt={call} />
                  </div>
                  <div className="support_company_text">09155555590</div>
                </div>
                <div className="support_company_cont">
                  <div>
                    <img src={message} alt={message} />
                  </div>
                  <div className="support_company_text">
                    support@fragvest.com
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
