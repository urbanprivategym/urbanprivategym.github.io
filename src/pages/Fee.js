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
				<section>
					<h5>Premium</h5>
					<div className="table-wrapper">
						<table>
                            <thead>
								<tr>
                                    <th>인원</th>
									<th>가격</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1인</td>
									<td>미정</td>
								</tr>
								<tr>
									<td>2인</td>
									<td>미정</td>
								</tr>
								<tr>
									<td>3인</td>
									<td>미정</td>
								</tr>
								<tr>
									<td>4인 +</td>
									<td>미정</td>
								</tr>
							</tbody>
						</table>
					</div>

					<h5>Standard</h5>
					<div className="table-wrapper">
						<table>
							<thead>
								<tr>
                                    <th>인원</th>
									<th>가격</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1인</td>
									<td>미정</td>
								</tr>
								<tr>
									<td>2인</td>
									<td>미정</td>
								</tr>
								<tr>
									<td>3인 +</td>
									<td>미정</td>
								</tr>
							</tbody>
						</table>
					</div>
				</section>

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
