import { Col, Collapse, Divider, Row } from "antd";
import React from "react";
import "./Faq.scss";

const { Panel } = Collapse;

const Faq = () => {
  return (
    <div className="faq_wrapper app_norm_padding">
      <Row className="faq_row" gutter={50}>
        <Col md={10} className="faq_header_1">
          We have Answers to your Frequently <br /> Asked Questions
        </Col>
        <Col md={14}>
          {/* <Divider /> */}
          <div className="faq_collapse">
            {" "}
            <Collapse
              bordered={false}
              expandIconPosition="right"
              defaultActiveKey={["1"]}
            >
              <Panel header="What does co-ownership mean? " key="1">
                Co-ownership of real estate simply means sharing the ownership
                rights of a land or an apartment with one or more people.
              </Panel>
              <Panel header="What is a Frag? " key="2">
                A frag is the smallest unit of a real estate property. Frags
                represent a legal Proof-of-Co-ownership of a land or building.{" "}
              </Panel>
              <Panel header="How many Frags can I own?" key="3">
                You can own as many Frags as you like, but at least one frag of
                a selected property.{" "}
              </Panel>
              <Panel header="How do I earn with co-ownership?" key="4">
                Your earnings come from rental income and property sales, based
                on how many Frags you own.{" "}
              </Panel>
              <Panel header="What types of co-ownership exist?" key="5">
                With Frags, you can either co-own to live or co-own to earn.
                When you choose to co-own to live, it means you are buying and
                moving into an apartment with friends or family without worrying
                about rent. On the other hand, when you co-own to earn, you are
                buying to earn money from rental income and sales of property
                based on how many Frags you own. However, you cannot live on the
                property if you are co-owning to earn.{" "}
              </Panel>
              <Panel header="What does being a co-owner entail?" key="6">
                You can either be an active co-owner or a passive one. When you
                co-own actively, you can e- vote on property decisions but when
                you co-own passively, you will be delegating your voting rights
                to anyone you choose. Either way, you’d still be earning money.
              </Panel>
              <Panel header="What do you do Fragvest?" key="7">
                At Fragvest, we give you the freedom to connect & interact with
                any real estate property you love.
              </Panel>
              <Panel header="Is co-ownership secure?" key="8">
                Yes, at Fragvest, you can safely co-own a land or an apartment
                backed by a legal certificate of co-ownership of that property.
              </Panel>
              <Panel header="How do I exit the co-ownership?" key="9">
                You can exit the co-ownership at any point by simply selling
                your Frags to an always-ready resale market.{" "}
              </Panel>
              <Panel
                header="How do I know if co-ownership right for me?"
                key="10"
              >
                As long as you’ve got available cash, co-ownership is right for
                you. You can safely convert your spare cash into a real estate
                asset and earn from rental income or sale of the property you
                co-own.{" "}
              </Panel>
            </Collapse>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Faq;
