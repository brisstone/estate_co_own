import { Col, Row } from "antd";
import React, { useEffect } from "react";
import AppNav from "../../components/AppNav/AppNav";
import Cover from "../../components/Cover/Cover";
import AppFooter from "../../components/Footer/AppFooter";
import Support from "../../components/Support/Support";
import "./Fees.scss";
import dislike from "../../assets/dislike.svg";
import like from "../../assets/like.svg";

const Fees = () => {
      useEffect(() => {
        window.scroll(0, 0);
      }, []);
  return (
    <div className="app_bg_settings">
      <AppNav />
      <Cover
        title="User Guide: How does Fagvest work?"
        // content="By Using Fragvest Software you agree to our privacy and data management policy."
        width="35rem"
      />
      <div className="fees_cover app_norm_padding">
        <Row>
          <Col md={12}>
            <div className="fees_table_content">
              <div>
                <div>Table of Contents</div>
                <div>
                  <div className="green_text">
                    What is Fragavest fee structure?
                  </div>
                  <p>Fees & How they affect me</p>
                  <p>Transactional fees</p>
                  <p>Agent Schedule</p>
                  <p>fee Broker Charge</p>
                </div>
              </div>
              <div className="fees_like_cont">
                <div className="blue_text">Did you find it helpful?</div>
                <div className="fees_like_actions">
                  <div>
                    <img src={like} alt={like} />
                  </div>
                  <div>
                    <img src={dislike} alt={dislike} />
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={12}>
            <div>
              <div className="green_header">
                What is Fragvest fee structure?
              </div>
              <div>
                <p>
                  Before you begin your journey into Real Estate investment with
                  us, it is important to understand how our platform works, and
                  the fees you would be charged for using our technology.
                </p>
                <p>
                  Please Note; The fees you are charged are used to maintain,
                  update and upgrade the platform to the latest technolgies at
                  any point in time. This is done so you get the best Real
                  Estate investment experience.
                </p>
              </div>
            </div>
            <div>
              <div className="green_header">Fees & How they affect me</div>
              <div>
                height: 66px; width: 714px; left: 0px; top: 63px; border-radius:
                nullpx;
              </div>
            </div>
            <div>
              <div className="blue_header">Transactional fees</div>
              <div>
                Transactional fees are charged when you perform basic
                transactions on the app. Transactions such as; Buy, Sell,
                Invest. The fee is usually a 0.5% charge of the transaction
                worth and is capped at ₦5,000 (Naira)
              </div>
            </div>
            <div>
              <div className="blue_header">Agent Schedule fee</div>
              <div>
                Agent schedule fee is charged at a capped vaue of ₦2,000 per
                tour schedule. This is needed to facilitate the agent during the
                tour.
              </div>
            </div>
            <div>
              <div className="blue_header">Broker Charge</div>
              <div>
                Broker charge is usually a 10% charge of the value of a property
                and is only applied to properties for “Sale” and “Rent”
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Support />
      <AppFooter />
    </div>
  );
};

export default Fees;
