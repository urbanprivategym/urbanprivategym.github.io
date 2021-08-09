import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => <Layout>
	<article id="main">
		<header>
			<h2>이용안내</h2>
			<p>어반 프라이빗짐 사용설명서</p>        
		</header>
		<section className="wrapper style5">
			<div className="inner">
				<h2>이용 안내</h2>
				<div className="table-wrapper">
					<table>
						<tbody>
							<tr>
								<td>출입 비밀번호는 주기적으로 변경되며, 이용 전 문자로 발송해 드립니다</td>
							</tr>
							<tr>
								<td>주 3회 이상 방역소독 및 청소를 실시하고 있습니다.</td>
							</tr>
							<tr>
								<td>살균 및 공기질 향상을 위해 세스코 바이러스케어 시스템과 환기 덕트가 가동중입니다</td>
							</tr>						
							<tr>
								<td>고객분들의 안전과 보안을 위해 ADT 경비 시스템과 CCTV 가 상시 작동 중입니다</td>
							</tr>
							<tr>
								<td>Wi-Fi 를 제공하고 있습니다 (비밀번호는 휴게실 및 운동공간 내부에 게시되어 있습니다)</td>
							</tr>
							<tr>
								<td>화장실은 1,2층 사이 화장실을 이용해 주세요 (닫혀 있다면 2,3층사이 화장실을 이용해 주세요)</td>
							</tr>
							<tr>
								<td>주차는 매장 입구 주차공간, 매장 옆 유료주차장, <a href="http://naver.me/Gw55kuMs">논현로 28길 노상공영주차장</a>을 이용하실 수 있습니다</td>
							</tr>
							<tr>
								<td>탈의실은 제공하고 있으나, 현재 사워 공간은 제공하지 않습니다</td>
							</tr>
						</tbody>
					</table>
				</div>

				<h2>주의사항</h2>
				<p>
					더욱 나은 서비스를 제공하기 위하여
					고객 여러분들의 작은 배려가 필요합니다!
				</p>
				<div className="table-wrapper">
					<table>
						<tbody>
							<tr>
								<td>예약한 공간 이외에 다른 운동 공간은 출입을 금합니다</td>
							</tr>
							<tr>
								<td>바벨을 바닥에 던지는 등의 과도한 드랍은 자제 부탁 드립니다 (얼마전에 바닥이 나가서 재공사 하였습니다)</td>
							</tr>	
							<tr>
								<td>시설 이용 중에는 마스크를 꼭 착용하여 주시고, 비치된 손소독제와 소독 스프레이를 적극적으로 이용하여 주세요</td>
							</tr>						
							<tr>
								<td>어반 프라이빗짐 내 모든 공간에서는 취식이 금지됩니다</td>
							</tr>
							<tr>
								<td>모든 공간에서 실내 흡연 및 음주가 불가능합니다</td>
							</tr>
							<tr>
								<td>다른 이용자를 위해 고성방가나 지나친 소음은 삼가해 주세요</td>
							</tr>
							<tr>
								<td>다음 이용자를 위해 이용종료 시간까지 퇴실을 완전히 완료해 주세요</td>
							</tr>
							<tr>
								<td>다음 이용자를 위해 사용한 기구는 정리해 주세요</td>
							</tr>
							<tr>
								<td>운동기구를 소중히 다뤄주세요</td>
							</tr>
							<tr>
								<td>고객분들의 안전을 위해 무리한 중량은 조심해 주세요</td>
							</tr>
							<tr>
								<td>사용자 과실로 인한 기구 및 기물 파손 시 배상하여야 합니다</td>
							</tr>
						</tbody>
					</table>
				</div>

				<h2>비상시 대처</h2>
				<div className="table-wrapper">
					<table>
						<tbody>
							<tr>
								<td>화재 등 비상상황시 준비되어 있는 망치로 유리문을 깨고 비상구로 탈출하실 수 있습니다</td>
							</tr>
							<tr>
								<td>각 방에는 비상벨이 비치되어 있어, 버튼을 누르면 경비요원과 경찰이 즉시 출동합니다</td>
							</tr>
							<tr>
								<td>화재 상황시 각 방과 복도에 비치되어 있는 소화기를 사용하실 수 있습니다</td>
							</tr>
							{false && 
								<tr>
									<td>비상 상황시 아래의 연락처로 문의를 남겨주세요 (연락처 : xxxx)</td>
								</tr>							
							}
						</tbody>
					</table>
				</div>
			</div>
		</section>
	</article>

</Layout>;

export default IndexPage;
