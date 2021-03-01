import React from 'react';

import Layout from '../components/Layout';

import config from '../../config';

const IndexPage = () => <Layout>
	<article id="main">
		<header>
			<h2>공지사항</h2>
		</header>
		<section className="wrapper style5">
			<div className="inner">
                <section>
                    {
                        config.noticeList.map((value, index) => {
                            return (
                                <>
                                    <header>
                                        <h4>{value.title}</h4>
                                        <p>{value.subTitle}</p>
                                    </header>
                                    <p>{value.content}</p>
                                    <hr />
                                </>
                            )
                        })
                    }
                </section>
			</div>
		</section>
	</article>

</Layout>;

export default IndexPage;
