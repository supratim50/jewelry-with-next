const CardBody = ({ children, classList }) => {
  return (
    <div
      className={`detail-box p-3 px-3 mt-2 mt-md-4 w-100 bg-secondary rounded-lg shadow-sm ${
        classList && classList
      }`}
    >
      {children}
      <style jsx>{`
        .detail-box {
          width: 45%;
          min-height: 137px !important;
        }

        @media screen and (max-width: 575px) {
          .detail-box {
            min-height: 130px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CardBody;
