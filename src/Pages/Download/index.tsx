import React from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PageProps } from "../../globalTypes";
import BackgroundImg from "../../Assets/HomeBackground.png";
import Rectangle from "../../Assets/Rectangle.png";
import Tablet from "../../Assets/tablet.png";
import phon1 from "../../Assets/phon1.png";
import phon2 from "../../Assets/phon2.png";
import appstore from "../../Assets/appstore.png";
import googlePlay from "../../Assets/googleplay.png";
import QRcode from "../../Assets/QRcode.png";
import Logo from "../../Assets/g1406.png";
import Vector_Enable from "../../Assets/Vector_Enable.png";
import Vector_Disable from "../../Assets/Vector_Disable.png";
import right from "../../Assets/right.png";

export const Download: React.FC<PageProps> = (): JSX.Element => {

  return(
    <div className="Download">
      <div className="Home_dashboard">
        <Image src={BackgroundImg} className="Home_dashboard_BackImg" />
        <div className="Home_dashboard_text-content text-center pt-5 mt-3">
          <h1 className="section-title">Download Swift</h1>
          <p className="mt-4 section-content-text">Accelerating You Into a New Era of Trading.</p>
        </div>
        <div className="Home_dashboard_button-content justify-content-center text-center mt-5">
          <button className="border py-2 px-5">Download</button>
          <button className="border py-2 px-4">Purchase Swift Pro</button>
        </div>
      </div>
      <div className="Download_mission mx-auto mt-4">
        <Row className="">
          <Col xl={7}>
            <Image src={Tablet} className="Download_mission_image mt-5" />
          </Col>
          <Col xl={5} className="text-start mt-2 pt-5 ps-5">
            <h1 className="section-title mt-5 text-muted">Mission & Vision</h1>
            <p className="mt-4 section-content-text">Our vision is to create a world where anyone can trade with confidence, regardless of their experience level or financial background.</p>
          </Col>
        </Row>
        <div className="">
          <p className="mt-3 pt-5 section-content-text text-center">Unlock the full Swift experience by downloading the bot today!</p>
          <div className="justify-content-center d-flex mt-5">
            <button className="Download_mission_button px-4 py-2">Download</button>
          </div>
        </div>
      </div>
      <div className="Download_swiftTrade mt-5">
        <Row className="">
          <Col xl={5}>
            <h1 className="section-title text-center mt-5 pt-2">Swift Trade Desktop</h1>
            <Image src={Tablet} className="Download_mission_image mt-5" />
            <div className="justify-content-center d-flex mt-5 Download_download">
              <button className="Download_mission_button text-center py-2 px-4">Download 
              </button>
              <button className="ms-3 section-content-text py-2 px-4 Home_directions_learnmore_button">Download our uninstaller
              <Image src={right} className="ms-1" width={10} height={8} /></button>
            </div>
            <div className="justify-content-center d-flex">
              <button className="mt-5 section-content-text py-2 px-4 Home_directions_learnmore_button">Check out device and OS compatibility here
              <Image src={right} className="ms-1" width={10} height={8} /></button>
            </div>
          </Col>
          <Col xl={2} className="justify-content-center Download_line10 d-flex">
            <Image src={Rectangle} className="mt-5 Download_line10" height={530} />
          </Col>
          <Col xl={5} className="text-start Download_img mt-1 p-5">
            <h1 className="section-title text-center mt-5 pt-2">Swift Trade Desktop</h1>
            <div className="justify-content-center d-flex Download_phon">
              <Image src={phon1} className="mt-3" />
              <Image src={phon2} className="mt-5" />
            </div>
            <div className="justify-content-center d-flex mt-4" style={{gap: 20}}>
              <div className="">
                <div className="justify-content-center d-flex">
                  <Image src={appstore} className="mt-2" width={120} />
                </div>
                <div className="justify-content-center d-flex">
                  <Image src={googlePlay} className="mt-2" width={170} />
                </div> 
              </div>
              <div className="">
                <div className="justify-content-center d-flex">
                  <Image src={QRcode} className="mt-3" width={80} height={80} />
                </div>
                <p className="mt-2 section-content-text text-center">Scan me</p>
              </div>
              
            </div>
          </Col>
        </Row>
      </div>
      <div className="Download_pricing mt-5 text-center">
        <h1 className="section-title mt-5">Our Pricing</h1>
        <p className="mt-4 section-content-text">Oversee your collection, manage all your digital assets, and send your NFTs to another wallet with full transparency.</p>
        <div className="d-flex justify-content-center" style={{gap: "40px"}}>
          <div className="swift-card py-4 px-4">
            <div className="d-flex mx-1">
              <Image src={Logo} width={40} height={40} />
              <h2 className="mx-3 section-title text-black">Swit Lite</h2>
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
                <Image src={Vector_Disable} width={20} height={20} />
                <p className="px-2 section-content-text text-muted text-start text-black">No Limitations on copy trading</p>
              </div>
              <div className="d-flex justify-content-start">
                <Image src={Vector_Disable} width={20} height={20} />
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
                <Image src={Vector_Disable} width={20} height={20} />
                <p className="px-2 section-content-text text-muted text-start text-black">No Limitations on copy trading</p>
              </div>
              <div className="d-flex justify-content-start">
                <Image src={Vector_Disable} width={20} height={20} />
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