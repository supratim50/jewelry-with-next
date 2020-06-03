import { useState } from "react";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";

import SecondaryButton from "../Buttons/secondaryButton";

const ProductDeatilsCard = () => {
  // for open and close the hidden data
  const [open, setOpen] = useState(false);

  const openOrderDetails = () => {
    setOpen(!open);
  };

  return (
    <div className="p-md-4 p-2 mt-4 mt-md-5 bg-secondary shadow-sm rounded-lg product-box">
      {/* <!-- subbox 1 =--> */}
      <div className="order-sub-box p-2 d-flex justify-content-between align-items-center">
        {/* <!-- order details --> */}
        <div className="order-details d-flex flex-column justify-content-start">
          <h1 className="heading heading-primary text-dark mb-2 text-truncate">
            Order No #947034
          </h1>
          <p className="paragraph-text text-muted mb-0">
            Quantity : &nbsp;
            <span className="text-dark paragraph-text-lg font-weight-bold">
              3
            </span>
          </p>
          <div className="mt-auto">
            <SecondaryButton>Reorder</SecondaryButton>
          </div>
        </div>
        {/* <!-- order details end -->
        <!-- order pricing --> */}
        <div className="order-pricing d-flex flex-column justify-content-start">
          <h1 className="paragraph-text text-muted text-right mb-2">
            05-12-2019
          </h1>
          <p className="paragraph-text text-muted text-right mb-0">
            Total Amount : &nbsp;
            <span className="text-dark paragraph-text-lg font-weight-bold">
              $&nbsp;700
            </span>
          </p>
          {/* <!-- collaps button --> */}
          <div className="mt-auto text-right">
            <a className="btn shadow-none" onClick={openOrderDetails}>
              <i className=" paragraph-text-lg text-dark">
                {open ? <FiArrowUp /> : <FiArrowDown />}
              </i>
            </a>
          </div>
        </div>
        {/* <!-- order pricing end --> */}
      </div>
      {/* <!-- subbox 1 end -->
      <!-- ///////////////////////////////////////////////////////////// --> */}
      <div id="hidden-data" className={open && "open"}>
        {open && (
          <div>
            {/* <!-- subbox 2 --> */}
            <hr />
            <div className="order-sub-box p-2 py-md-4">
              {/* <!-- order details -->
          <!-- 1st row --> */}
              <div className="d-flex justify-content-between">
                <h1 className="text-green paragraph-text-lg font-weight-bold mb-3">
                  Delivered
                </h1>
                <h1 className="paragraph-text text-green text-right mb-3">
                  05-12-2019
                </h1>
              </div>
              {/* <!-- 1st row end--> */}
              <div>
                <p className="text-dark paragraph-text-lg font-weight-bold mb-2">
                  Shipping data
                </p>
                <p className="text-dark paragraph-text text-muted mb-0 text-truncate">
                  3 Newbridge Court, Chino Hills, CA 91709, US Chino Hills, CA
                  91709, US Chino Hills, CA 91709, US
                </p>
                <p className="text-dark paragraph-text text-muted mt-4 mb-0 text-truncate">
                  Promo :
                  <span className="text-dark paragraph-text-lg font-weight-bold">
                    test1d, Flat $100 off during testing period
                  </span>
                </p>
              </div>
              {/* <!-- order details end --> */}
            </div>
            {/* <!-- subbox 2 end --> */}
            {/* <!-- subbox 3 --> */}
            <hr />
            <div className="order-sub-box p-2 py-md-4">
              <p className="paragraph-text text-muted mb-3">
                Items : &nbsp;
                <span className="text-dark paragraph-text-lg font-weight-bold">
                  3
                </span>
              </p>
              {/* <!-- 1st item --> */}
              <div className="d-flex justify-content-between align-items-center mb-2">
                <div className="py-2 w-50 mb-1">
                  <p className="text-dark paragraph-text font-weight-bold mb-2 text-truncate">
                    Metal Rhodium Bracelet
                  </p>
                  <p className="paragraph-text text-muted mb-0">
                    Quantity : &nbsp;
                    <span className="text-dark paragraph-text font-weight-bold">
                      3
                    </span>
                  </p>
                </div>
                <p className="paragraph-text-lg font-weight-bold text-primary mb-0">
                  $&nbsp;11.27
                </p>
              </div>
              {/* <!-- 1st item end --> */}
              {/* <!-- 2nd item --> */}
              <div className="d-flex justify-content-between align-items-center mb-2">
                <div className="py-2 w-50">
                  <p className="text-dark paragraph-text font-weight-bold mb-2 text-truncate">
                    Metal Rhodium Bracelet
                  </p>
                  <p className="paragraph-text text-muted mb-0">
                    Quantity : &nbsp;
                    <span className="text-dark paragraph-text font-weight-bold">
                      3
                    </span>
                  </p>
                </div>
                <p className="paragraph-text-lg font-weight-bold text-primary mb-0">
                  $&nbsp;11.27
                </p>
              </div>
              {/* <!-- 2nd item end --> */}
              {/* <!-- 3rd item --> */}
              <div className="d-flex justify-content-between align-items-center mb-2">
                <div className="py-2 w-50">
                  <p className="text-dark paragraph-text font-weight-bold mb-2 text-truncate">
                    Metal Rhodium Bracelet
                  </p>
                  <p className="paragraph-text text-muted mb-0">
                    Quantity : &nbsp;
                    <span className="text-dark paragraph-text font-weight-bold">
                      3
                    </span>
                  </p>
                </div>
                <p className="paragraph-text-lg font-weight-bold text-primary mb-0">
                  $&nbsp;11.27
                </p>
              </div>
              {/* <!-- 3rd item end --> */}
            </div>
            {/* <!-- subbox 3 end --> */}
          </div>
        )}
      </div>
      <style jsx>{`
        .product-box {
          transition: 0.5s !important;
        }
        #hidden-data {
          visibility: hidden;
          transition: 0.5s !important;
        }
        .open {
          visibility: visible !important;
          transition: 0.5s !important;
        }
         {
          /* hidden details end */
        }
        @media screen and (max-width: 491px) {
          .order-sub-box .paragraph-text-lg,
          .order-sub-box .heading-primary {
            font-size: 14px !important;
          }
        }

        @media screen and (max-width: 491px) {
          .order-sub-box .paragraph-text {
            font-size: 12px !important;
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

export default ProductDeatilsCard;
