const CardBodyTwo = ({ title, details, dark }) => {
  return (
    <div
      className={`detail-box p-3 p-md-4 w-100 bg-secondary d-flex flex-column align-items-start justify-content-center ${
        dark ? "dark" : ""
      }`}
    >
      <p
        className={`paragraph-text-lg font-weight-bold mb-2 ${
          dark ? "text-secondary" : "text-dark"
        }`}
      >
        {title && title}
      </p>
      <p
        className={`paragraph-text mb-0 ${
          dark ? "text-dark-grey" : "text-muted"
        }`}
      >
        {details && details}
      </p>

      <style jsx>{`
        .detail-box {
          border-radius: 10px;
          box-shadow: 0px 1px 25px rgba(0, 0, 0, 0.05);
        }
        .dark {
          background-color: #414141 !important;
        }
      `}</style>
    </div>
  );
};

export default CardBodyTwo;
