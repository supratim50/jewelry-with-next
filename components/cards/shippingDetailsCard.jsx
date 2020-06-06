// import PropTypes from "prop-types";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import ButtonSecondary from "../buttons/secondaryButton";
import RoundButton from "../buttons/roundButton";

const ShippingDetails = () => {
  return (
    <div className="p-md-3 p-2 mt-4 mt-md-5 bg-secondary shadow-sm rounded-lg">
      {/* <!--====================== subbox 1 =======================--> */}
      <div className="order-sub-box p-2 d-flex justify-content-between align-items-center">
        {/* <!-- order details --> */}
        <div className="order-details d-flex flex-column justify-content-start">
          <h1 className="heading heading-primary text-dark mb-2 text-truncate">
            John Doe
          </h1>
          <p className="paragraph-text-lg text-dark mb-2">
            ****&nbsp;****&nbsp;****&nbsp;1234
          </p>
          <p className="paragraph-text text-muted mb-0">Expiry: 08/24</p>
          <div className="mt-auto">
            <ButtonSecondary
              classList="radius"
              btnSize="btn-small"
              textSize="small-text"
            >
              Set as primary address
            </ButtonSecondary>
          </div>
        </div>
        {/* <!-- order details end -->
              <!-- order pricing --> */}
        <div className="order-pricing d-flex flex-column justify-content-between">
          <div className="text-right">
            {/* <!-- edit btn --> */}
            <RoundButton classList="mr-3 mr-md-0">
              <i className="text-primary paragraph-text-lg">
                <FiEdit />
              </i>
            </RoundButton>
          </div>

          <div className="text-right">
            {/* <!-- delete btn --> */}
            <RoundButton classList="mr-3 mr-md-0">
              <i className="text-dark paragraph-text-lg">
                <FiTrash2 />
              </i>
            </RoundButton>
          </div>
        </div>
        {/* <!-- order pricing end --> */}
      </div>
      <style jsx>{`
        .paragraph-text {
          font-size: 10px !important;
        }

        @media screen and (max-width: 491px) {
          .order-sub-box .paragraph-text-lg,
          .order-sub-box .heading-primary {
            font-size: 14px !important;
          }
        }

        .order-details {
          max-width: 50%;
          min-height: 170px !important;
        }

        @media screen and (max-width: 767px) {
          .order-details {
            min-height: 140px !important;
          }
        }

        .order-pricing {
          max-width: 50%;
          min-height: 170px;
        }

        @media screen and (max-width: 767px) {
          .order-pricing {
            min-height: 140px !important;
          }
        }
      `}</style>
    </div>
  );
};

// ShippingDetails.prototype = {
//   name: PropTypes.string.isRequired,
// };
export default ShippingDetails;
