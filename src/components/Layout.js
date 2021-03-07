import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/sass/main.scss';
import Footer from './Footer';
import SideBar from './Sidebar';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPreloaded: true,
    };
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ isPreloaded: false });
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  render() {
    const { children, fullMenu } = this.props;
    const { isPreloaded } = this.state;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: '프라이빗한 공간에서 최고의 운동을 경험하다' },
                { name: 'og:description', content: '프라이빗한 공간에서 최고의 운동을 경험하다' },
                { name: 'og:keywords', content: '도곡동, 스트렝스, 운동, 헬스장, 파워리프팅짐, 어반프라이빗짐, urbanprivategym' },
                { name: 'og:image', content: 'https://postfiles.pstatic.net/MjAyMTAzMDFfMTY5/MDAxNjE0NTkxMjkwMTE2.qBSLH7EkIsc6ZKfGeYGsJGrNQ9KaCacgkQN702FquSwg.hEtNJFryZ8AdNuA2MrR8ge-R0YWYTCg6D-aoP0zI5Usg.PNG.dickings/UPGYM_TAG2.png?type=w773' },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <div
              className={
                isPreloaded
                  ? 'landing main-body is-preload'
                  : 'landing main-body'
              }
            >
              <div id="page-wrapper">
                <SideBar fullMenu={fullMenu} />
                {children}
                <Footer />
              </div>
            </div>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
