import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import AppNav from "../../components/AppNav/AppNav";
import "./Blog.scss";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import AppFooter from "../../components/Footer/AppFooter";
import blogImg from "../../assets/blog_bg.png";
import StoreApp from "../../components/StoreApp/StoreApp";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl, rootBaseUrl, truncateString } from "../../utils";
import moment from "moment";

export const blogData = [
  {
    id: 1,
    readTime: "3 mins read",
    title: "What a $250,000 Home Looks Like in 25 Major Cities",
    body: "To get started, simply set up your Fragvest account and choose which property you want to invest in. We have a........",
    date: "02/03/21",
    author: "By",
    name: "Jennifer Ottis",
    image: blogImg,
  },
  {
    id: 2,
    readTime: "5 mins read",
    title: "The Ultimate Guide to Investing in Real Estate",
    body: "Investing in real estate can be a lucrative venture if done right. Learn the ins and outs of real estate investment...",
    date: "05/10/21",
    author: "By",
    name: "Andrew Smith",
    image: blogImg,
  },
  {
    id: 3,
    readTime: "2 mins read",
    title: "10 Tips for First-Time Homebuyers",
    body: "Buying your first home can be daunting. Follow these expert tips to make the process smoother and more rewarding...",
    date: "11/18/21",
    author: "By",
    name: "Emily Davis",
    image: blogImg,
  },
  {
    id: 4,
    readTime: "4 mins read",
    title: "The Benefits of Property Investment",
    body: "Property investment offers numerous benefits, from passive income to long-term wealth growth...",
    date: "07/25/21",
    author: "By",
    name: "Michael Johnson",
    image: blogImg,
  },
  {
    id: 5,
    readTime: "6 mins read",
    title: "Renovation Ideas for Your New Home",
    body: "Transform your new house into your dream home with these renovation ideas and tips...",
    date: "09/14/21",
    author: "By",
    name: "Sophie Adams",
    image: blogImg,
  },
  {
    id: 6,
    readTime: "3 mins read",
    title: "Real Estate Market Trends for 2022",
    body: "Stay updated with the latest trends and forecasts in the real estate market for the upcoming year...",
    date: "12/31/21",
    author: "By",
    name: "Daniel Thompson",
    image: blogImg,
  },
  {
    id: 7,
    readTime: "5 mins read",
    title: "Avoiding Common Pitfalls in Property Investment",
    body: "Know the common mistakes investors make and how to avoid them to maximize your investment returns...",
    date: "08/09/21",
    author: "By",
    name: "Olivia Martinez",
    image: blogImg,
  },
];

const Blog = () => {
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState();
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const getBlogs = async () => {
    try {
      setloading(true);

      const result = await axios.get(`${baseUrl}/get-blog-posts`);
      setloading(false);

      setBlogs(result?.data?.data);
    } catch (error) {
      setloading(false);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  console.log(blogs, "dkdkdkd");

  const sortedBlogs = blogs?.sort((a, b) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);
    return dateB - dateA;
  });
  return (
    <div className="app_bg_settings">
      <AppNav />
      <div className="blog_wrapper app_norm_padding">
        <div>
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
            <>
              {sortedBlogs?.map((blog) => (
                <>
                  <Row
                    className="blog_cont"
                    onClick={() => {
                      navigate(`/blog/${blog.id}`, { state: blog });
                    }}
                  >
                    <Col lg={12} md={24} xl={12} xxl={12} sm={24} xs={24}>
                      <div className="blog_form_img">
                        {console.log(
                          `${rootBaseUrl}/storage/${blog?.blog_image}`,
                          "sssss"
                        )}
                        <img
                          src={`${rootBaseUrl}/storage/${blog?.blog_image}`}
                          alt="blogImg"
                          style={{ borderRadius: "12px" }}
                          className="image"
                        />
                      </div>
                    </Col>
                    <Col lg={12} md={24} xl={12} xxl={12} sm={24} xs={24}>
                      <div className="blog_text">
                        <div className="read_time">{"5 mins read"}</div>
                        <div className="title">{blog?.title}</div>
                        <div className="body">
                          {" "}
                          {/* {truncateString(`${blog?.blog_description}`, 300)} */}
                          <div
                            dangerouslySetInnerHTML={{
                              __html: truncateString(
                                `${blog?.blog_description}`,
                                200
                              ),
                            }}
                          />
                        </div>
                        <div className="date">
                          {moment(blog?.created_at).format(
                            "dddd, MMMM Do YYYY, h:mm:ss a"
                          )}
                        </div>
                        <div className="author">
                          By <span className="name">{blog?.created_by}</span>{" "}
                        </div>
                      </div>
                    </Col>
                  </Row>
                </>
              ))}
            </>
          )}
        </div>
      </div>
      <StoreApp />
      <NewsLetter />
      <AppFooter />
    </div>
  );
};

export default Blog;
