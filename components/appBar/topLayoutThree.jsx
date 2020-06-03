import Heading from "../heading/heading";
import ButtonPrimary from "../buttons/primaryButton";
import { FiTag } from "react-icons/fi";

const TopLayoutThree = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <Heading
          title="Check out"
          classList="heading-primary-lg text-capitalize"
        />
        <ButtonPrimary
          btnSize="btn-big btn-big-md"
          classList="paragraph-text-lg"
        >
          Confirm
        </ButtonPrimary>
      </div>

      {/* apply code */}
      <div className="mt-5">
        <a
          href="#"
          className="apply-promocode border-0 p-2 bg-primary-light paragraph-text mt-5 text-decoration-none"
        >
          Apply Promocode
          <i className="ml-2">
            <FiTag />
          </i>
        </a>
        {/* <p className="paragraph-text text-primary mb-0 mt-3">
          Flat $100 off during testing periods
        </p> */}
      </div>

      {/* <!-- heading --> */}
      {/* <!--============== order details ====================--> */}
      <div className="d-flex justify-content-between align-items-center mt-5">
        {/* <!-- details title --> */}
        <div className="details d-flex flex-column justify-content-between">
          <p className="paragraph-text text-muted font-weight-bold mb-0 text-capitalize">
            order
          </p>
          <p className="paragraph-text text-muted font-weight-bold mb-0 text-capitalize">
            delivery
          </p>
        </div>
        {/* <!-- details title end -->

            <!-- details value --> */}
        <div className="details d-flex flex-column justify-content-between">
          <p className="paragraph-text text-right text-dark font-weight-bold mb-0">
            $&nbsp;800.65
          </p>
          <p className="paragraph-text text-right text-dark font-weight-bold mb-0 text-capitalize">
            free
          </p>
        </div>
        {/* <!-- details value end --> */}
      </div>
      {/* <!--================ order details end =================--> */}
      {/* <!-- price --> */}
      <div className="d-flex justify-content-between align-items-center mt-4">
        <h1 className="heading heading-primary text-dark font-weight-bold mb-0">
          Summery :
        </h1>
        <h1 className="heading text-right heading-primary text-primary font-weight-bold mb-0">
          $&nbsp;800.65
        </h1>
      </div>
      {/* <!-- price end --> */}
      <style jsx>{`
        @media screen and (max-width: 567px) {
          .btn-big {
            padding: 10px 50px !important;
          }
        }

        .details {
          min-height: 60px;
        }

        .apply-promocode {
          border-radius: 15px;
          border: none !important;
          -webkit-transition: all 0.5s;
          transition: all 0.5s;
          color: #ee2d4f;
        }
      `}</style>
    </>
  );
};

export default TopLayoutThree;
