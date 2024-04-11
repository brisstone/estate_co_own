import React, { useEffect, useState } from "react";
import AppNav from "../../components/AppNav/AppNav";
import AppButton from "../../components/Button/AppButton";
import "./About.scss";
import bg1 from "../../assets/bg1.webp";
import bg2 from "../../assets/bg2.webp";
import bg3 from "../../assets/bg3.webp";
import bg4 from "../../assets/bg4.webp";
import bg5 from "../../assets/bg5.webp";
import { Col, Row, Carousel as AntdCarousel } from "antd";
import engineers from "../../assets/engineers.png";
import workers from "../../assets/workers.png";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import AppFooter from "../../components/Footer/AppFooter";
import StoreApp from "../../components/StoreApp/StoreApp";
import Faq from "../../components/Faq/Faq";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Partner from "../../assets/Partners.png";
import Partner1 from "../../assets/Partners1.png";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

const aboutUs = [
  "We gather and constantly update real-time information on real estate properties.",
  "We organize the information and make it readily available to you.",
  "We give you the freedom to perform any property transaction you desire, based on the new information you have.",
];

const caroContent = [
  {
    title: "Vulputate Mollis Ultricies Fermentum Parturient",
    description:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
    button: "Read More",
    image: bg1,
    user: "Luan Gjokaj",
    userProfile: "https://i.imgur.com/JSW6mEk.png",
  },
  {
    title: "Tortor Dapibus Commodo Aenean Quam",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
    button: "Discover",
    image: bg2,
    user: "Erich Behrens",
    userProfile: "https://i.imgur.com/0Clfnu7.png",
  },
  {
    title: "Phasellus volutpat metus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    button: "Buy now",
    image: bg3,
    user: "Bruno Vizovskyy",
    userProfile: "https://i.imgur.com/4KeKvtH.png",
  },
  {
    title: "Phasellus volutpat metus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    button: "Buy now",
    image: bg4,
    user: "Bruno Vizovskyy",
    userProfile: "https://i.imgur.com/4KeKvtH.png",
  },
];

