import React from "react";
import "./StoreApp.scss";
import apple from "../../assets/apple.png";
import android from "../../assets/android.png";
import iphone13 from "../../assets/iPhone13.webp";

const StoreApp = () => {
  return (
    <div className="store_container_wrapper">
      <div className="store_container">
        <div className="store_content">
          <div className="store_content_app">
            <div className="store_content_text">
              Download the Fragvest Mobile App
            </div>
            <div className="store_content_btns">
              <div
                className="store_icons"
                onClick={() =>
                  (window.location.href =
                    "https://apps.apple.com/ng/app/fragvest-real-estate-store/id1635023019")
                }
              >
                <img
                  src={apple}
                  alt={apple}
                  style={{ borderRadius: "6.02006px" }}
                  className="image"
                />
              </div>
              <div
                className="store_icons"
                onClick={() =>
                  (window.location.href =
                    "https://play.google.com/store/apps/details?id=com.fragvest.fragvest_mobile")
                }
              >
                <img
                  src={android}
                  alt={android}
                  style={{ borderRadius: "6.02006px" }}
                  className="image"
                />
              </div>
            </div>
            <div className="store_content_phone_cont">
              <div className="store_content_phone">
                {/* <img src={iphone13} alt={iphone13} className="image" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreApp;
