import React from 'react';
import Slider from 'react-slick';
import { FaCode, FaServer, FaShieldAlt } from 'react-icons/fa';
import { IconType } from 'react-icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './services.css';

interface CardProps {
  title: string;
  Icon: IconType;
  description: string;
  items: string[];
}

const Card: React.FC<CardProps> = ({ title, Icon, description, items }) => (
  <div className="p-3 md:p-5">
    <div className="card-container bg-white bg-opacity-30 p-2 shadow-md rounded-lg overflow-hidden border">
      <div className="flex justify-center mt-4">
        <Icon className="text-6xl text-pink-500" />
      </div>
      <div className="p-4 text-center">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="mb-4">{description}</p>
        <ul className="list-disc list-inside text-left">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const Services: React.FC = () => {
  const cards: CardProps[] = [
    {
      title: 'Frontend Development',
      Icon: FaCode,
      description: 'Building interactive and responsive user interfaces.',
      items: ['HTML/CSS', 'JavaScript', 'React'],
    },
    {
      title: 'Backend Development',
      Icon: FaServer,
      description: 'Handling server-side logic and database management.',
      items: ['Node.js', 'Express', 'MongoDB'],
    },
    {
      title: 'Cybersecurity',
      Icon: FaShieldAlt,
      description: 'Protecting systems and networks from digital attacks.',
      items: ['Network Security', 'Encryption', 'Penetration Testing'],
    },
  ];

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-black py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-white mb-8">What I Am Great At</h1>
        <Slider {...settings}>
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Services;
