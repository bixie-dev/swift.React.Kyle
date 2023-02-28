import React, { useState, useEffect } from 'react';
import { ReactSortable } from "react-sortablejs";
import ReactPlayer from 'react-player/youtube'
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { PageProps } from "../../globalTypes";

import Line6 from "../../Assets/Line_6.png";
import People from "../../Assets/People-2.png";
import Caution from "../../Assets/Caution.png";
import Safe from "../../Assets/Safe-1.png";
import Vector from "../../Assets/Discord.svg";
import Insta from "../../Assets/Instagram.svg";
import Social from "../../Assets/entypo-social_linkedin-with-circle.png";

export const Sources: React.FC<PageProps> = (): JSX.Element => {

  return(
    <div className="Sources">
      <div className='Sources_about text-center mt-5'>
        <h1 className="section-title py-3">About Us</h1>
        <h2 className="section-title mt-5 py-3">Why Choose Swift Trade?</h2>
        <p className="mt-2 section-content-text">Trade smarter, not harder - unleash lightning fast profits with our Telegram trading bot</p>
        <div className="d-flex mt-5 pt-3">
          <Image src={Line6} className="Home_what-swift_MoiterImg" height={50} />
          <p className="section-content-text px-3">
          If you're looking to take your trading game to the next level, then you need a tool that can keep up with the fast-paced world of the markets. That's where our lightning-fast trading bot comes in. With our bot, you'll be able to execute trades faster than ever before, taking advantage of split-second opportunities that could make all the difference in your portfolio. Our bot is packed with powerful features, including advanced technical analysis tools, real-time market data, and customizable trading strategies. And best of all, our bot is designed to be easy to use, even for traders who are just getting started. With our bot, you'll have the power to trade smarter, not harder, and take your profits to new heights.
          </p>
        </div>
      </div>
      <div className='Sources_traders text-start mt-5'>
        <div className="d-flex mt-5 pt-3">
          <Row>
            <Col>
              <Image src={People} className="Home_what-swift_MoiterImg" height={320} />
            </Col>
            <Col>
              <h2 className="section-title mt-5 py-3">Powerful for traders</h2>
              <p className="section-content-text pt-2 mt-3">
                Swift is  customizable to your individual trading style, and is built with the latest technology to ensure fast and reliable performance. So whether you're a seasoned trader or just getting started, our trading bot has everything you need to take your trading game to the next level.
              </p>
            </Col>
          </Row>
        </div>
      </div>
      <div className='Sources_traders text-start mt-5'>
        <div className="d-flex mt-5 pt-3">
          <Row>
            <Col>
              <h2 className="section-title mt-5 py-3">Low cost, forever</h2>
              <p className="section-content-text pt-2 mt-3">
              With lightning-fast order execution and minimal fees, you'll be able to take advantage of even the smallest market movements and make more profitable trades
              </p>
            </Col>
            <Col>
              <Image src={Caution} className="Home_what-swift_MoiterImg" height={280} />
            </Col>
          </Row>
        </div>
      </div>
      <div className='Sources_traders text-start mt-5'>
        <div className="d-flex mt-5 pt-3">
          <Row>
            <Col>
              <Image src={Safe} className="Home_what-swift_MoiterImg" height={320} />
            </Col>
            <Col>
              <h2 className="section-title mt-5 py-4">Secure</h2>
              <p className="section-content-text mt-3">
              We take security very seriously. That's why our trading bot is built with the highest level of security to protect your assets and information. We use advanced encryption protocols to keep your data safe and secure at all times.
              </p>
            </Col>
          </Row>
        </div>
      </div>
      <div className='Sources_about text-center mt-5'>
        <h2 className="section-title mt-5 py-3">Developer / Founder</h2>
        <div className="d-flex mt-5 pt-3">
          <p className="section-content-text px-3">
            It is evident to Swift that the Developer and Founder  should be publicly known to establish trust and credibility with users who are entrusting their wallet keys to the trading bot. Hence why we have an introduction below.
          </p>
        </div>
      </div>
      <div className='Sources_traders text-start mt-5'>
        <div className="d-flex mt-5 pt-3">
          <Row>
            <Col>
              <h2 className="section-title mt-5 py-3">Kyle Grange</h2>
              <p className="section-content-text pt-2 mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="Footer_social-group d-flex mt-4">
                <Image src={Social} width={22} height={22} />
                <Image src={Insta} width={22} height={22} />
                <Image src={Vector} width={22} height={22} />
              </div>
            </Col>
            <Col>
              <div className='w-10'>
                <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}