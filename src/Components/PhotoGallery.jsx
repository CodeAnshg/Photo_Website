import React from 'react';
import './PhotoGallery.css';

const PhotoGallery = () => {
  const features = [
    {
      title: 'Sed ut perspiciatis',
      description:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.',
      imageUrl: 'https://i.ibb.co/nwGc3HN/example-image.jpg',
    },
    {
      title: 'Lorem ipsum dolor',
      description:
        'Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
      imageUrl: 'https://i.ibb.co/PmP9mVs/sample.jpg',
    },
    {
      title: 'Nemo enim ipsam',
      description:
        'Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
      imageUrl: 'https://i.ibb.co/Tr9q3wY/sample.jpg',
    },
  ];

  return (
    <div className="gallery-section">
      <h2>Make your photos more stylish</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>

      <div className="card-container">
        {features.map((feature, index) => (
          <div key={index} className="card">
            <img
              src={feature.imageUrl}
              alt={feature.title}
              className="card-image"
            />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
