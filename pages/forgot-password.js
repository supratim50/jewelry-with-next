import Input from "../components/input/input";
import PrimaryButton from "../components/buttons/primaryButton";

const ForgotPassword = () => {
  return (
    <>
      <section
        className="sign-in mt-5 d-flex justify-content-center"
        id="sign-in"
      >
        <div className="input-main-box rounded-lg p-2 p-md-4 pt-5">
          <h2 className="big-heading font-weight-bold text-capitalize py-3">
            Forgot Password
          </h2>
          <div className="input-box mt-4 pt-4">
            <p className="paragraph-text">
              Please, enter your email address. You will receive a link to
              create a new password via email.
            </p>
            <form className="form-signin">
              <div className="form-label-group mb-2 error">
                <Input
                  type="password"
                  placeholder="Pasword"
                  id="inputPassword"
                  error
                />
                <p className="mb-0 mt-3 error-msg paragraph-text text-primary text-center">
                  Not a valid email address. Should be your@email.com
                </p>
              </div>
            </form>
          </div>
          {/* <!-- button --> */}
          <div className="text-center mt-5">
            <PrimaryButton btnSize="btn-big">Send</PrimaryButton>
          </div>
        </div>
        <style jsx>{`
          .input-main-box {
            width: 95% !important;
            max-width: 470px;
          }

          .error .form-control {
            border: 1px solid #ee2d4f !important;
          }

          .error .error-msg {
            display: block;
          }

          .error-msg {
            display: none;
          }
        `}</style>
      </section>
      {/* <!-- line svg --> */}
      <div className="line-svg position-absolute">
        <svg
          width="201"
          height="181"
          viewBox="0 0 201 181"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M204.9 162.914C150.511 36.7397 64.3758 121.231 16.2467 -10.7339"
            stroke="#EE2D4F"
            stroke-width="4"
            stroke-linecap="round"
          />
        </svg>
        <style jsx>
          {`
            .line-svg {
              top: 0;
              right: 0;
            }
          `}
        </style>
      </div>
    </>
  );
};

export default ForgotPassword;
