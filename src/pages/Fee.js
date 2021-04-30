import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => <Layout>
	<article id="main">
		<header>
			<h2>이용요금 및 예약</h2>
			<p>어반프라이빗짐은 사전 예약제로 시간당 요금을 기본으로 합니다</p>        
		</header>
		<section className="wrapper style5">
			<div className="inner">
                <h2>이용요금</h2>
                <h5>5월 여름준비특가로 최대 50% 할인을 진행하고 있습니다</h5>
                <br></br>
				{true &&
					<div className='row'>
					<section className='col-6 col-12-medium'>
						<h3>
							Happy Hour<br></br>
							<span className='openTime'>평일 05:00 ~ 18:00</span>
						</h3>
						<h5>Standard</h5>
						<div className="table-wrapper">
							<table>
								<thead>
									<tr>
										<th>인원</th>
										<th>가격 / 1시간</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>1인</td>
										<td>
											<span className='orgPrice'>₩15000</span> 
											<b>&nbsp;₩9000</b>
											<span className='dicDesc'>&nbsp;40%</span>
										</td>
									</tr>
									<tr>
										<td>인원 추가 (1인)</td>
										<td>
											<span className='orgPrice'>₩8000</span> 
											<b>&nbsp;₩6000</b>
											<span className='dicDesc'>&nbsp;25%</span>
										</td>
									</tr>
								</tbody>
							</table>
						</div>

						<h5>Premium</h5>
						<div className="table-wrapper">
							<table>
								<thead>
									<tr>
										<th>인원</th>
										<th>가격 / 1시간</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>1인</td>
										<td>
											<span className='orgPrice'>₩30000</span> 
											<b>&nbsp;₩15000</b>
											<span className='dicDesc'>&nbsp;50%</span>
										</td>
									</tr>
									<tr>
										<td>인원 추가 (1인)</td>
										<td>
											<span className='orgPrice'>₩16000</span> 
											<b>&nbsp;₩8000</b>
											<span className='dicDesc'>&nbsp;50%</span>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</section>

					<section className='col-6 col-12-medium'>
						<h3>
							Busy hour<br></br>
							<span className='openTime'>평일 18:00 ~ 24:00 / 주말 전체</span>
						</h3>
						<h5>Standard</h5>
						<div className="table-wrapper">
							<table>
								<thead>
									<tr>
										<th>인원</th>
										<th>가격 / 1시간</th>
									</tr>
								</thead>
								<tbody>
								<tr>
									<td>1인</td>
										<td>
											<span className='orgPrice'>₩15000</span> 
											<b>&nbsp;₩11000</b>
											<span className='dicDesc'>&nbsp;26.6%</span>
										</td>
									</tr>
									<tr>
										<td>인원 추가 (1인)</td>
										<td>
											<span className='orgPrice'>₩8000</span> 
											<b>&nbsp;₩6000</b>
											<span className='dicDesc'>&nbsp;25%</span>
										</td>
									</tr>
								</tbody>
							</table>
						</div>

						<h5>Premium</h5>
						<div className="table-wrapper">
							<table>
								<thead>
									<tr>
										<th>인원</th>
										<th>가격 / 1시간</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>1인</td>
										<td>
											<span className='orgPrice'>₩30000</span> 
											<b>&nbsp;₩18000</b>
											<span className='dicDesc'>&nbsp;40%</span>
										</td>
									</tr>
									<tr>
										<td>인원 추가 (1인)</td>
										<td>
											<span className='orgPrice'>₩16000</span> 
											<b>&nbsp;₩8000</b>
											<span className='dicDesc'>&nbsp;50%</span>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</section>
				</div>
				}
				<section>
					<ul className="actions">
						<li><a href="https://m.booking.naver.com/booking/10/bizes/503082" className="button primary">예약하러 가기</a></li>
					</ul>
				</section>
			</div>
		</section>
	</article>

</Layout>;

export default IndexPage;
