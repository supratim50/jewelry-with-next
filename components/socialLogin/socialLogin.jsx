import React from "react";

const SocialLogin = ({ imageURL, alt }) => {
  return (
    <a href="#">
      <div className="social-icon shadow-sm">
        <img src={imageURL} className="social-img" alt={alt} />
      </div>
      <style jsx>{`
        .social-icon {
          background-color: #fff;
          padding: 15px 30px;
          border-radius: 24px;
        }

        .social-img {
          max-width: 25px;
        }
      `}</style>
    </a>
  );
};

export default SocialLogin;
