const Tag = ({ active }) => {
  return (
    <div
      className={`tag ${
        active ? "active" : null
      } bg-light-grey font-weight-bold py-2 py-md-3 px-2 px-md-4 d-flex justify-content-center align-items-center mr-4`}
    >
      <p className="paragraph-text mb-0">Tag 1</p>
      <a
        href="#"
        className="cross paragraph-text mb-0 ml-3 text-decoration-none"
      >
        x
      </a>
      <style jsx>{`
        .tag {
          border-radius: 8px !important;
        }

        @media screen and (max-width: 767px) {
          .tag {
            min-width: 65px;
          }
        }

        .tag > .cross {
          display: none;
          color: #fff !important;
        }

        .active {
          background-color: #ee2d4f !important;
          color: #fff !important;
        }

        @media screen and (max-width: 767px) {
          .active {
            min-width: 81px;
          }
        }

        .active > .cross {
          display: block;
        }
      `}</style>
    </div>
  );
};

export default Tag;
