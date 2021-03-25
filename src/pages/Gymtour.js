import React from 'react';

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

const IndexPage = () => <Layout>
	<article id="main">
		<header>
			<h2>짐 투어</h2>
			<p>어반프라이빗짐 시설안내</p>
		</header>
		<section className="wrapper style5">
			<div className="inner">
				<section>
					<h3>Workout Facilities</h3>
					<h4>Premium</h4>
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
					<h4>Standard</h4>
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
					<h3>Others</h3>
					<p>업로드 예정 (휴게시설 / 피팅룸 / 주차공간)</p>
					{false && 
					<>
						<h4>휴게시설</h4>
						<div className="box alt">
							<div className="row gtr-50 gtr-uniform">
								<div className="col-12"><span className="image fit"><img src={b18} alt="" /></span></div>
								<div className="col-6"><span className="image fit"><img src={m1} alt="" /></span></div>
								<div className="col-6"><span className="image fit"><img src={m1} alt="" /></span></div>
								<div className="col-6"><span className="image fit"><img src={m1} alt="" /></span></div>
								<div className="col-6"><span className="image fit"><img src={m1} alt="" /></span></div>
							</div>
						</div>
						<h4>피팅룸</h4>
						<div className="box alt">
							<div className="row gtr-50 gtr-uniform">
							<div className="col-12"><span className="image fit"><img src={b19} alt="" /></span></div>
								<div className="col-6"><span className="image fit"><img src={m1} alt="" /></span></div>
								<div className="col-6"><span className="image fit"><img src={m1} alt="" /></span></div>
								<div className="col-6"><span className="image fit"><img src={m1} alt="" /></span></div>
								<div className="col-6"><span className="image fit"><img src={m1} alt="" /></span></div>
							</div>
						</div>  
						<h4>주차공간</h4>
						<div className="box alt">
							<div className="row gtr-50 gtr-uniform">
							<div className="col-12"><span className="image fit"><img src={b19} alt="" /></span></div>
								<div className="col-6"><span className="image fit"><img src={m1} alt="" /></span></div>
								<div className="col-6"><span className="image fit"><img src={m1} alt="" /></span></div>
								<div className="col-6"><span className="image fit"><img src={m1} alt="" /></span></div>
								<div className="col-6"><span className="image fit"><img src={m1} alt="" /></span></div>
							</div>
						</div>  
					</> 					
					}                                       
				</section>
			</div>
		</section>
	</article>

</Layout>;

export default IndexPage;
