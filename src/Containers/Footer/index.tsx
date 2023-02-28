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
        <div className="Footer_subscribe d-flex justify-content-end py-2 px-3 d-flex">
          <div className="">
            <h2 className="section-content-title" style={{fontSize: "18px", fontWeight: "bold"}}>Subscribe To get updated</h2>
            <p className="section-content-text" style={{fontSize: "15px"}}> Lorem ipsum dolor sit amet consectetur. Mi nibh venenatis in suscipit turpis.</p>
          </div>
          <div className="d-flex justify-content-end Footer_email_form">
            <input type="email" className="px-3" placeholder="Enter your email" />
            <button className="px-3 ms-2">Subscribe Now</button>
          </div>
        </div>
      </div>
      <Row className="mt-5 pt-5">
        <Col className="mt-5 d-flex" xs={7}>
          <Image src={Logo} width={60} height={40} />
          <h2 className="mx-2">Swift</h2>
        </Col>
        <Col className="mt-5" xl={3} md="auto">Website Links</Col>
        <Col className="mt-5" xs={1}>Languages</Col>
        <Col className="mt-5" xs={1}></Col>
      </Row>
      <Row className="mt-2 pt-3">
        <Col className="" xs={7}>
          <div className="section-content-text pt-3 text-start">
            <p>© Swift Bot 2023</p>
            <p>All rights reserved</p>
          </div>
          <div className="Footer_social-group d-flex mt-5">
            <Image src={Vector} width={25} height={25} />
            <Image src={Insta} width={25} height={25} />
            <Image src={Social} width={25} height={25} />
          </div>
        </Col>
        <Col className="" xl={3} md="auto">
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
          <div className="section-content-text text-start">
            <p className="Footer_language-active p-1 text-center">English</p>
            <p>Arabic</p>
            <p>French</p>
          </div>
        </Col>
        <Col className="mt-5" xs={1}></Col>
      </Row>
      <hr className="my-3" />
      <p className="section-content-text pb-3 text-center">Swift © 2023 Designed and Developed by Nova Labs</p>
    </footer>
  )
}