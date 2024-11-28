import React, { useEffect, useRef } from 'react';
import '../styles/landing.css';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  useEffect(() => {
    if (localStorage.getItem('usertype') === 'freelancer') {
      navigate('/freelancer');
    } else if (localStorage.getItem('usertype') === 'client') {
      navigate('/client');
    } else if (localStorage.getItem('usertype') === 'admin') {
      navigate('/admin');
    }

    // Delay video playback by 20 seconds
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 3000); // 15 seconds

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, [navigate]);

  return (
    <div className="landing-page">
      <div className="landing-hero">
        {/* Background video */}
        <video
          ref={videoRef}
          className="background-video"
          muted
          loop
          preload="auto"
        >
          <source src="/design/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="landing-nav">
          <h2>ExpertEase</h2>
          <button onClick={() => navigate('/authenticate')}>Sign In</button>
        </div>

        <div className="landing-hero-text">
          <h1>Connecting Talents, Building Futures</h1>
          <p>
          Step into the Future of Freelancing with ExpertEase. Unlock a world of boundless opportunity, where your talent meets unmatched growth. Whether you're a freelancer or a business, ExpertEase is your trusted platform for innovative collaboration.
          </p>
          <button onClick={() => navigate('/authenticate')}>Join Now</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
