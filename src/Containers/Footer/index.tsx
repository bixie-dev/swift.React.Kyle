import React, { useContext } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

import { HeaderProps } from "./types";

import Logo from "../../Assets/g1028.png";
import Vector from "../../Assets/Vector.png";
import Insta from "../../Assets/ph_instagram-logo-fill.png";
import Social from "../../Assets/entypo-social_linkedin-with-circle.png";

export const Footer: React.FC<HeaderProps> = (): JSX.Element => {
  
  return (
    <footer className="Footer mt-5">
      <div className="d-flex justify-content-end px-2" style={{borderRadius: "2rem", marginTop: "-5%"}}>
        <Row className="Footer_subscribe">
          <Col xs={7} className="mt-4 d-flex">
            <div className="">
              <h2 className="section-content-title" style={{fontSize: "18px", fontWeight: "bold"}}>SUBSCRIBE TO GET UPDATE</h2>
              <p className="section-content-text" style={{fontSize: "12px", color: "#ffff"}}> Lorem ipsum dolor sit amet consectetur. Mi nibh venenatis in suscipit turpis.</p>
            </div>
          </Col>
          <Col className="mt-4">
            <div className="d-flex justify-content-end Footer_email_form">
              <input type="email" className="px-3 py-2" placeholder="Enter your email" />
              <button className="px-3 py-2 ms-2">Subscribe Now</button>
            </div>
          </Col>
        </Row>
      </div>
      <Row className="mt-2 d-flex Footer_content justify-content-center pt-3">
        <Col className="" xs={7}>
          <div className="d-flex mt-3 py-5">
            <Image src={Logo} width={50} height={35} />
            <h2 className="mx-3" style={{fontWeight: "bold", fontFamily: "sans-serif"}}>Swift</h2>
          </div>
          <div className="section-content-text pt-2 text-start">
            <p>© Swift Bot 2023</p>
            <p>All rights reserved</p>
          </div>
          <div className="Footer_social-group d-flex pt-4">
            <div className="icon-hover-white">
              <Image src={Vector} width={25} height={25} />
            </div>
            <div className="icon-hover-white">
              <Image src={Insta} width={25} height={25} />
            </div>
            <div className="icon-hover-white">
              <Image src={Social} width={25} height={25} />
            </div>
          </div>
        </Col>
        <Col className="" xl={3} md="auto">
          <h4 className="py-5 mt-4">Website Links</h4>
          <Row className="">
            <Col className="">
              <div className="section-content-text text-start">
                <p>About Us</p>
                <p>How to Start</p>
              </div>
            </Col>
            <Col className="">
              <div className="section-content-text text-start">
                <p>Purchase</p>
                <p>Download</p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col className="" xs={1}>
          <h4 className="py-5 mt-4">Languages</h4>
          <div className="section-content-text text-start">
            <p className="Footer_language-active p-1 text-center">English</p>
            <p>Arabic</p>
            <p>French</p>
          </div>
        </Col>
        <Col className="mt-5" xs={1}></Col>
      </Row>
      <hr className="my-5" />
      <p className="section-content-text pb-3 text-center">Swift © 2023 Designed and Developed by Nova Labs</p>
    </footer>
  )
}