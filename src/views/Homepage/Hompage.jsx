import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import bg1 from "../../assets/bg1.webp";
import bg2 from "../../assets/bg2.webp";
import bg3 from "../../assets/bg3.webp";
import bg4 from "../../assets/bg4.webp";
import bg5 from "../../assets/bg5.webp";
import AppNav from "../../components/AppNav/AppNav";
import AppButton from "../../components/Button/AppButton";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./Hompage.scss";
import { Col, Modal, Row, Select } from "antd";
// import { Carousel } from "react-carousel-minimal";
// import { Carousel } from "react-carousel-minimal";
import woodenHand from "../../assets/WoodHand.webp";
import step3 from "../../assets/step3.webp";
import step1 from "../../assets/step1.png";
import step2 from "../../assets/step2.png";
import step4 from "../../assets/step4.png";
import step5 from "../../assets/step5.png";
import eye from "../../assets/eye.webp";
import equation from "../../assets/equation.webp";
import hand from "../../assets/hand.webp";
import gift from "../../assets/gift.webp";
import OfferingCard from "../../components/Cards/OfferingCard/OfferingCard";
import AboutUsCard from "../../components/Cards/AboutUsCard/AboutUsCard";
import author2 from "../../assets/author2.jpg";
import author3 from "../../assets/author3.webp";
import StoreApp from "../../components/StoreApp/StoreApp";
import AppFooter from "../../components/Footer/AppFooter";
import carpark from "../../assets/carpark.webp";
import laptype from "../../assets/laptype.webp";
import count1 from "../../assets/count1.svg";
import count2 from "../../assets/count2.svg";
import offeringbg from "../../assets/offeringbg.webp";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
// import Slider from "react-animated-slider-2";
// import "react-animated-slider-2/build/horizontal.css";

// import "normalize.css/normalize.css";
import "./slider-animation.css";

import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

import { default as CaroSlide } from "react-slick";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TextInput from "../../components/Input/TextInput";

const { Option } = Select;

const contactOptions = [
  { name: "Email Me", value: "Email Me" },
  { name: "Call Me", value: "Call Me" },
  { name: "Text Me", value: "Text Me" },
];
const howSteps = [
  {
    image: step1,
    text: "We fractionalize a land or apartment into 10,000 Frags.",
  },
  { image: step2, text: "You browse available properties." },
  {
    image: step3,
    text: "You buy at least 1 frag of a property, and get a certificate of co-ownership.",
  },
  {
    image: step4,
    text: "You co-own actively by e-voting on decisions, or passively by delegating your voting rights.",
  },
  { image: step5, text: "Sell your frag anytime to exit co-ownership." },
];

const offeringsCard = [
  {
    title: "Fraud Prevention",
    text: "Get verified information on properties and nullify possibilities of real estate scams.",
    image: eye,
    color: "#F7E1DC",
  },
  {
    title: "Liquidity Injection",
    text: "Exchange your real estate asset for cash, without the long wait.",
    image: equation,
    color: "#FFF9E9",
  },
  {
    title: "Property Gifting",
    text: "Send real estate assets to your family or friend, in just one-click.",
    image: gift,
    color: "#F5D7E2",
  },
  {
    title: "Participate in Deals",
    text: "Find a comfortable house to live in or profitable asset to earn from.",
    image: hand,
    color: "#EAEEF9",
  },
];

