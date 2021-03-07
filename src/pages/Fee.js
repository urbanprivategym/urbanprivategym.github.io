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
                <h5>코로나로 인하여 최대 4명까지 입장이 가능합니다</h5>
                <br></br>

				<div className='row'>
					<section className='col-6 col-12-medium'>
						<h3>Happy Hour <span className='openTime'>(00:00 ~ 08:00)</span></h3>
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
											<b>&nbsp;₩7500</b>
											<span className='dicDesc'>&nbsp;50%</span>
										</td>
									</tr>
									<tr>
										<td>인원 추가 (1인)</td>
										<td>
											<span className='orgPrice'>₩8000</span> 
											<b>&nbsp;₩4000</b>
											<span className='dicDesc'>&nbsp;50%</span>
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
						<h3>Busy hour <span className='openTime'>(08:00 ~ 24:00)</span></h3>
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
											<b>&nbsp;₩4800</b>
											<span className='dicDesc'>&nbsp;40%</span>
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
											<b>&nbsp;₩9600</b>
											<span className='dicDesc'>&nbsp;40%</span>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</section>
				</div>

				<section>
					<ul className="actions">
						<li><a onClick={() => alert('3월 중순 오픈 예정입니다 ^^')} className="button primary">예약하러 가기</a></li>
					</ul>
				</section>
			</div>
		</section>
	</article>

</Layout>;

export default IndexPage;
