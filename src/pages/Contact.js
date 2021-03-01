import React from 'react';

import Layout from '../components/Layout';

import mapImg from '../assets/images/upgym_map.png';
import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import banner from '../assets/images/banner.jpeg';
const IndexPage = () => <Layout>
	<article id="main">
		<header>
			<h2>위치 및 연락처</h2>
			<p>카카오톡 오픈 프로필 및 이메일로 연락 주시면 빠르게 답변 드리겠습니다</p>
		</header>
		<section className="wrapper style5">
			<div className="inner">
				<section>
                    <div className="box alt">
						<div className="row gtr-50 gtr-uniform">
                            <div className="col-6 col-12-medium">
                                <h4>상세주소</h4>
					            <p>서울 강남구 논현로38길 32-11 지하 1층<br></br>매봉역 4번출구 도보 2-3분 거리</p>
                                <div className="row">
                                    <div className="col-6 col-12-medium">
                                        <ul className="actions stacked">
                                            <li><a href="http://naver.me/54VtdxND" className="button primary fit">네이버 지도로 보기</a></li>
                                        </ul>
                                    </div>                                  
                                </div>
                                <h4>연락처</h4>
                                <p>
                                    <b>이메일: </b>urbanprivategym@gmail.com<br></br>
                                    <b>카카오톡: </b><a href="https://open.kakao.com/o/s7cj0YZc">https://open.kakao.com/o/s7cj0YZc</a><br></br><br></br>
                                </p>
                            </div>
							<div className="col-6 col-12-medium"><span className="image fit"><img src={mapImg} alt="" /></span></div>
						</div>
					</div>
                </section>
			</div>
		</section>
	</article>

</Layout>;

export default IndexPage;
