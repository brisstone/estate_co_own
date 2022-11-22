import React, { useEffect } from "react";
import AppNav from "../../components/AppNav/AppNav";
import "./FaqView.scss";
import Faq from "../../components/Faq/Faq";
import AppButton from "../../components/Button/AppButton";
import bg1 from "../../assets/bg1.webp";
import AppFooter from "../../components/Footer/AppFooter";

export default function FaqView() {

    useEffect(() => {
      window.scroll(0, 0);
    }, []);
  return (
    <div className="app_bg_settings">
      <AppNav />
      <div>
        <div
          className="cover_container app_default_padding"
          style={{ backgroundImage: `url(${bg1}` }}
        >
          <div className="main_header">Frequently Asked Questions</div>
          <div className="secondary_header">
            No need to bother yourself asking so many questions
          </div>
          <div className="container_header ">
            <input
              className="container_header_input"
              placeholder="Search for a Question"
            />{" "}
          </div>
          <AppButton className="app_btn_standard">Search Now</AppButton>
        </div>
      </div>
      <Faq />
      <AppFooter />
    </div>
  );
}
