import React from "react";
import "./AppFooter.scss";
import logo2 from "../../assets/logo2.png";
import facebook from "../../assets/Facebook.svg";
import linkedIn from "../../assets/LinkedIN.svg";
import Twitter from "../../assets/Twitter.svg";
import { Col, Divider, Row } from "antd";
import { Link } from "react-router-dom";

const companyLinks = [
  {
    title: "Product",
    links: [
      { name: "How it works", url: "#how-it-works" },
      { name: "Fees", url: "/fees" },
      // { name: "Properties", url: "/" },
      // { name: "Partnership", url: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", url: "/about" },
      { name: "Contact Us", url: "/contact" },
      // { name: "Live Support", url: "/" },
      { name: "FAQs", url: "/faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Terms & Conditions", url: "/terms-conditions" },
      { name: "Privacy Policy", url: "/privacy-policy" },
      {
        name: "Anti-Money Laundering Policy",
        url: "/anti-money-laundering-policy",
      },
    ],
  },
  {
    title: "Quick Links",
    links: [
      {
        name: "Android app",
        url: "https://play.google.com/store/apps/details?id=com.fragvest.fragvest_mobile",
      },
      {
        name: "iOS app",
        url: "https://apps.apple.com/ng/app/fragvest-real-estate-store/id1635023019",
      },
      {
        name: "Forgot password",
        url: "https://web.fragvest.com/forgot-password",
      },
    ],
  },
];

const AppFooter = () => {
  return (
    <div className="footer_wrapper">
      <Row
        className="footer_antd_row app_default_padding"
        gutter={20}
        // style={{ border: "2px solid red" }}
      >
        <Col
          lg={8}
          md={8}
          xl={13}
          xxl={8}
          sm={24}
          xs={24}
          // style={{ border: "10px solid green" }}
        >
          <div className="footer_company">
            <div className="footer_company_prop">
              <div className="footer_company_logo">
                <Link to="/">
                  <img src={logo2} alt={logo2} />
                </Link>
              </div>
              <div className="footer_company_about">
                Fragvest store is your online portal to safely interact with the
                real estate industry in one-click.
              </div>
            </div>
          </div>
          <hr className="footer_logo_divider" />
        </Col>
        <Col
          lg={8}
          md={8}
          xl={6}
          xxl={6}
          sm={12}
          xs={12}
          // style={{ border: "10px solid pink" }}
        >
          <div className="footer_company">
            <div className="footer_company_contactus">
              <div className="footer_company_contactus_title">Contact us</div>
              <div className="footer_company_contactus_links">
                <a
                  href="info@fragvest.com"
                  className="footer_company_contactus_links"
                >
                  info@fragvest.com
                </a>
                <a
                  href="support@fragvest.com"
                  className="footer_company_contactus_links"
                >
                  {" "}
                  support@fragvest.com
                </a>
              </div>
              <div className="footer_company_contactus_social">
                <div className="footer_social_logo">
                  <img src={facebook} alt={facebook} />
                </div>

                <div className="footer_social_logo">
                  <img src={linkedIn} alt={linkedIn} />
                </div>
                <div className="footer_social_logo">
                  <img src={Twitter} alt={Twitter} />
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col
          lg={8}
          md={8}
          xl={5}
          xxl={6}
          sm={12}
          xs={12}
          className="footer_locaatio"
          // style={{ border: "10px solid purple", display:'flex', justifyContent:'' }}
        >
          <div className="footer_company">
            <div className="footer_company_location">
              <div className="footer_company_location_title">Location</div>
              <div className="footer_company_location_details">
                {/* <div>{" "}jjjjj </div> */}
                <div className="footer_image">
                  Suite 70, De Avalon Plaza, Plot 483 Ajose Adeogun St, Utako,
                  Abuja FCT Nigeria
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <hr className="footer_company_divider" />

      <div className="app_default_padding">
        <Row
          className="footer_links"
          // gutter={60}
        >
          {companyLinks.map((companylink, index) => (
            <Col
            key={index}
              lg={12}
              md={12}
              xl={6}
              xxl={6}
              sm={12}
              xs={12}
              className="footer_comp_cols"
            >
              <div className="footer_links_instance">
                <div className="footer_links_instance_title">
                  {companylink.title}
                </div>
                {companylink.links.map((link, index) => (
                  <div key={index} className="footer_links_instance_links">
                    <a href={link.url} style={{ color: "inherit" }}>
                      {link.name}
                    </a>
                  </div>
                ))}
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <hr className="footer_divider" />
      {/* <Divider/> */}
      <div className="footer_wrapper_bottom_text">
        Copyright © 2022 Fragvestment LTD a company duly registered with CAC
        with RC Number: 1827855. All rights reserved
      </div>
    </div>
  );
};

export default AppFooter;
