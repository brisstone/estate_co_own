import { Checkbox, Col, notification, Radio, Row } from "antd";
import React, { useEffect, useRef, useState } from "react";
import AppNav from "../../components/AppNav/AppNav";
import "./ContactUs.scss";
import contactimg from "../../assets/contactimg.webp";
import TextInput from "../../components/Input/TextInput";
import AppButton from "../../components/Button/AppButton";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import AppFooter from "../../components/Footer/AppFooter";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const [loading, setloading] = useState(false);
  const [done, setDone] = useState(false);
  const formRef = useRef();
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handleSubmit = (e) => {
    setloading(true);
    e.preventDefault();

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
            duration: 6000000,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    // setValue(e.target.value);
  };
  return (
    <div className="app_bg_settings">
      <AppNav />
      <div className="contactus_wrapper app_norm_padding">
        <Row className="contactus_cont">
          <Col lg={12} md={24} xl={12} xxl={12} sm={24} xs={24}>
            <div className="contactus_form_cont">
              <div className="contactus_header">
                Need Additional Help? Send us a Message
              </div>
              <div className="contactus_header2">Are you New to Fragvest</div>

              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="contactus_checkbox">
                  <Radio.Group
                    onChange={onChange}
                    // value={value}
                  >
                    <Radio value={1}>Yes</Radio>
                    <Radio value={2}>No</Radio>
                  </Radio.Group>
                  {/* <div className="contactus_checkbox_cont">
                    <Checkbox /> <div>Yes</div>
                  </div>
                  <div className="contactus_checkbox_cont">
                    <Checkbox />
                    <div>No</div>
                  </div> */}
                </div>
                <div className="contactus_input_cont">
                  <div className="contactus_input_form">
                    <div className="contactus_input_cont_label">
                      <label>Full Name</label>
                    </div>
                    <TextInput
                      placeholder="example@quickr.com"
                      name="user_name"
                      required
                    />
                  </div>
                  <div className="contactus_input_form">
                    <div className="contactus_input_cont_label">
                      <label>Email Address</label>
                    </div>
                    <TextInput
                      placeholder="example@quickr.com"
                      name="user_email"
                      type="email"
                      required
                    />
                  </div>
                  <div className="contactus_input_form">
                    <div className="contactus_input_cont_label">
                      <label>Phone Number</label>
                    </div>
                    <TextInput
                      placeholder="0803445XXXXXX"
                      name="user_subject"
                    />
                  </div>
                  <div className="contactus_input_form">
                    <div className="contactus_input_cont_label">
                      <label>Message</label>
                    </div>
                    <TextInput
                      placeholder="Write Something......."
                      textArea={true}
                      name="message"
                    />
                  </div>
                  <div style={{ color: "green", fontSize: "1.2rem",fontWeight:'500', marginTop:'20px' }}>
                    {done && "Thank you... we'll get back shortly!"}
                  </div>
                  <div className="contactus_button">
                    <AppButton style={{ width: "593px" }} loading={loading}>
                      Send Message
                    </AppButton>
                  </div>
                </div>
              </form>
            </div>
          </Col>
          <Col lg={12} md={24} xl={12} xxl={12} sm={24} xs={24}>
            <div className="contactus_img_cont">
              <img
                src={contactimg}
                alt={contactimg}
                style={{ borderRadius: "12px" }}
                className="image"
              />
            </div>
          </Col>
        </Row>
      </div>
      <NewsLetter />
      <AppFooter />
    </div>
  );
};

export default ContactUs;
