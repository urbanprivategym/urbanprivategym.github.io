import React from 'react';
import Layout from '../components/Layout';
import mapImg from '../assets/images/upgym_map.png';
import juchaImg from '../assets/images/jucha.png';

const IndexPage = () => <Layout>
	<article id="main">
		<header>
			<h2>위치 및 연락처</h2>
			<p>카톡 플러스친구 및 인스타 DM으로 연락 주시면 빠르게 답변 드리겠습니다</p>
		</header>
		<section className="wrapper style5">
			<div className="inner">
				<section>
                    <div className="box alt">
						<div className="row gtr-50 gtr-uniform">
                            <div className="col-6 col-12-medium">
                                <h3>어반프라이빗짐 서울 도곡점</h3>
                                <h4>상세주소</h4>
					            <p>서울 강남구 논현로38길 32-11 지하 1층<br></br>매봉역 4번출구 도보 2-3분 거리</p>
                                <div className="row">
                                    <div className="col-6 col-12-medium">
                                        <ul className="actions stacked">
                                            <li><a href="http://naver.me/GdJyqH5F" className="button primary fit">네이버 지도로 보기</a></li>
                                        </ul>
                                    </div>                                  
                                </div>
                                <h4>연락처</h4>
                                <p>
                                    <b>이메일 : </b>urbanprivategym@naver.com<br></br>
                                    <b>플러스친구 : </b><a href="http://pf.kakao.com/_LxcxbyK">링크 바로가기</a><br></br>
                                    <b>인스타그램 : </b><a href="https://www.instagram.com/urbanprivategym/">@urbanprivategym</a><br></br><br></br>
                                </p>
                            </div>
							<div className="col-6 col-12-medium"><span className="image fit"><img src={mapImg} alt="" /></span></div>
						</div>
                        <hr></hr>
						<div className="row gtr-50 gtr-uniform">
                            <div className="col-6 col-12-medium">
                                <h3>건물 제공 주차공간</h3>
                                <p>
                                    * 평일에는 주차가 힘들 수 있으니 양해 부탁 드립니다<br></br>
                                    * 식당(사계솔) 앞 대각선 주차 가능<br></br>
                                    * 식당 좌측 주차공간 안쪽부터 채워서 주차 가능<br></br>
                                    <br></br>
                                </p>
                                <h3>기타 주차공간</h3>
                                <p>
                                    <b><a href="http://naver.me/x1euX35P">1) 어프짐 건물 바로 옆 유료주차장 (도곡주차장)</a></b><br></br>
                                    <b><a href="http://naver.me/Gw55kuMs">2) 논현로 28길 노상공영주차장</a></b><br></br>
                                    <b><a href="http://naver.me/GvkfuBK5">3) 도곡샛길공영노외주차장</a></b><br></br>
                                    <br></br>
                                </p>
                            </div>
							<div className="col-6 col-12-medium"><span className="image fit"><img src={juchaImg} alt="" /></span></div>
						</div>                        
					</div>
                </section>
			</div>
		</section>
	</article>

</Layout>;

export default IndexPage;
