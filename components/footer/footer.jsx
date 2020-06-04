import Link from "next/link";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container py-4">
        <div className="row">
          <div className="col-12 col-md-6 border-right">
            <div className="row">
              {/* <!-- links  --> */}
              <div className="col-6 col-md-3 mt-3 mt-md-0">
                <p className="paragraph-text-lg font-weight-bold text-dark-grey">
                  About
                </p>
                <ul className="list-unstyled">
                  <li className="mb-md-1">
                    <Link href="/about-us">
                      <a className="text-decoration-none text-secondary paragraph-text">
                        About Us
                      </a>
                    </Link>
                  </li>
                  <li className="mb-md-1">
                    <Link href="#">
                      <a className="text-decoration-none text-secondary paragraph-text">
                        Contact Us
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-3 mt-3 mt-md-0">
                <p className="paragraph-text-lg font-weight-bold text-dark-grey">
                  Help
                </p>
                <ul className="list-unstyled">
                  <li className="mb-md-1">
                    <Link href="#">
                      <a className="text-decoration-none text-secondary paragraph-text">
                        Shipping
                      </a>
                    </Link>
                  </li>
                  <li className="mb-md-1">
                    <Link href="#">
                      <a className="text-decoration-none text-secondary paragraph-text">
                        Payments
                      </a>
                    </Link>
                  </li>
                  <li className="mb-md-1">
                    <Link href="#">
                      <a className="text-decoration-none text-secondary paragraph-text">
                        Cancellation
                      </a>
                    </Link>
                  </li>
                  <li className="mb-md-1">
                    <Link href="#">
                      <a className="text-decoration-none text-secondary paragraph-text">
                        FAQ's
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-3 mt-3 mt-md-0">
                <p className="paragraph-text-lg font-weight-bold text-dark-grey">
                  Policy
                </p>
                <ul className="list-unstyled">
                  <li className="mb-md-1">
                    <Link href="#">
                      <a className="text-decoration-none text-secondary paragraph-text">
                        Return Policy
                      </a>
                    </Link>
                  </li>
                  <li className="mb-md-1">
                    <Link href="#">
                      <a className="text-decoration-none text-secondary paragraph-text">
                        Terms Of Use
                      </a>
                    </Link>
                  </li>
                  <li className="mb-md-1">
                    <Link href="#">
                      <a className="text-decoration-none text-secondary paragraph-text">
                        Security
                      </a>
                    </Link>
                  </li>
                  <li className="mb-md-1">
                    <Link href="#">
                      <a className="text-decoration-none text-secondary paragraph-text">
                        Privacy
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-3 mt-3 mt-md-0">
                <p className="paragraph-text-lg font-weight-bold text-dark-grey">
                  Social
                </p>
                <ul className="list-unstyled">
                  <li className="mb-md-1">
                    <Link href="#">
                      <a className="text-decoration-none text-secondary paragraph-text">
                        Facebook
                      </a>
                    </Link>
                  </li>
                  <li className="mb-md-1">
                    <Link href="#">
                      <a className="text-decoration-none text-secondary paragraph-text">
                        Twitter
                      </a>
                    </Link>
                  </li>
                  <li className="mb-md-1">
                    <Link href="#">
                      <a className="text-decoration-none text-secondary paragraph-text">
                        YouTube
                      </a>
                    </Link>
                  </li>
                  <li className="mb-md-1">
                    <Link href="#">
                      <a className="text-decoration-none text-secondary paragraph-text">
                        Instagram
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="row">
              {/* <!-- details --> */}
              <div className="col-12 col-md-5 offset-md-1 paragraph-text mt-3 mt-md-0">
                <p className="paragraph-text-lg font-weight-bold text-dark-grey">
                  Home
                </p>
                <p className="paragraph-text text-secondary">
                  Flipkart Internet Private Limited, Buildings Alyssa, Begonia &
                  Clove Embassy Tech Village, Outer Ring Road,
                  Devarabeesanahalli Village, Bengaluru, 560103, Karnataka,
                  India
                </p>
              </div>
              <div className="col-12 col-md-5 offset-md-1 paragraph-text mt-3 mt-md-0">
                <p className="paragraph-text-lg font-weight-bold text-dark-grey">
                  Home
                </p>
                <p className="paragraph-text text-secondary">
                  Flipkart Internet Private Limited, Buildings Alyssa, Begonia &
                  Clove Embassy Tech Village, Outer Ring Road,
                  Devarabeesanahalli Village, Bengaluru, 560103, Karnataka,
                  India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        #footer {
          background-color: #303444;
          margin-top: 100px !important;
        }

        #footer > .container {
          max-width: 92% !important;
        }

        @media screen and (max-width: 767px) {
          #footer .border-right {
            border-right: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Footer;
