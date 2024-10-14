import React from 'react';
import './Features.css';

const features = [
  {
    title: 'Sed ut perspiciatis',
    description:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.',
  },
  {
    title: 'Lorem ipsum dolor',
    description:
      'Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  },
  {
    title: 'Nemo enim ipsam',
    description:
      'Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.',
  },
  {
    title: 'Tempor incididunt',
    description:
      'Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.',
  },
];

const FeatureSection = () => {
  return (
    <div className="feature-section">
      <h2>Snap photos and share like never before</h2>
      <div className="feature-cards">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <button className="learn-more-button">Learn more</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
