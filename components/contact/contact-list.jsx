import PropTypes from "prop-types";

const ContactList = ({ icon, text, classList }) => {
  return (
    <div
      className={`d-flex justify-content-start align-items-center ${classList}`}
    >
      <p className="heading contact-icon mb-0">{icon && icon}</p>
      <p className="paragraph-text-lg text-dark ml-4 mb-0">{text}</p>
      <style jsx>{`
        .contact-icon {
          font-size: 32px !important;
        }
        @media screen and (max-width: 575px) {
          .contact-icon {
            font-size: 20px !important;
          }
        }
      `}</style>
    </div>
  );
};

ContactList.propTypes = {
  text: PropTypes.string.isRequired,
};
export default ContactList;
