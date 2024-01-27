import React from "react";
import { UserAuth } from "../context/AuthContext";
import avatar from "../public/assets/avatar.jpg";

const Profile = () => {
  const { user, logOut } = UserAuth();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section className="w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/55 z-[12]"></div>

        <img
          className="fixed top-0 bottom-0 left-0 right-0 w-full h-full object-cover"
          // src="https://wpassets.brainstation.io/app/uploads/2017/04/13100509/Netflix-Background.jpg"
          src="https://cdn.neowin.com/news/images/uploaded/2023/05/1683747988_background-size1920x1080-4e1694a6-75aa-4c36-9d4d-7fb6a3102005-bc5318781aad7f5c8520.jpg"
          alt="background image"
        />

        <div className="bg-black/95 p-2 md:p-5 rounded-md w-[95vw] md:w-[auto] z-[20]">
          <h1 className="text-4xl mb-3 ">Edit Profile</h1>

          <div className="border-[1px] border-white w-full mb-3"></div>
          <div className="flex gap-5 md:w-[600px] mx-uto bg-whites">
            <div className="hidden md:block">
              <img
                src={avatar}
                alt="avatar"
                className="rounded-md w-[2.5rem] md:w-[8rem]"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <p className="bg-gray-400 p-3 font-bold w-full">{user.email}</p>
              <h5>Plans (Current Plan: Premium)</h5>
              <hr />
              <p>Review Date 04/03/2024</p>

              <div>
                <div className="flex flex-col gap-[2rem]">
                  <div className="flex items-center justify-between">
                    <div>
                      <p>Netflix Standard</p>
                      <small>1080p</small>
                    </div>
                    <button className="subscribe__btn ">Subscribe</button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p>Netflix Standard</p>
                      <small>1080p</small>
                    </div>
                    <button className="subscribe__btn">Subscribe</button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p>Netflix Premium</p>
                      <small>4KHDR</small>
                    </div>
                    <button className="bg-gray-400 p-3 font-bold rounded-md">
                      Current Package
                    </button>
                  </div>

                  <button className="btn-red" onClick={handleLogOut}>
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
