import React, { useEffect, useState } from "react";
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';

import { PageProps } from "../../globalTypes";

import BackgroundImg from "../../Assets/HomeBackground.png"
import Monitor from "../../Assets/Monitor_XDR.png"
import Line6 from "../../Assets/Line_6.png";
import Line8 from "../../Assets/Line_8.png";
import Arrow from "../../Assets/arrow.png";
import Cube from "../../Assets/cube.png";
import Thro from "../../Assets/thro.png";
import phone3d from "../../Assets/phone3d.png";


export const Home: React.FC<PageProps> = ({ }): JSX.Element => {

  return (
    <div className="Home">
      <div className="Home_dashboard">
        <Image src={BackgroundImg} className="Home_dashboard_BackImg" />
        <div className="Home_dashboard_text-content text-center pt-5 mt-3">
          <h1 className="section-title">The World’s Most Optimised<br />Crypto Trading Bot</h1>
          <p className="mt-4 section-content-text">Your all in one trading bot for coins on multiple chains</p>
        </div>
        <div className="Home_dashboard_button-content justify-content-center text-center mt-3">
          <button className="border py-3 px-4">Download</button>
          <button className="border py-3 px-4">Purchase Swift Pro</button>
        </div>
      </div>
      <div className="Home_what-swift">
        <div className="Home_what-swift_text-content text-center pt-5 mt-2">
          <h1 className="section-title">What is Swift ?</h1>
          <p className="mt-4 section-content-text">
          In the fast-paced world of cryptocurrency, speed and agility are key factors in maximising profits. Swift offers traders to reap the benefits of a fast, reliable and affordable trading bot that can give you an edge in the market, allowing you to enter and exit trades quickly, thereby increasing your chances of making profitable trades.
          </p>
        </div>
        <div className="pt-5 mt-5">
          <Row>
            <Col>
              <Image src={Monitor} className="Home_what-swift_MoiterImg" width={500} />
            </Col>
            <Col>
              <div className="d-flex">
                <Image src={Line6} className="Home_what-swift_MoiterImg" height={60} />
                <p className="section-content-text text-start px-3">
                  Beyond just the use of clusters and individual nodes, we have implement fast transaction properties by optimising the underlying blockchain network protocol and improving block propagation times or reducing block confirmation times.
                </p>
              </div>
              <div className="d-flex mt-5">
                <Image src={Line8} className="Home_what-swift_MoiterImg" height={40} />
                <p className="section-content-text text-start px-3">
                  High performance tools for active traders and industry-leading security from day one.
                </p>
              </div>
              <div className="Home_what-swift_content-buttons mt-5">
                <button className="border py-3 px-5">Download</button>
                <button className="py-3 px-4">Learn more</button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className='Receive_getting-start d-flex mt-5'>
        <div className="Receive_getting-start_content px-5 mt-5" style={{backgroundColor: "#FFFF"}}>
          <h1 className="mt-5 px-5 pt-3 text-black">Getting Started</h1>
          <p className="mt-5 px-5 text-black">Enter your details to create an account or login with an existing account</p>
          <div className="Home_getting-start_content_buttons px-5 d-flex mt-5">
            <button className="border px-5 border">Login</button>
            <p className="my-2 mx-2 text-black">Don’t have an account?</p>
            <Nav.Link className="Header_navlink my-2 text-black" href="#">SignUp</Nav.Link>
          </div>
        </div>
        <div className="Receive_getting-start_imgs d-flex justify-content-center">
            <Image src={phone3d} className="Home_what-swift_MoiterImg" />
        </div>
      </div>
      <div className="Home_affiliate text-center">
        <h1 className="section-title pt-5">Affiliate Program</h1>
        <p className="pt-2 section-content-text">Not a trader? Join our Affilate program to  earn from our services.</p>
        <div className="Home_affiliate_cards px-5 pt-5">
          <Row>
            <Col>
              <Card>
                <Card.Body className="pt-4">
                  <Card.Title className="pt-3" style={{fontWeight: "bold"}}>Influencer Affiliate</Card.Title>
                  <hr />
                  <Card.Subtitle className="my-2" style={{fontWeight: "bold"}}>Free User Code</Card.Subtitle>
                  <div className="justify-content-center my-4 Home_affiliate_cards_button">
                    <button className="border rounded py-2 px-5">Sign up</button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body className="pt-4">
                  <Card.Title className="pt-3" style={{fontWeight: "bold"}}>Project Affiliate</Card.Title>
                  <hr />
                  <Card.Subtitle className="my-3" style={{fontWeight: "bold"}}>Free Project Code</Card.Subtitle>
                  <div className="justify-content-center my-4 Home_affiliate_cards_button">
                    <button className="border rounded py-2 px-5">Sign up</button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        <h1 className="section-title pt-5 mt-4">Our directions and advantages</h1>
        <p className="pt-2 section-content-text">Swift is always looking to innovate when it comes to features.</p>
        <div className="mt-5 d-flex Home_directions_cards px-3">
          <div className="text-center p-3">
            <Image src={Arrow} className="" width={100} height={100} />
            <p className="pt-2 section-content-text">Powerful for traders</p>
            <p className="pt-2 section-content-text">Swift is a powerhouse when it comes to performance and speed</p>
            <p className="pt-2 section-content-text">Learn more</p>
          </div>
          <div className="text-center p-3">
            <Image src={Thro} className="" width={100} height={100} />
            <p className="pt-2 section-content-text">Powerful for traders</p>
            <p className="pt-2 section-content-text">Swift is a powerhouse when it comes to performance and speed</p>
            <p className="pt-2 section-content-text">Learn more</p>
          </div>
          <div className="text-center p-3">
            <Image src={Cube} className="" width={100} height={100} />
            <p className="pt-2 section-content-text">Powerful for traders</p>
            <p className="pt-2 section-content-text">Swift is a powerhouse when it comes to performance and speed</p>
            <p className="pt-2 section-content-text">Learn more</p>
          </div>
        </div>
      </div>

    </div>
  )
}