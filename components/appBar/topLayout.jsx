const TopLayout = () => {
  return (
    <div className="selector-box px-md-3 py-3 d-flex justify-content-center align-items-center">
      <a
        href="#"
        className="selector paragraph-text active text-decoration-none text-dark mr-1"
      >
        Delivered
      </a>
      <a
        href="#"
        className="selector paragraph-text text-decoration-none text-dark mr-1"
      >
        Processing
      </a>
      <a
        href="#"
        className="selector paragraph-text text-decoration-none text-dark"
      >
        Cancelled
      </a>
      <style jsx>{`
        .selector-box .selector {
          border-radius: 20px !important;
          border: none !important;
          padding: 7px 31px !important;
        }

        @media screen and (max-width: 991px) {
          .selector-box .selector {
            padding: 5px 15px !important;
          }
        }

        .selector-box .active {
          background-color: #373737 !important;
          color: #fff !important;
        }
      `}</style>
    </div>
  );
};

export default TopLayout;
