import Heading from "../heading/heading";
import ButtonPrimary from "../buttons/primaryButton";

const TopLayoutThree = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <Heading
          title="My Cart"
          classList="heading-primary-lg text-capitalize"
        />
        <ButtonPrimary
          btnSize="btn-big btn-big-md"
          classList="paragraph-text-lg"
        >
          Check Out
        </ButtonPrimary>
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
      `}</style>
    </>
  );
};

export default TopLayoutThree;
