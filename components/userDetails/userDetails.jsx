import CardBody from "../cards/cardBody";

const UserDetails = ({ children, catagory }) => {
  return (
    <>
      <div className="detail-heading py-1 py-2 w-100 d-flex justify-content-between align-items-center">
        <p className="paragraph-text-lg mb-0 font-weight-bold text-dark">
          {catagory}
        </p>
        <a
          href="#"
          className="details-change paragraph-text-lg font-weight-bold text-decoration-none"
        >
          Change
        </a>
      </div>
      <CardBody classList="d-flex flex-column align-items-start justify-content-center">
        {children}
      </CardBody>

      <style jsx>{`
        .detail-box {
          width: 45%;
          min-height: 137px !important;
        }

        @media acreen and (max-width: 575px) {
          .detail-box {
            min-height: 100px !important;
          }
        }

        .details-change {
          color: #ee2d4f !important;
        }

        .payment-icon {
          font-size: 35px !important;
        }
      `}</style>
    </>
  );
};

export default UserDetails;
