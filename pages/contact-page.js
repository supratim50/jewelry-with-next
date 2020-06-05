import Heading from "../components/heading/heading";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaLocationArrow,
} from "react-icons/fa";

const ContactPage = () => {
  return (
    <section className="contact-us">
      <div className="contact-box container p-2 p-md-4 pb-5 bg-secondary mb-5">
        <div className="heading-box text-center mt-5">
          <Heading title="Contact Us" classList="big-heading" />
          <p className="paragraph-text-lg text-muted mt-4">
            We would love to hear from you!
          </p>
        </div>

        <div className="row border">
          <div className="col-12 col-md-6 p-2 p-md-3 border d-flex justify-content-center align-items-center">
            <div className="contact-img-box">
              <img
                src="/imgs/contact-us.svg"
                alt="Contsct Us Image"
                className="contact-img"
              />
            </div>
          </div>
          <div className="col-12 col-md-6 p-2 p-md-3 border">
            <div className="d-flex justify-content-start align-items-center">
              <p className="heading big-headung">
                <FaPhoneAlt />
              </p>
              <p className="paragraph-text-lg text-dark ml-3 mb-0">
                (205) 555-0100
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .contact-us {
          margin-top: 50px;
        }
        @media screen and (max-width: 767px) {
          .contact-us {
            margin-top: 20px;
          }
        }

        .contact-box {
          border-radius: 10px;
          box-shadow: 0px 1px 25px rgba(0, 0, 0, 0.05);
        }

        .contact-img-box {
          max-width: 368px;
        }
        .contact-img {
          width: 100% !important;
        }
      `}</style>
    </section>
  );
};

export default ContactPage;
