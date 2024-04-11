import React, { useEffect, useState } from "react";
import AppNav from "../../components/AppNav/AppNav";
import "./BlogDetails.scss";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import AppFooter from "../../components/Footer/AppFooter";
import { useParams } from "react-router-dom";
import moment from "moment";
import { baseUrl, rootBaseUrl } from "../../utils";
import axios from "axios";

const BlogDetails = () => {
  const [loading, setloading] = useState(false);
  const { id } = useParams();
  const [currentBlog, setcurrentBlog] = useState();

  const getBlogs = async () => {
    try {
      setloading(true);
      const result = await axios.get(`${baseUrl}/get-blog-post/${id}`);
      setloading(false);

      setcurrentBlog(result?.data?.data);
    } catch (error) {
      setloading(false);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    getBlogs();
  }, []);

  return (
    <div className="app_bg_settings">
      <AppNav />
      {loading ? (
        <div
          style={{
            fontSize: "25px",
            fontWeight: 800,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "600px",
          }}
        >
          Loading...
        </div>
      ) : (
        <div className="blog_details_wrapper app_norm_padding">
          {/* <div
            className="cover_image"
            style={{
              backgroundImage: `url('${rootBaseUrl}/storage/${currentBlog?.blog_image}')`,
              backgroundRepeat: "no-repeat",
              // backgroundSize: "contain",
              backgroundSize: "100% auto",
            }}
          ></div> */}
          <img
            src={`${rootBaseUrl}/storage/${currentBlog?.blog_image}`}
            alt="blogImg"
            style={{ borderRadius: "12px" }}
            className="image"
          />
          <div className="read_time">
            {moment(currentBlog?.created_at).format(
              "dddd, MMMM Do YYYY, h:mm:ss a"
            )}
          </div>
          <div className="title">{currentBlog?.title}</div>
          <div className="author"> By {currentBlog?.created_by}</div>
          <div className="body">
            <div
              dangerouslySetInnerHTML={{
                __html: currentBlog?.blog_description,
              }}
            />
          </div>
        </div>
      )}

      <NewsLetter />
      <AppFooter />
    </div>
  );
};

export default BlogDetails;
