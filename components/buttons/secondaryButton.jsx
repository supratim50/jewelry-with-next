const SecondaryButton = ({ children, btnSize, textSize, active }) => {
  return (
    <a
      href="#"
      className={`btn btn-secondary paragraph-text ${btnSize ? btnSize : ""} ${
        textSize ? textSize : ""
      } ${active ? active : ""}`}
    >
      {children}
      <style jsx>{`
        .btn {
          border-radius: 20px !important;
          border: 1px solid #ee2d4f !important;
          -webkit-transition: all 0.5s;
          transition: all 0.5s;
        }

        .btn-big {
          padding: 14px 70px !important;
        }

        @media screen and (max-width: 567px) {
          .btn-big {
            padding: 12px 65px !important;
          }
        }

        .btn-small {
          padding: 7px 31px !important;
        }

        .btn-secondary {
          background-color: #fff !important;
          color: #ee2d4f !important;
          -webkit-box-shadow: 0px 1px 25px rgba(0, 0, 0, 0.05) !important;
          box-shadow: 0px 1px 25px rgba(0, 0, 0, 0.05) !important;
        }

         {
          /* small text */
        }
        .small-text {
          font-size: 10px !important;
        }

         {
          /* if btn is active */
        }
        .active {
          background-color: #ee2d4f !important;
          color: #fff !important;
        }
        .active:hover {
          background-color: #c92140 !important;
        }
      `}</style>
    </a>
  );
};

export default SecondaryButton;
