import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import nRevImg from '../assets/images/naver_booking.gif';
import pic1 from '../assets/images/pic03.jpg';
import pic2 from '../assets/images/pic03.jpg';
import pic3 from '../assets/images/pic03.jpg';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                더보기
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            어반 프라이빗짐은 24/7 운동공간 대여 서비스 입니다. 
            <br/>
            예약한 시간만큼 눈치보지 않고 시설을 이용할 수 있습니다.
          </h2>
          <p>
            네이버 예약을 통해 시설을 시간 단위로 예약하고,
            <br />
            예약한 시간에는 예약자 외에 아무도 이용할 수 없습니다.
          </p>
        </header>
        <div className="box alt">
          <div className="row gtr-50 gtr-uniform">
            <div className="col-4"></div>
            <div className="col-4"><span className="image fit"><img src={nRevImg} alt="" /></span></div>
            <div className="col-4"></div>
          </div>
				</div>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
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
          <img src={pic2} alt="" />
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
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            편안한 이용을 위한 무인 시스템
          </h2>
          <p>
            부담없이 편안하게 어반 프라이빗짐의 시설을 즐길 수 있도록, 
            24/7 무인 기반으로 운영되고 있습니다. (청소 및 시설 유지를 위해 일부 시간에는 상주합니다)
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Accumsan mus tortor nunc aliquet</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet
            eleifend
            <br />
            fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus
            ullamcorper.
          </p>
        </header>
        <ul className="features">
          <li className="icon fa-paper-plane">
            <h3>Arcu accumsan</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h3>Ac Augue Eget</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-code">
            <h3>Mus Scelerisque</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-headphones-alt">
            <h3>Mauris Imperdiet</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon fa-heart">
            <h3>Aenean Primis</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon fa-flag">
            <h3>Tortor Ut</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Arcue ut vel commodo</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet
            eleifend fringilla.
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="/#" className="button fit primary">
              Activate
            </a>
          </li>
          <li>
            <a href="/#" className="button fit">
              Learn More
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
