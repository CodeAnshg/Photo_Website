import React from 'react';
import './PhotoFeature.css';
import image from "../assets/pexels-pixabay-290275.jpg"
const PhotoFeatureSection = () => {
  return (
    <div className="photo-feature-section">
      <div className="text-container">
        <div className='text'>
        <h2>Have you ever posted any photo on social media?</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
        </div>

        <div className="features">
          <div className="feature-item">
            <h3>Raju</h3>
            <p>
              <span className="highlight">Sed ut perspiciatis</span> - Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.
            </p>
          </div>
          <div className="feature-item">
            <h3>Lorem ipsum dolor</h3>
            <p>Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="feature-item">
            <h3>Nemo enim ipsam</h3>
            <p>Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</p>
          </div>
        </div>
      </div>

      <div className="image-container">
        <img
          src={image}
          alt="Building"
          className="feature-image"
        />
      </div>
    </div>
  );
};

export default PhotoFeatureSection;
