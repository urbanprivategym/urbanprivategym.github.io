module.exports = {
  siteTitle: 'URBAN PRIVATE GYM', // <title>
  manifestName: 'UP GYM',
  manifestShortName: 'Landing', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
  pathPrefix: `/gatsby-starter-spectral/`, // This path is subpath of your hosting https://domain/portfolio
  heading: 'Urban Private Gym',
  subHeading: '프라이빗한 공간에서 최고의 운동을 경험하다',
  // social
  socialLinks: [
    {
      style: 'brands',
      icon: 'fa-youtube',
      name: 'Youtube',
      url: 'https://www.youtube.com/channel/UCoKh_gwUQM6OgfuJvVSNs_Q',
    },
    {
      style: 'brands',
      icon: 'fa-instagram',
      name: 'Instagram',
      url: 'https://www.instagram.com/urbanprivategym/',
    },
    {
      style: 'solid',
      icon: 'fa-envelope',
      name: 'Email',
      url: 'mailto:urbanprivategym@naver.com',
    },
  ],

  //공지사항
  noticeList: [
    {
      title: "네이버 블로그 오픈",
      subTitle: "2021/03/26",
      content: "어반 프라이빗짐의 소식을 빠르고 쉽게 접할 수 있도록 네이버 블로그를 개설하였습니다. 많은 방문 부탁드려요 ^^ https://blog.naver.com/urbanprivategym"
    },
    {
      title: "오픈 예정일 안내",
      subTitle: "2021/03/01",
      content: "어반 프라이빗짐은 현재 인테리어 마무리와 기구 입고를 앞두고 있고, 더욱 완벽하게 오픈하기 위해서 베타테스트를 진행 할 예정입니다. 아마 오픈 시기는 4월 이 될 것 같습니다. 더욱 꼼꼼하게 준비해서 찾아 오겠습니다."
    }
  ]
};
