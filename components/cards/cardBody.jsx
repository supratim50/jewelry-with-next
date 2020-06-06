const CardBody = ({ children, classList, bgSmHidden }) => {
  return (
    <div
      className={`detail-box p-md-4 py-2 mt-2 mt-md-4 w-100 bg-secondary rounded-lg ${
        classList ? classList : ""
      } ${bgSmHidden ? "bg-hidden" : ""}`}
    >
      {children}
      <style jsx>{`
        .detail-box {
          width: 45%;
          min-height: 137px !important;
          box-shadow: 0px 1px 25px rgba(0, 0, 0, 0.05);
        }

        .radius-medium {
          border-radius: 10px !important;
        }

        @media screen and (max-width: 576px) {
          .bg-hidden {
            background-color: #fcfcfc !important;
          }
        }

        @media screen and (max-width: 575px) {
          .detail-box {
            min-height: 108px !important;
            box-shadow: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CardBody;
