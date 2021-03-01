import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import banner from '../assets/images/banner.jpeg';
const IndexPage = () => <Layout>
	<article id="main">
		<header>
			<h2>이용요금</h2>
			<p>어반프라이빗짐은 사전 예약제로 시간당 요금를 기본으로 합니다</p>        
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
									<td>Item One</td>
									<td>29.99</td>
								</tr>
								<tr>
									<td>Item Two</td>
									<td>19.99</td>
								</tr>
								<tr>
									<td>Item Three</td>
									<td>29.99</td>
								</tr>
								<tr>
									<td>Item Four</td>
									<td>19.99</td>
								</tr>
								<tr>
									<td>Item Five</td>
									<td>29.99</td>
								</tr>
							</tbody>
						</table>
					</div>

					<h5>Standard</h5>
					<div className="table-wrapper">
						<table className="alt">
							<thead>
								<tr>
                                    <th>인원</th>
									<th>가격</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Item One</td>
									<td>29.99</td>
								</tr>
								<tr>
									<td>Item Two</td>
									<td>19.99</td>
								</tr>
								<tr>
									<td>Item Three</td>
									<td>29.99</td>
								</tr>
								<tr>
									<td>Item Four</td>
									<td>19.99</td>
								</tr>
								<tr>
									<td>Item Five</td>
									<td>29.99</td>
								</tr>
							</tbody>
						</table>
					</div>
				</section>

				<section>
					<ul className="actions">
						<li><a href="/#" className="button primary">예약하러 가기</a></li>
					</ul>
				</section>

			</div>
		</section>
	</article>

</Layout>;

export default IndexPage;
