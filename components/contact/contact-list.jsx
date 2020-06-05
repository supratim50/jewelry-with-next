import PropTypes from "prop-types";

const ContactList = ({ icon, text }) => {
  return (
    <div className="d-flex justify-content-start align-items-center mb-4">
      <p className="heading big-headung mb-0">{icon && icon}</p>
      <p className="paragraph-text-lg text-dark ml-4 mb-0">{text}</p>
    </div>
  );
};

ContactList.propTypes = {
  text: PropTypes.string.isRequired,
};
export default ContactList;
