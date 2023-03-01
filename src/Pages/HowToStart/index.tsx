import React, { useState } from 'react';
import { NavigateFunction, useNavigate } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

import { PageProps } from "../../globalTypes";

import BackImg from "../../Assets/image_12.png";
import BackImg10 from "../../Assets/image_10.png";
import Vector_Enable from "../../Assets/Vector_Enable.png";
import Vector_Disable from "../../Assets/Vector_Disable.png";
import Logo from "../../Assets/g1406.png";
import phone3d from "../../Assets/phone3d.png";

export const HowToStart: React.FC<PageProps> = (): JSX.Element => {
  
  return (
    <div className='HowToStart'>
      <div className="HowToStart_dashboard">
        <Image src={BackImg} className="HowToStart_dashboard_BackImg" />
        <div className="text-start px-5 w-5 mx-5 pt-5 mt-3">
          <h1 className="section-title">How to Start?</h1>
          <p className="mt-4 section-content-text">Simply create an account with Swift and download the app to reap all the benefits that swift has to offer</p>
        </div>
      </div>
      <div className='HowToStart_getting-start d-flex'>
        <div className="HowToStart_getting-start_content px-5" style={{backgroundColor: "#151515"}}>
          <h1 className="mt-5 section-title px-5 pt-3">Getting Started</h1>
          <h2 className="mt-5 px-5" style={{fontSize: "22px"}}>Enter your details to create an account or login with an existing account</h2>
          <div className="Home_getting-start_content_buttons px-5 d-flex my-5">
            <button className="border px-5 py-2 border">Login</button>
            <div className='d-flex'>
              <p className="my-2 mx-2">Don’t have an account?</p>
              <Nav.Link className="Header_navlink my-2" href="#">SignUp</Nav.Link>
            </div>
          </div>
        </div>
        <div className="HowToStart_getting-start_imgs d-flex justify-content-center">
            <Image src={phone3d} className="Home_what-swift_MoiterImg" />
        </div>
      </div>
      <div className='HowToStart_getting-start'>
        <Row className="">
          <Col className='px-5 mt-4 d-flex justify-content-center' xl={5}>
            <Image src={BackImg10} className='HowToStart_getting-start_backImg' width={350} />
          </Col>
          <Col xl={7} className="text-start HowToStart_getting-start_text py-5 px-5 mt-5">
            <h1 className="section-title pt-4 text-black">Download Swift</h1>
            <p className="mt-5 section-content-text text-start text-black">Download the bot for either Windows, MacOS, Android and iPhone. <br /><br />You can also use our bot on Telegram by searching @SwiftTrade and this will allow you to be able to utilise all of Swift’s features.</p>
          </Col>
        </Row>
      </div>
      <div className="HowToStart_pricing mt-5 text-center">
        <h1 className="section-title mt-5">Our Pricing</h1>
        <p className="mt-4 section-content-text">Oversee your collection, manage all your digital assets, and send your NFTs to another wallet with full transparency.</p>
        <div className="d-flex justify-content-center" style={{gap: "40px"}}>
          <div className="swift-card py-4 px-4">
            <div className="d-flex mx-1">
              <Image src={Logo} width={40} height={40} />
              <h2 className="mx-3 section-title text-black">Swift Lite</h2>
            </div>
            <p className="mt-3 section-content-text text-muted text-start text-black">1% fee on every transaction</p>
            <div>
              <div className="d-flex justify-content-start">
                <Image src={Vector_Enable} width={20} height={20} />
                <p className="px-2 section-content-text text-muted text-start text-black">Shared Node Clusters</p>
              </div>
              <div className="d-flex justify-content-start">
                <Image src={Vector_Enable} width={20} height={20} />
                <p className="px-2 section-content-text text-muted text-start text-black">Multi Trade's</p>
              </div>
              <div className="d-flex justify-content-start">
                <Image src={Vector_Disable} width={17} height={17} />
                <p className="px-2 section-content-text text-muted text-start text-black">No Limitations on copy trading</p>
              </div>
              <div className="d-flex justify-content-start">
                <Image src={Vector_Disable} width={17} height={17} />
                <p className="px-2 section-content-text text-muted text-start text-black">First access to new Features</p>
              </div>
            </div>
            <hr className="dot-line" />
            <h2 className="section-title text-start text-black py-3">Free</h2>
            <div className="d-grid">
              <button className="text-center mt-5 w-10 py-2">Choose</button>
            </div>
          </div>
          <div className="swift-card py-4 px-4">
            <div className="d-flex mx-1">
              <Image src={Logo} width={40} height={40} />
              <h2 className="mx-3 section-title text-black">Swift Pro</h2>
            </div>
            <p className="mt-3 section-content-text text-muted text-start text-black">Billed Monthly</p>
            <div>
              <div className="d-flex justify-content-start">
                <Image src={Vector_Enable} width={20} height={20} />
                <p className="px-2 section-content-text text-muted text-start text-black">Individual Node</p>
              </div>
              <div className="d-flex justify-content-start">
                <Image src={Vector_Enable} width={20} height={20} />
                <p className="px-2 section-content-text text-muted text-start text-black">Multi Trade</p>
              </div>
              <div className="d-flex justify-content-start">
                <Image src={Vector_Enable} width={20} height={20} />
                <p className="px-2 section-content-text text-muted text-start text-black">No Limitations on copy trading</p>
              </div>
              <div className="d-flex justify-content-start">
                <Image src={Vector_Enable} width={20} height={20} />
                <p className="px-2 section-content-text text-muted text-start text-black">First access to new features</p>
              </div>
            </div>
            <hr className="dot-line" />
            <h2 className="section-title text-start text-black d-flex pt-2">0.1 ETH <p className="section-content-text py-3 mx-1 text-muted text-start text-black">/month</p></h2>
            <div className="d-grid">
              <button className="text-center mt-5 w-10 py-2">Choose</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}