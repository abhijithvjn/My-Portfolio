// footerData.js
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const footerData = {
  data: {
    widget_type: 'Footer',
    data: {
      navigation: [
        { title: 'About', url: '#about' },
        { title: 'Projects', url: '#projects' },
        { title: 'Contact', url: '#contact' },
        { title: 'Blogs', url: '#blogs' }
      ],
      socialLinks: [
        { title: 'GitHub', url: 'https://github.com/abhijithvjn', icon: FaGithub },
        { title: 'LinkedIn', url: 'https://www.linkedin.com/in/abhijithvjn ', icon: FaLinkedin },
        { title: 'Instagram', url: 'https://instagram.com/abhijith_vjyn', icon: FaInstagram }
      ],
      contact: {
        line: 'Building fast, modern web experiences with React & Next.js.',
        email: 'abhijithvjn1999@gmail.com',
        phone: '+91 8086085370'
      },
      copyright: '© 2025. All rights reserved.'
    }
  }
};

export default footerData;
