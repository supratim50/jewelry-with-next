import Link from "next/link";

import Input from "../components/input/input";
import PrimaryButton from "../components/buttons/primaryButton";
import SocialLoginIcon from "../components/socialLogin/socialLogin";
import AuthLayout from "../components/layouts/authLayout";

const SignInPage = () => {
  return (
    <>
      <section
        className="sign-in mt-5 d-flex justify-content-center"
        id="sign-in"
      >
        <div className="input-main-box rounded-lg p-2 p-md-4 pt-5">
          <h2 className="big-heading font-weight-bold text-capitalize py-3">
            Sign In
          </h2>
          <div className="input-box pt-4 mt-4">
            <form className="form-signin">
              <Input type="text" id="inputEmail" placeholder="Email" />
              <Input
                type="password"
                id="inputPassword"
                placeholder="Password"
              />
            </form>
          </div>
          {/* <!-- forgot pasword --> */}
          <div className="forget-password text-right">
            <Link href="/forgot-password">
              <a className="mb-0 mt-3 text-decoration-none paragraph-text text-dark">
                Forgot Your Password ? &nbsp;
                <i className="text-primary">&rarr;</i>
              </a>
            </Link>
          </div>
          {/* <!-- button --> */}
          <div className="text-center mt-5">
            <PrimaryButton btnSize="btn-big">Sign In</PrimaryButton>
          </div>
          {/* <!-- signup with social --> */}
          <div className="mt-5 mx-auto p-3">
            <p className="paragraph-text text-center text-dark">
              Or sign in with social account
            </p>
            <div className="w-75 mt-4 mx-auto d-flex justify-content-around align-items-center">
              <SocialLoginIcon imageURL="/imgs/Google.png" alt="Goolge Icon" />
              <SocialLoginIcon imageURL="/imgs/FB.png" alt="Facebook Icon" />
            </div>
          </div>
        </div>
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
        </div>
        <style jsx>
          {`
            .input-main-box {
              width: 95% !important;
              max-width: 470px;
            }
            .line-svg {
              top: 0;
              right: 0;
            }
          `}
        </style>
      </section>
    </>
  );
};

SignInPage.Layout = AuthLayout;
export default SignInPage;
