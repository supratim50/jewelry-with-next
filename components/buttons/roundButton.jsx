const RoundButton = ({ children, classList }) => {
  return (
    <a
      href="#"
      className={`btn-round shadow-sm d-flex justify-content-center align-items-center text-decoration-none ${
        classList ? classList : ""
      }`}
    >
      {children}

      {/* {children} */}
      <style jsx>{`
        .primary {
          background-color: #ee2d4f !important;
          color: #fff !important;
        }

        .btn-round {
          padding: 5px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }

        @media screen and (max-width: 767px) {
          .btn-round {
            width: 30px;
            height: 30px;
          }
        }
      `}</style>
    </a>
  );
};

export default RoundButton;
