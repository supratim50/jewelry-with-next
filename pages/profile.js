import { FiEdit } from "react-icons/fi";
import CardBodyTwo from "../components/cards/CardBodyTwo";

const Profile = () => {
  return (
    <section>
      <div className="container">
        <div className="main-box mx-auto mt-4">
          {/* image box */}
          <div className="mx-auto p-2 p-md-4 profile-box d-flex flex-row flex-md-column justify-content-md-center align-items-center">
            <div className="image-box rounded-circle position-relative">
              {/* edit box */}
              <a href="#" className="text-decoration-none">
                <div className="edit-box d-flex justify-content-center align-items-center p-1 p-md-3 bg-secondary rounded-circle shadow-sm">
                  <FiEdit />
                </div>
              </a>
              <img
                src="/imgs/cardImg-3.jpg"
                alt="Profile Image"
                className="profile-image w-100 rounded-circle"
              />
            </div>
            <div className="mt-md-4 ml-3 ml-md-0 text-md-center">
              <h2 className="heading heading-primary font-weight-bold">
                John Doy
              </h2>
              <p className="text-muted paragraph-text mb-0">
                example@example.com
              </p>
            </div>
          </div>

          <div className="mt-3 mt-md-5">
            <div className="row">
              <div className="col-12 col-md-6 p-md-4 mb-3 mb-md-0">
                <CardBodyTwo
                  title="My Order"
                  details="Check the status of your orders"
                />
              </div>
              <div className="col-12 col-md-6 p-md-4 mb-3 mb-md-0">
                <CardBodyTwo
                  title="Shipping addresses"
                  details="View or modify your addresses"
                />
              </div>
              <div className="col-12 col-md-6 p-md-4 mb-3 mb-md-0">
                <CardBodyTwo
                  title="Payment methods"
                  details="Add or remove payment methods"
                />
              </div>
              <div className="col-12 col-md-6 p-md-4 mb-3 mb-md-0">
                <CardBodyTwo
                  title="Sign Out"
                  details="Sign out from the app"
                  dark
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .main-box {
          width: 85%;
        }
        @media screen and (max-width: 991px) {
          .main-box {
            width: 100%;
          }
        }
        .profile-box {
          max-width: 350px;
        }
        .profile-image {
          max-width: 154px !important;
          max-height: 154px !important;
        }
        .edit-box {
          position: absolute;
          width: 50px;
          height: 50px;
          top: 0;
          right: 0;
        }
        @media screen and (max-width: 767px) {
          .profile-image {
            max-width: 70px !important;
            max-height: 70px !important;
          }
          .edit-box {
            width: 25px;
            height: 25px;
          }
        }
      `}</style>
    </section>
  );
};

export default Profile;
