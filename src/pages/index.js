import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import mainLogo from '../assets/images/logo_white.png';
import centerImg from '../assets/images/247.jpeg';
import powerRack from '../assets/images/b16.jpeg';
import liftingEq from '../assets/images/b3.jpeg';
import nobody from '../assets/images/m1.jpeg';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <img src={mainLogo} alt="" />
        <p>{config.subHeading}</p>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <div className="box alt">
          <div className="row gtr-50 gtr-uniform">
            <div className="col-4"></div>
            <div className="col-4"><span className="image fit"><img className="circle" src={centerImg} alt="" /></span></div>
            <div className="col-4"></div>
          </div>
				</div>
        <br/>
        <header className="major">
          <h2>
            24시간 운동공간 대여 서비스
          </h2>
          <p>
            네이버 예약을 통해 시설을 시간 단위로 예약하고, 
            <br />
            예약한 시간만큼 마음껏 시설을 이용할 수 있습니다.
          </p>
        </header>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={powerRack} alt="" />
        </div>
        <div className="content">
          <h2>
            최고급 파워랙 / 목재 플랫폼 완비
          </h2>
          <p>
            모노리프트, 케이블, 티바로우 랫 풀다운까지 모두 갖춘 최고급 파워랙과, 
            흔들리지 않는 리프팅을 위한 목재 플랫폼까지 완비하였습니다.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={liftingEq} alt="" />
        </div>
        <div className="content">
          <h2>
            최고급 리프팅 장비
          </h2>
          <p>
            Eleiko, REP fitness, Podium 등 최상급 바벨과 함께
            충분한 중량의 올림픽 규격 최고급 우레탄 플레이트를 완비했습니다. 
            Premium room 은 약 480kg, Standard room 은 약 380kg의 중량 사용이 가능합니다.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={nobody} alt="" />
        </div>
        <div className="content">
          <h2>
            편안한 이용을 위한 무인 시스템
          </h2>
          <p>
            더웃 편안하게 어반 프라이빗짐의 시설을 즐길 수 있도록, 
            24/7 무인 기반으로 운영되고 있습니다. (청소 및 시설 유지를 위해 일부 시간 거주)
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>어반 프라이빗짐을 활용하는 방법</h2>
          <p>
            운동시설 대여, 퍼스널 트레이닝 부터 스튜디오 용도 까지 다양하게 이용할 수 있습니다 
          </p>
        </header>
        <ul className="features">
          <li className="icon solid fa-headset">
            <h3>최고의 운동 놀이터</h3>
            <p>
              다른 사람을 신경쓰지도 않고, 파워랙을 차지하기 위해 눈치를 볼 필요도 없으며 편안하게 최고의 장비로 운동할 수 있습니다.
            </p>
          </li>
          <li className="icon solid fa-chalkboard-teacher">
            <h3>개인 퍼스널 트레이닝</h3>
            <p>
              어반 프라이빗짐은 현재 퍼스널 트레이닝을 제공하지 않으므로, 개인별 고객을 모집하고 대관 장소에서 자유롭게 수업을 진행할 수 있습니다.
            </p>
          </li>
          <li className="icon solid fa-camera-retro">
            <h3>때로는 스튜디오처럼</h3>
            <p>
              유튜브 컨텐츠부터 프로필 촬영 등등 자유롭게 촬영 스튜디오 용도로도 사용이 가능합니다.
            </p>
          </li>
          <li className="icon solid fa-heart">
            <h3>이색 데이트 장소</h3>
            <p>
              어반 프라이빗짐에서 바벨을 들고 함께 땀흘리며 이색 데이트를 하며, 눈치보지 않고 사진도 마음껏 찍어보세요!
            </p>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
