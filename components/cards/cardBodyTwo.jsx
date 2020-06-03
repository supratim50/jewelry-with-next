const CardBodyTwo = ({ title, details, dark }) => {
  return (
    <div
      className={`detail-box p-3 p-md-4 w-100 bg-secondary shadow-sm d-flex flex-column align-items-start justify-content-center ${
        dark ? "dark" : ""
      }`}
    >
      <p
        className={`paragraph-text-lg font-weight-bold mb-3 ${
          dark ? "text-secondary" : "text-dark"
        }`}
      >
        {title}
      </p>
      <p
        className={`paragraph-text mb-0 ${
          dark ? "text-dark-grey" : "text-muted"
        }`}
      >
        {details}
      </p>

      <style jsx>{`
        .detail-box {
          border-radius: 10px;
        }
        .dark {
          background-color: #414141 !important;
        }
      `}</style>
    </div>
  );
};

export default CardBodyTwo;