const About = () => {
  const [active, setactive] = useState(0);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const Carosettings = {
    // autoplay: true,
    // dots: false,
    // speed: 700,
    // infinite: true,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // arrows: false,
    // draggable: true,
    // useTransform: false,
  };

  return (
    <div className="app_bg_settings">
      <AppNav />
      <Slider
        className="slider-wrapper"
        duration={20}
        autoplay={5000}
        infinite={true}
        buttonDisabled="disabled"
        touchDisabled={true}
        // style={{ border: "2px solid blue" }}
        {...Carosettings}
      >
        {caroContent.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{
              background: `url('${item.image}') no-repeat center center`,
              // height: "723px",
            }}
          >
            <div className="about_cover_container">
              <div className="main_header">
                We Are Your Real Estate Messenger
              </div>
              <div className="secondary_header">
              Fragvest is a tool created to give you easier and safer access to real estate services.
              </div>
              <div className="secondary_header">
              We designed fragvest to help you avoid real estate fraud and remove the stressful house-hunting process, whenever you need a property to live or earn from.
              </div>
              <div className="secondary_header">

              At Fragvest we pride ourselves in offering you straightforward transactions that will bring you freedom and prosperity.
              </div>
              <div
                style={{ zIndex: "10000" }}
                className="try_btn app_btn_standard_link"
              >
                <Link to="/contact" style={{ color: "#ffffff" }}>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      {/* <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={2000}
        infiniteLoop={true}

        // showIndicators={false}
      >
        <div
          className="about_cover_container"
          style={{ backgroundImage: `url(${bg1}` }}
        >
          <div className="main_header">
            Convert Your Spare Cash into a Real Estate Asset in 1 Minute
          </div>
          <div className="secondary_header">
            Fragvestment Ltd is a technology company in the real estate
            business, we provide you services through our online store called
            Fragvest
          </div>
          <div className="secondary_header">
            Fragvest is designed to help you avoid real estate fraud, remove the
            stressful house-hunting process and own, rent, sell or co-own a
            property
          </div>
          <div></div>
          <AppButton className="app_btn_standard">
            <Link to="/contact" style={{ color: "#ffffff" }}>
              Contact Us
            </Link>
          </AppButton>
        </div>
        <div
          className="cover_container"
          style={{ backgroundImage: `url(${bg1}` }}
        >
          <div className="main_header">
            Convert Your Spare Cash into a Real Estate Asset in 1 Minute
          </div>
          <div className="secondary_header">
            Fragvestment Ltd is a technology company in the real estate
            business, we provide you services through our online store called
            Fragvest
          </div>
          <div className="secondary_header">
            Fragvest is designed to help you avoid real estate fraud, remove the
            stressful house-hunting process and own, rent, sell or co-own a
            property
          </div>
          <div></div>
          <AppButton className="app_btn_standard">
            <Link to="/contact" style={{ color: "#ffffff" }}>
              Contact Us
            </Link>
          </AppButton>
        </div>
      </Carousel> */}

      <div className="about_mission_wrapper app_norm_padding">
        <Row className="about_mission">
          <Col lg={12} md={12} xl={12} xxl={12} sm={24} xs={24}>
            <div className="about_mission_header">The Fragvest Mission</div>
            <div className="about_mission_text">
              We are here to ensure you can easily discover, verify and
              participate in <br />
              real estate deals - with zero physical stress.
            </div>
            <AppButton
              style={{ marginBottom: "2rem" }}
              className="app_btn_standard mob_hidden"
            >
              Browse Deals
            </AppButton>
          </Col>
          <Col md={12}>
            <div className="about_mission_workers">
              <div className="about_images">
                <img src={engineers} alt={engineers} className="image" />
              </div>
              <div className="about_images">
                <img src={workers} alt={workers} className="image" />
              </div>
            </div>
          </Col>
          <Col
            lg={12}
            md={12}
            xl={12}
            xxl={12}
            sm={24}
            xs={24}
            // style={{ border: "2px solid red", width: "100%" }}
          >
            {" "}
            <AppButton
              className="app_btn_standard web_hidden"
              style={{ width: "100%" }}
            >
              Browse Deals
            </AppButton>
          </Col>
        </Row>
      </div>
      <div className="about_mission_serve_wrapper app_norm_padding">
        <Row className="about_mission_serve ">
          <Col md={12}>
            <div className="about_mission_header">How We Serve You</div>
            <div className="about_mission_content">
              We give you straightforward access to genuine land and building
              deals, and help you expose fraudulent ones.{" "}
            </div>{" "}
            <AppButton
              className="app_btn_standard mob_hidden"
              style={{
                display: `${window.innerWidth < 765 ? "none" : "inherit"}`,
              }}
            >
              Start Now
            </AppButton>
          </Col>{" "}
          <Col md={12} className="about_mission_serve_action">
            {aboutUs?.map((about, index) => (
              <>
                <div
                  onClick={() => setactive(index)}
                  className="about_mission_serve_cover"
                >
                  <div
                    style={{
                      backgroundColor: `${
                        active === index ? "#2F54C6" : "#d9d9d9"
                      }`,
                    }}
                    className="about_mission_sig"
                  >
                    <div>&nbsp;</div>
                  </div>
                  <div>
                    <ul>
                      <li
                        className="about_li"
                        style={{
                          color: `${active === index ? "#2F54C6" : ""}`,
                          // width: "400px",
                          marginBottom: "2rem",
                          cursor: "pointer",
                        }}
                      >
                        {about}
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            ))}
          </Col>
        </Row>
        <Row className="about_mission_serve ">
          {/* <Col md={12}>
            <div className="about_mission_header">How We Serve You</div>
            <div className="about_mission_content">
              We give you straightforward access to genuine land and building
              deals, and help you expose fraudulent ones.{" "}
            </div>{" "}
          </Col>{" "} */}

          <Col
            className="about_mission_serve_cover_mob"
            style={{
              backgroundColor: "transparent",
              // border: "2px solid red",
              visibility: `${window.innerWidth < 765 ? "" : "hidden"}`,
              display: `${window.innerWidth < 765 ? "" : "none"}`,
            }}
          >
            <AntdCarousel
              autoPlay
              autoplaySpeed="500"
              style={{
                backgroundColor: "transparent",
                // border: "0",
                visibility: `${window.innerWidth < 765 ? "" : "hidden"}`,
                display: `${window.innerWidth < 765 ? "" : "none"}`,
                marginBottom: "2rem",
              }}
            >
              {aboutUs?.map((about, index) => (
                <>
                  <div>
                    <div
                      className="about_li"
                      style={{
                        color: `${"#2F54C6"}`,
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <ul>
                        <li
                          style={{
                            color: `${"#2F54C6"}`,
                            fontWeight: 500,
                            fontSize: "14px",
                            // border: "2px solid green",
                            marginBottom:'2rem'
                          }}
                        >
                          {about}
                        </li>
                      </ul>
                    </div>
                  </div>
                </>
              ))}
            </AntdCarousel>
          </Col>
          <AppButton className="app_btn_standard web_hidden">
            Start Now
          </AppButton>
        </Row>
      </div>
      <div className="patners_wrapper ">
        {/* <img src={Partner1} alt={Partner} style={{objectFit:"contain"}} /> */}
      </div>
      <Faq />
      <StoreApp />
      <NewsLetter />
      <AppFooter />
    </div>
  );
};

export default About;
