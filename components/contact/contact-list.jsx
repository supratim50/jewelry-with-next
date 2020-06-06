import PropTypes from "prop-types";

const ContactList = ({ icon, text, classList }) => {
  return (
    <div
      className={`d-flex justify-content-start align-items-center ${classList}`}
    >
      <p className="heading big-heading mb-0">{icon && icon}</p>
      <p className="paragraph-text-lg text-dark ml-4 mb-0">{text}</p>
    </div>
  );
};

ContactList.propTypes = {
  text: PropTypes.string.isRequired,
};
export default ContactList;
