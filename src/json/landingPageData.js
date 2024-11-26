/* eslint-disable import/extensions */

// Services Img Imports
import Web from '../assets/images/Services/Web.png';
import Mobile from '../assets/images/Services/Mobile.png';
import UIUX from '../assets/images/Services/Design.png';

// Portfolio Img Imports
import Freelance from '../assets/images/Portfolio/Freelance.png';
// import Aura from '../assets/images/Portfolio/Aura.png';
// import Surtido from '../assets/images/Portfolio/Surtido.png';
// import ManagementApp from '../assets/images/Portfolio/ManagementApp.png';
import byebeo from '../assets/images/Portfolio/bybe_beo.png';
import video from '../assets/images/Portfolio/video.jpg';
// import Freelance from '../assets/images/Portfolio/Freelance.png';
// Advantages
import Communicative from '../assets/images/Advantages/Communicative.png';
import Collaborative from '../assets/images/Advantages/Collaborative.png';
import Management from '../assets/images/Advantages/Management.png';
import Favorite from '../assets/images/Advantages/Favorite.png';

// Testimonials
import Sasha from '../assets/images/Testimonials/s1.jpg';
import Reiner from '../assets/images/Testimonials/s2.jpg';
import Kruger from '../assets/images/Testimonials/s3.jpg';

// TeamMembers
// import CEO from '../assets/images/TeamMembers/CEO.jpg';
// import HRD from '../assets/images/TeamMembers/HRD.jpg';

import gai1 from '../assets/images/TeamMembers/gai_1.jpg';
import gai2 from '../assets/images/TeamMembers/gai_2.jpg';
import namgd from '../assets/images/TeamMembers/nam_gd.jpg';
import nam1 from '../assets/images/TeamMembers/nam1.jpg';

// import Finance from '../assets/images/TeamMembers/Finance.jpg';
// import ProjectManager from '../assets/images/TeamMembers/Project-manager.jpg';
// import Frontend1 from '../assets/images/TeamMembers/Frontend1.jpg';
// import Frontend2 from '../assets/images/TeamMembers/Frontend2.jpg';
// import Backend1 from '../assets/images/TeamMembers/Backend1.jpg';
// import Backend2 from '../assets/images/TeamMembers/Backend2.jpg';
// import Mobile1 from '../assets/images/TeamMembers/Mobile1.jpg';
// import Mobile2 from '../assets/images/TeamMembers/Mobile2.jpg';
// import UIUX1 from '../assets/images/TeamMembers/UIUX1.jpg';
// import UIUX2 from '../assets/images/TeamMembers/UIUX2.jpg';

export const Services = [
  {
    title: 'Quảng cáo trực tuyến',
    imageUrl: Web,
    animation: 'left',
  },
  {
    title: 'Quảng cáo truyền thống',
    imageUrl: Mobile,
    animation: 'up',
  },
  {
    title: 'Tư vấn quảng cáo',
    imageUrl: UIUX,
    animation: 'right',
  },
];

export const Portfolios = [
  {
    id: 'asd1293uasdads1',
    title: 'Bye Béo',
    imageUrl: byebeo,
    type: 'Quảng Cáo',
    responsibility: [
      'Mobile Development',
      'UI/UX Design',
    ],
    credit: '',
  },
  {
    id: 'asd1293uhjkhkjh2',
    title: 'Star Media',
    imageUrl: video,
    type: 'Video Ads',
    responsibility: [
      'Mobile Development',
      'UI/UX Design',
    ],
    credit: '',
  },
  {
    id: 'asd1293uvbvcbbd3',
    title: 'Quang Thọ Auto',
    imageUrl: Freelance,
    type: 'Tư Vấn',
    responsibility: [
      'Mobile Development',
      'UI/UX Design',
    ],
    credit: '',
  },
  // {
  //   id: 'asd1293ufgdfgs4',
  //   title: 'Aura',
  //   imageUrl: Aura,
  //   type: 'Website',
  //   responsibility: [
  //     'Web Development',
  //     'UI/UX Design',
  //   ],
  //   credit: '',
  // },
  // {
  //   id: 'asd1293ulskmnb5',
  //   title: 'Surtido Rico',
  //   imageUrl: Surtido,
  //   type: 'Website',
  //   responsibility: [
  //     'Web Development',
  //     'UI/UX Design',
  //   ],
  //   credit: '',
  // },
  // {
  //   id: 'asd1293ulkmnbj6',
  //   title: 'Courses Management',
  //   imageUrl: ManagementApp,
  //   type: 'Website',
  //   responsibility: [
  //     'Web Development',
  //     'UI/UX Design',
  //   ],
  //   credit: '',
  // },
];

export const Advantages = [
  [{
    title: 'Giao Tiếp',
    description: 'Chúng tôi giao tiếp rõ ràng về ý tưởng và tiến độ dự án để mọi thứ luôn minh bạch.',
    imageUrl: Communicative,
  },
  {
    title: 'Quản Lý',
    description: 'Chúng tôi quản lý dự án một cách chặt chẽ để đảm bảo dự án hoàn thành xuất sắc.',
    imageUrl: Management,
  }],
  [{
    title: 'Team Work',
    description: 'Đội ngũ của chúng tôi làm việc rất đoàn kết để hoàn thành dự án một cách xuất sắc.',
    imageUrl: Collaborative,
  },
  {
    title: 'Yêu Thích',
    description: "Chúng tôi đã thực hiện rất nhiều dự án và tất cả khách hàng của chúng tôi đều yêu thích chúng",
    imageUrl: Favorite,
  }],
];
export const Testimonials = [
  {
    id: 1,
    name: 'Hoàng Minh Trí',
    company: '',
    testimoni: 'Dịch vụ quảng cáo của DAMARA thật tuyệt vời, giúp doanh nghiệp tôi tiếp cận nhiều khách hàng hơn. Tôi rất hài lòng với sự chuyên nghiệp của họ!',
    imageUrl: Sasha,
  },
  {
    id: 2,
    name: 'Nguyễn Ngọc Lan',
    company: '',
    testimoni: 'Cảm ơn các bạn đã mang đến thành công cho sản phẩm của chúng tôi',
    imageUrl: Kruger,
  },
  {
    id: 3,
    name: 'Hoàng Nguyễn',
    company: '',
    testimoni: 'Tư vấn nhiệt tình, nhân viên thân thiện',
    imageUrl: Reiner,
  },
];

export const TeamMembers = [
  {
    name: 'Nguyễn Thanh Tùng',
    position: 'CEO',
    imageUrl: namgd,
  },
  {
    name: 'Hoàng Thu Phương',
    position: 'Trưởng Phòng Sale',
    imageUrl: gai1,
  },
  {
    name: 'Mai Ngọc Nhi',
    position: 'Trưởng Phòng Marketing',
    imageUrl: gai2,
  },
  {
    name: 'Nguyễn Văn Hoàn',
    position: 'Leader Marketing',
    imageUrl: nam1,
  },
];