const PeopleSay = [
  {
    content:
      "I started using Fragvest last month and I am thankful for their weekly news-letters. It gives me clarity on my expectations for my interest in real estate.",
    image: author3,
    author: "Sharon Chucks",
    height: "248px",
    width: "352px",
  },
  {
    content:
      "When I heard of frag token, I was intrigued because I knew what if meant, safety for my real estate investments and secured returns! Fragvest really helped me .",
    image: author2,
    author: "Kene Nnebe",
    height: "288px",
    width: "401px",
  },
  {
    content:
      "As a young girl looking to put my money in real estate investments, this platform promises to help me start small. I have told my friends and we are on the wait list as well.",
    image: author3,
    author: "Iyioluwa Jacob",
    height: "248px",
    width: "352px",
  },
  // {
  //   content:
  //     "I started using Fragvest last month and I am thankful for their weekly news-letters. It gives me clarity on my expectations for my interest in real estate.",
  //   image: author3,
  //   author: "Sharon Chucks",
  //   height: "248px",
  //   width: "352px",
  // },
  // {
  //   content:
  //     "When I heard of frag token, I was intrigued because I knew what if meant, safety for my real estate investments and secured returns! Fragvest really helped me .",
  //   image: author2,
  //   author: "Kene Nnebe",
  //   height: "288px",
  //   width: "401px",
  // },
  // {
  //   content:
  //     "As a young girl looking to put my money in real estate investments, this platform promises to help me start small. I have told my friends and we are on the wait list as well.",
  //   image: author3,
  //   author: "Iyioluwa Jacob",
  //   height: "248px",
  //   width: "352px",
  // },
];

const contactUs = [
  {
    bgImage: carpark,
    countImage: "",
    title: "Co-own to live",
    content:
      "Buy and reside in a comfortable apartment, together with your friend or family.",
    bgColor: "#F4F7FC",
    textColor: "#2F54C6",
  },
  {
    bgImage: laptype,
    countImage: "",
    title: "Co-own to Earn",
    content:
      "Buy now and earn soon from a property, together with your friend, family or a stranger. You cannot reside in the property. Earnings come from rental income or property resale.",
    bgColor: "#FFF9E9",
    textColor: "#FFB900",
  },
];

const caroContent = [
  {
    title: "Convert Your Spare Cash into a Real Estate Asset in 1 Minute ",
    description: "Convert Your Spare Cash into a Real Estate Asset in ",
    button: "Read More",
    image: bg1,
    user: "Luan Gjokaj",
    userProfile: "https://i.imgur.com/JSW6mEk.png",
  },
  {
    title: "Co-own a property of your choice in 5 simple steps",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
    button: "Discover",
    image: bg2,
    user: "Erich Behrens",
    userProfile: "https://i.imgur.com/0Clfnu7.png",
  },
  {
    title: "Put your idle funds to work, Co-own any property of your choice",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    button: "Buy now",
    image: bg3,
    user: "Bruno Vizovskyy",
    userProfile: "https://i.imgur.com/4KeKvtH.png",
  },
  {
    title:
      "Spend your next 60secs wisely, Co-own a property from your phone with as little as ₦1,000",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    button: "Buy now",
    image: bg4,
    user: "Bruno Vizovskyy",
    userProfile: "https://i.imgur.com/4KeKvtH.png",
  },
];

