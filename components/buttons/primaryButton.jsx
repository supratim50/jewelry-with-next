const PrimaryButton = ({ children, btnSize, classList }) => {
  return (
    <>
      <div
        className={`btn btn-primary ${btnSize && btnSize} ${
          classList && classList
        }`}
      >
        {children}
      </div>
      <style jsx>
        {`
          .btn {
            border-radius: 10px !important;
            border: none !important;
            -webkit-transition: all 0.5s;
            transition: all 0.5s;
          }
          .btn-big {
            padding: 14px 70px !important;
          }
          .btn-medium {
            padding: 14px 63px !important;
          }

          @media screen and (max-width: 567px) {
            .btn-big {
              padding: 12px 65px !important;
            }
            .btn-big-md {
              padding: 10px 50px !important;
            }
          }

          .btn-small {
            padding: 7px 31px !important;
          }

          .btn-primary {
            background-color: #ee2d4f !important;
            color: #fff;
            -webkit-box-shadow: 0px 3px 10px rgba(238, 45, 79, 0.3) !important;
            box-shadow: 0px 3px 10px rgba(238, 45, 79, 0.3) !important;
          }

          .btn-primary:hover {
            background-color: #c92140 !important;
          }

          .btn-radius {
            border-radius: 34px !important;
          }
        `}
      </style>
    </>
  );
};

export default PrimaryButton;
