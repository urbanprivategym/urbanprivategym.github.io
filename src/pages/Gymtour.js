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
			<h2>Gym tour</h2>
			<p>어반프라이빗짐 시설안내</p>
		</header>
		<section className="wrapper style5">
			<div className="inner">
				<section>
					<h3>Workout Facilities</h3>
					<h4>Premium</h4>
					<div className="box alt">
						<div className="row gtr-50 gtr-uniform">
							<div className="col-12"><span className="image fit"><img src={banner} alt="" /></span></div>
							<div className="col-6"><span className="image fit"><img src={pic1} alt="" /></span></div>
							<div className="col-6"><span className="image fit"><img src={pic2} alt="" /></span></div>
							<div className="col-6"><span className="image fit"><img src={pic3} alt="" /></span></div>
							<div className="col-6"><span className="image fit"><img src={pic3} alt="" /></span></div>
						</div>
					</div>
					<h4>Standard</h4>
					<div className="box alt">
						<div className="row gtr-50 gtr-uniform">
                        <div className="col-12"><span className="image fit"><img src={banner} alt="" /></span></div>
							<div className="col-6"><span className="image fit"><img src={pic1} alt="" /></span></div>
							<div className="col-6"><span className="image fit"><img src={pic2} alt="" /></span></div>
							<div className="col-6"><span className="image fit"><img src={pic3} alt="" /></span></div>
							<div className="col-6"><span className="image fit"><img src={pic3} alt="" /></span></div>
						</div>
					</div>                    
				</section>
                <section>
					<h3>Others</h3>
					<h4>휴게시설</h4>
					<div className="box alt">
						<div className="row gtr-50 gtr-uniform">
							<div className="col-12"><span className="image fit"><img src={banner} alt="" /></span></div>
							<div className="col-6"><span className="image fit"><img src={pic1} alt="" /></span></div>
							<div className="col-6"><span className="image fit"><img src={pic2} alt="" /></span></div>
							<div className="col-6"><span className="image fit"><img src={pic3} alt="" /></span></div>
							<div className="col-6"><span className="image fit"><img src={pic3} alt="" /></span></div>
						</div>
					</div>
					<h4>피팅룸</h4>
					<div className="box alt">
						<div className="row gtr-50 gtr-uniform">
                        <div className="col-12"><span className="image fit"><img src={banner} alt="" /></span></div>
							<div className="col-6"><span className="image fit"><img src={pic1} alt="" /></span></div>
							<div className="col-6"><span className="image fit"><img src={pic2} alt="" /></span></div>
							<div className="col-6"><span className="image fit"><img src={pic3} alt="" /></span></div>
							<div className="col-6"><span className="image fit"><img src={pic3} alt="" /></span></div>
						</div>
					</div>  
                    <h4>주차공간</h4>
					<div className="box alt">
						<div className="row gtr-50 gtr-uniform">
                        <div className="col-12"><span className="image fit"><img src={banner} alt="" /></span></div>
							<div className="col-6"><span className="image fit"><img src={pic1} alt="" /></span></div>
							<div className="col-6"><span className="image fit"><img src={pic2} alt="" /></span></div>
							<div className="col-6"><span className="image fit"><img src={pic3} alt="" /></span></div>
							<div className="col-6"><span className="image fit"><img src={pic3} alt="" /></span></div>
						</div>
					</div>                                          
				</section>
			</div>
		</section>
	</article>

</Layout>;

export default IndexPage;
