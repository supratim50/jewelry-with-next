import Heading from "../components/heading/heading";
import ContactList from "../components/contact/contact-list";
import Input from "../components/input/input";
import PrimaryButton from "../components/buttons/primaryButton";
import Textarea from "../components/input/textarea";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaLocationArrow,
} from "react-icons/fa";

const ContactPage = () => {
  return (
    <section className="contact-us">
      <div className="contact-box container p-2 p-md-4 pb-5 bg-secondary mb-5 rounded-lg">
        <div className="heading-box text-center mt-5">
          <Heading title="Contact Us" classList="big-heading" />
          <p className="paragraph-text-lg text-muted mt-3">
            We would love to hear from you!
          </p>
        </div>

        <div className="row mt-5 p-2 pt-5 w-100 mx-0">
          <div className="col-12 col-md-6 p-2 p-md-3 d-flex justify-content-center align-items-center">
            <div className="contact-img-box">
              <img
                src="/imgs/contact-us.svg"
                alt="Contsct Us Image"
                className="contact-img"
              />
            </div>
          </div>
          {/* contact list */}
          <div className="col-12 col-md-6 p-2 p-md-3 d-flex justify-content-center align-items-center">
            <div className="contact-list mt-5 pt-4 mt-md-0 pt-md-0">
              <ContactList
                icon={<FaPhoneAlt />}
                text="(205) 555-0100"
                classList="mb-4"
              />
              <ContactList
                icon={<FaEnvelope />}
                text="tiffany.dean@example.com"
                classList="mb-4"
              />
              <ContactList
                icon={<FaWhatsapp />}
                text="(205) 555-0100"
                classList="mb-4"
              />
              <ContactList
                icon={<FaLocationArrow />}
                text="Vermont 7183 Ash Dr undefined, Anaheim 25138"
              />
            </div>
          </div>
        </div>

        {/* contat form */}
        <div className="d-flex justify-content-center mt-5">
          <div className="input-main-box rounded-lg p-2 p-md-4 pt-5">
            <div className="input-box pt-4 mt-4">
              <form className="form-signin">
                <Input
                  type="text"
                  id="inputEmail"
                  placeholder="Email"
                  classList="mt-4"
                />
                <Input
                  type="password"
                  id="inputPassword"
                  placeholder="Password"
                  classList="mt-4"
                />
                <Textarea id="message" placeholder="Message" classList="mt-4" />
              </form>
            </div>
          </div>
        </div>
        <div className="text-center mt-3 mb-5 pb-5">
          <PrimaryButton btnSize="btn-big" classList="btn-radius">
            Submit
          </PrimaryButton>
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
          -radius: 10px;
          box-shadow: 0px 1px 25px rgba(0, 0, 0, 0.05);
        }

        @media screen and (max-width: 575px) {
          .contact-box {
            width: 95% !important;
          }
        }

        .contact-img-box {
          max-width: 390px;
        }
        .contact-img {
          max-width: 100% !important;
        }
        .contact-list {
          max-width: 390px;
        }

        .input-main-box {
          width: 95% !important;
          max-width: 470px;
        }
      `}</style>
    </section>
  );
};

export default ContactPage;
