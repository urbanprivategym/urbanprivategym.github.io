import React from 'react';
import {Link} from 'react-scroll'

import Layout from '../components/Layout';

import b5 from '../assets/images/b5.jpeg';
import b7 from '../assets/images/b7.jpeg';
import b12 from '../assets/images/b12.jpeg';
import b13 from '../assets/images/b13.jpeg';
import b15 from '../assets/images/b15.jpeg';
import b18 from '../assets/images/b18.jpeg';
import b19 from '../assets/images/b19.jpeg';
import b21 from '../assets/images/b21.jpeg';
import s1 from '../assets/images/upgs1.jpeg';
import s2 from '../assets/images/upgs4.jpeg';
import s3 from '../assets/images/upgs3.jpeg';
import s4 from '../assets/images/upgs2.jpeg';
import s5 from '../assets/images/upgs5.jpeg';
import s6 from '../assets/images/upgs6.jpeg';
import s7 from '../assets/images/s5.jpeg';
import s8 from '../assets/images/s9.jpeg';
import m1 from '../assets/images/m1.jpeg';
import r1 from '../assets/images/r1.jpeg';
import r2 from '../assets/images/r2.jpeg';
import r3 from '../assets/images/r3.jpeg';
import tal1 from '../assets/images/tal1.jpeg';
import tal2 from '../assets/images/tal2.jpeg';
import tal3 from '../assets/images/tal3.jpeg';