export default function Hompage() {
  const slider = React.useRef(null);
  const [showCoOwnForm, setshowCoOwnForm] = useState(false);
  const [contactOption, setcontactOption] = useState();
  const corouselData = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      caption: `<div>
                  San Francisco
                  <br/>
                  Next line
                </div>`,
    },
    {
      image:
        "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      caption: "Scotland",
    },
    {
      image:
        "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      caption: "Darjeeling",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
      caption: "San Francisco",
    },
    {
      image:
        "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
      caption: "Scotland",
    },
    {
      image:
        "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
      caption: "Darjeeling",
    },
    {
      image:
        "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
      caption: "San Francisco",
    },
    {
      image:
        "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
      caption: "Scotland",
    },
    {
      image:
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
      caption: "Darjeeling",
    },
  ];
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  const settings = {
    dots: false,
    // infinite: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          //  className: "center",
          //  centerMode: true,
          // rightMode: true,
          infinite: true,
          centerPadding: "0px",
          slidesToShow: 1.1,
          autoplay: true,
          arrows: false,
          dots: true,
          // autoplaySpeed: 2000,
        },
      },
    ],
  };

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
        {...Carosettings}
      >
        {caroContent.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{
              background: `url('${item.image}') no-repeat center center`,
            }}
          >
            <div className="container">
              <div className="main_header">{item.title}</div>
              <div className="secondary_header">
                With as little as ₦1000, you can co-own a land or an apartment
                with one or more people and accurately share the expenses and
                income, through Frags.
              </div>

              <div
                style={{ zIndex: "10" }}
                className="try_btn app_btn_standard_link"
                onClick={() => (window.location.href = "/#store")}
              >
                Try For Free
              </div>

              <div
                // type="ghost"
                // lg="lg"
                style={{ zIndex: "1000" }}
                className="try_ghost app_btn_standard_link"
                // onClick={() => setshowCoOwnForm(true)}
              >
                <Link to="/contact" style={{ color: "#ffffff" }}>
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <Row
        id="how-it-works"
        className="how_container app_default_padding row-reverse"
        // gutter={50}
      >
        <Col
          lg={12}
          md={12}
          xl={10}
          xxl={12}
          sm={24}
          xs={24}
          className="how_inner_cover"
        >
          <div>
            <div className="how_work_text">How Co-owning Works</div>
            <div className="how_work_image">
              <img
                src={woodenHand}
                alt="woodenHand"
                // style={{ height: "100%" }}
                className="how_work_pic"
              />
            </div>
          </div>
        </Col>

        <Col
          lg={12}
          md={12}
          xl={14}
          xxl={12}
          sm={24}
          xs={24}
          className="how_secondcolumn"
        >
          <div className="how_work_text_2">
            <div className="how_text">How Co-owning Works</div>
          </div>
          <div className="how_steps_body">
            {howSteps.map((step, index) => (
              <div key={index} className="how_steps_container">
                <div>
                  <img src={step.image} alt={step.image} />
                </div>
                <div className="how_steps_text">{step.text}</div>
              </div>
            ))}
            <div className="how_steps_btns">
              {/* <a
                href="#store"
                // className="app_btn_standard_link"
                style={{ color: "#ffffff" }}
              >
                <AppButton className="try_btn_1 app_btn_standard">
                  Try For Free j
                </AppButton>
              </a> */}
              <AppButton
                onClick={() => (window.location.href = "/#store")}
                className="try_btn_1 app_btn_standard"
              >
                Try For Free
              </AppButton>

              <AppButton
                className="app_btn_standard"
                type="ghost"
                lg="lg"
                style={{ color: "#2F54C6" }}
                // onClick={() => setshowCoOwnForm(true)}
              >
                <Link
                  className="app_btn_standard_link"
                  to="/contact"
                  style={{ color: "#2F54C6" }}
                >
                  Learn More
                </Link>
              </AppButton>
            </div>
          </div>
        </Col>
      </Row>
      <div className="ownership_wrapper app_padding_v2">
        <div className="ownership_wrapper_header_body">
          <div className="ownership_main_header">
            When is Co-ownership right for you?
          </div>
          <div className="ownership_sec_header">
            Co-owning is the easiest path to own a real estate asset with just
            your available cash, without incurring any debt.
          </div>
        </div>

        <Row
          className="ownership_wrapper_contact_card_cont"
          // gutter={60}

          gutter={window?.innerWidth < 525 ? 0 : 60}
        >
          <Col md={12}>
            <div className="ownership_wrapper_contact_card card1">
              <div className="co_own_imag">
                <img src={carpark} alt={carpark} className="image" />
              </div>
              <div className="ownership_wrapper_contact_card_title1">
                Co-own to live
              </div>
              <div className="ownership_wrapper_contact_card_content">
                Buy and reside in a comfortable apartment, together with your
                friend or family.
              </div>
              <div className="ownership_wrapper_count">
                <img src={count2} alt={count2} className="image" />
              </div>
            </div>
          </Col>
          <Col
            md={12}
            style={{
              padding: "0",
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
              height: "100%",
            }}
          >
            <div className="ownership_wrapper_contact_card card2">
              <div className="co_own_imag">
                <img src={laptype} alt={laptype} className="image" />
              </div>
              <div className="ownership_wrapper_contact_card_title2">
                Co-own to Earn
              </div>
              <div className="ownership_wrapper_contact_card_content">
                <div>
                  Buy now and earn soon from a property, together with your
                  friend, family or a stranger.
                </div>
                <div>
                  <div>
                    <ul>
                      <li>
                        <p>You cannot reside in the property.</p>
                      </li>

                      <li>
                        <p>
                          Earnings come from rental income or property resale.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="ownership_wrapper_count">
                  <img src={count1} alt={count1} />
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div className="ownership_wrapper_contact_btn">
          <Link
            to="/contact"
            style={{ color: "#ffffff" }}
            className="app_btn_standard_link"
          >
            <AppButton style={{ width: "350px" }}> Contact Us</AppButton>
          </Link>
        </div>
      </div>
      <div className="offering_wrapper">
        <div className="offering_wrapper_header">Our Offerings</div>
        <div className="offering_grid">
          {offeringsCard.map((offering, index) => (
            <div key={index} className="offering_grid_1">
              <OfferingCard
                title={offering.title}
                text={offering.text}
                image={offering.image}
                color={offering.color}
              />
            </div>
          ))}
          <div className="offering_grid_3">
            <img
              className="image oferring_image"
              src={offeringbg}
              alt={offeringbg}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <AppButton
          style={{ width: "350px" }}
          className="offering_btn"
          onClick={() =>
            (window.location.href = "/signup/0000")
          }
        >
          Sign Up Now
        </AppButton>
      </div>

      <div className="testimony_card">
        <div className="testimony_card_header_title">
          What People are Saying About Us
        </div>
        <div className="testimony_card_talk">
          <CaroSlide
            style={{
              display: "flex",
              position: "",
              width: "100%",

              padding: "0",
              margin: "0",
            }}
            ref={slider}
            {...settings}
            className=""
          >
            {PeopleSay.map((element, index) => (
              <AboutUsCard
                key={index}
                author={element.author}
                content={element.content}
                image={element.image}
                width={element.width}
                height={element.height}
              />
            ))}
          </CaroSlide>
          <div className="testimony_shadow_box"></div>
          <div className="testimony_shadow_box_right"></div>
        </div>
      </div>
      <div id="store">
        <StoreApp />
      </div>

      <NewsLetter />
      <AppFooter />
      <Modal
        // closeIcon={
        //   <Image
        //     src={closeIcn}
        //     onClick={() => setOpenTrade(false)}
        //     alt="close-btn"
        //     style={{ marginRight: 30, marginTop: 20 }}
        //   />
        // }
        centered={true}
        closable={true}
        footer={null}
        onCancel={() => setshowCoOwnForm(false)}
        open={showCoOwnForm}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "0rem 1rem",
            display: "flex",
            flexDirection: "column",
            minHeight: "278px",
          }}
          className="modal_container"
        >
          <div className="contact_title">About Co-owning</div>
          <div className="contact_sec_title"> Preferred Contact Method</div>
          <div className="contact_flex_column">
            <Select
              onChange={(value) => setcontactOption(value)}
              defaultValue="Email Me"
              className="modal_container_select"
            >
              <Option value="Email Me" className="modal_container_select">
                Email Me
              </Option>
              <Option value="Call Me" className="modal_container_option">
                Call Me
              </Option>
              <Option value="Text Me" className="modal_container_option">
                Text Me
              </Option>
            </Select>

            {(contactOption == "Call Me" || contactOption == "Text Me") && (
              <div>
                <div className="contact_sec_title">
                  <label>Phone Number</label>
                </div>
                <TextInput
                  className="contact_input"
                  placeholder="example@quickr.com"
                />
              </div>
            )}
            {contactOption == "Email Me" && (
              <div>
                <div className="contact_sec_title">
                  <label>Email Address</label>
                </div>

                <TextInput
                  className="contact_input"
                  placeholder="example@quickr.com"
                />
              </div>
            )}
            {contactOption && (
              <div style={{ display: "flex", justifyContent: "center" }}>
                {" "}
                <AppButton style={{ width: "350px" }} className="contact_btn">
                  <Link
                    to="/"
                    style={{ color: "#ffffff" }}
                    className="app_btn_standard_link"
                  >
                    Submit
                  </Link>
                </AppButton>
              </div>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
}