const IndexPage = () => <Layout>
	<article id="main">
		<header>
			<h2>짐 투어</h2>
			<p>어반프라이빗짐 시설안내</p>
		</header>
		<section className="wrapper style5">
			<div className="inner">
				<section>
					<h2>어반프라이빗짐은 두 공간이 있습니다</h2>
					<div className='row'>
						<section className='col-6 col-12-medium'>
							<h3>Premium</h3>
							<div className="col-12"><span className="image fit"><img src={b15} alt="" /></span></div>
							<p>
								프리미엄은 2-3 인 이용에 적합하며<br></br>
								넓은 공간 면적과 풍부한 중량 맟 운동 장비를 제공합니다.
							</p>	
							<ul className="actions">
								<li><Link className="button" to="premiumImage" spy={true} smooth={true}>이미지 더 보기</Link></li>
							</ul>	
							<div className="table-wrapper">
								<table>
									<thead>
										<tr>
											<th>운동 장비</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												파워랙 / 미니랙 / 데드리프트존<br></br>
												<small>모노리프트, 목재 플랫폼, 풀업바 포함</small>
											</td>
										</tr>
										<tr>
											<td>
												엘리코 역도바 / 포디움 파워바 / REP 파워바<br></br>
												<small>2200mm / 20kg</small>
											</td>
										</tr>
										<tr>
											<td>
												포디움 우레탄 원판 / 크라토스 주물원판
												<small> 총 605kg</small>
											</td>
										</tr>
										<tr>
											<td>로잉머신 (입고예정) / 스피닝 사이클</td>
										</tr>	
										<tr>
											<td>
												파워랙 랫풀 다운 및 종류별 그립 / 미니랙 딥스바
											</td>
										</tr>
										<tr>
											<td>덤벨 / 케틀벨 / EZ바 / 인클라인벤치 / 플랫벤치</td>
										</tr>										
										<tr>
											<td>더블 바벨 잭 / 배틀로프 / 폼롤러 / 요가매트 및 소도구</td>
										</tr>						
									</tbody>
								</table>
								<table>
									<thead>
										<tr>
											<th>기타 편의장비</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>촬영용 링 조명 삼각대 / 일반 삼각대</td>
										</tr>	
										<tr>
											<td>블루투스 스피커 (중형)</td>
										</tr>	
										<tr>
											<td>세스코 바이러스케어 시스템</td>
										</tr>
										<tr>
											<td>ADT 캡스 출동 안심벨</td>
										</tr>
									</tbody>
								</table>
							</div>
						</section>
						<section className='col-6 col-12-medium'>
							<h3>Standard</h3>
							<div className="col-12"><span className="image fit"><img src={s1} alt="" /></span></div>
							<p>
								스탠다드는 1-2 인 이용이 적합하며<br></br>
								컴팩트한 공간 면적과 경제적인 요금으로 구성 하였습니다.
							</p>	
							<ul className="actions">
								<li><Link className="button" to="standardImage" spy={true} smooth={true}>이미지 더 보기</Link></li>
							</ul>	
							<div className="table-wrapper">
								<table>
									<thead>
										<tr>
											<th>운동 장비</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												하프랙<br></br>
												<small>모노리프트, 목재 플랫폼, 풀업바 포함</small>
											</td>
										</tr>
										<tr>
											<td>
												포디움 파워바<br></br>
												<small>2200mm / 20kg</small>
											</td>											
										</tr>
										<tr>
											<td>
												포디움 우레탄 원판
												<small> 총 740lbs, 약 340kg</small>
											</td>
										</tr>
										<tr>
											<td>로잉머신 (입고예정) / 레그 컬, 익스텐션, 암컬 옵션 벤치</td>
										</tr>	
										<tr>
											<td>
												파워랙 랫풀 다운 및 종류별 그립 / 미니랙 딥스바
											</td>
										</tr>
										<tr>
											<td>덤벨 / 케틀벨 / EZ바 / 인클라인벤치 / 플랫벤치</td>
										</tr>										
										<tr>
											<td>싱글 바벨 잭 / 배틀로프 / 폼롤러 / 요가매트 및 소도구</td>
										</tr>	
									</tbody>
								</table>
								<table>
									<thead>
										<tr>
											<th>기타 편의장비</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>촬영용 링 조명 삼각대</td>
										</tr>	
										<tr>
											<td>블루투스 스피커 (소형)</td>
										</tr>	
										<tr>
											<td>세스코 바이러스케어 시스템</td>
										</tr>
										<tr>
											<td>ADT 캡스 출동 안심벨</td>
										</tr>
									</tbody>
								</table>									
							</div>
						</section>
					</div>				

					<h2>시설 이미지</h2>
					<h4 id="premiumImage">Premium</h4>
					<div className="box alt">
						<div className="row gtr-50 gtr-uniform">
							<div className="col-12"><span className="image fit"><img src={b15} alt="" /></span></div>
                            <div className="col-12"><span className="image fit"><img src={b7} alt="" /></span></div>
							<div className="col-6"><span className="image fit"><img src={b18} alt="" /></span></div>
							<div className="col-6"><span className="image fit"><img src={b5} alt="" /></span></div>
							<div className="col-6"><span className="image fit"><img src={b19} alt="" /></span></div>
							<div className="col-6"><span className="image fit"><img src={b21} alt="" /></span></div>
                            <div className="col-6"><span className="image fit"><img src={b12} alt="" /></span></div>
							<div className="col-6"><span className="image fit"><img src={b13} alt="" /></span></div>
						</div>
					</div>
					<h4 id="standardImage">Standard</h4>
					<div className="box alt">
						<div className="row gtr-50 gtr-uniform">
                        	<div className="col-12"><span className="image fit"><img src={s1} alt="" /></span></div>
							<div className="col-12"><span className="image fit"><img src={s2} alt="" /></span></div>
							<div className="col-6"><span className="image fit"><img src={s3} alt="" /></span></div>
							<div className="col-6"><span className="image fit"><img src={s4} alt="" /></span></div>
							<div className="col-6"><span className="image fit"><img src={s5} alt="" /></span></div>
							<div className="col-6"><span className="image fit"><img src={s6} alt="" /></span></div>
							<div className="col-6"><span className="image fit"><img src={s7} alt="" /></span></div>
							<div className="col-6"><span className="image fit"><img src={s8} alt="" /></span></div>
						</div>
					</div>                    
				</section>
                <section>
					<h3>휴게시설</h3>
					<div className="box alt">
						<div className="row gtr-50 gtr-uniform">
                        	<div className="col-12"><span className="image fit"><img src={r1} alt="" /></span></div>
							<div className="col-6"><span className="image fit"><img src={r2} alt="" /></span></div>
							<div className="col-6"><span className="image fit"><img src={r3} alt="" /></span></div>
						</div>
					</div>                    
					<h3>피팅룸</h3>
					<div className="box alt">
						<div className="row gtr-50 gtr-uniform">
                        	<div className="col-12"><span className="image fit"><img src={tal1} alt="" /></span></div>
							<div className="col-6"><span className="image fit"><img src={tal2} alt="" /></span></div>
							<div className="col-6"><span className="image fit"><img src={tal3} alt="" /></span></div>
						</div>
					</div>                           
				</section>
			</div>
		</section>
	</article>

</Layout>;

export default IndexPage;
