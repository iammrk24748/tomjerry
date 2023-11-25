import React from "react";

const Contact = () => {
  return (
    <div className="bg-white">
      <h2 className="font-bold text-4xl text-[#333333] text-center">Contact</h2>
      <div className="grid grid-cols-2 mx-20">
        <div className="">
          <img
            className="w-[30em]"
            src="https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/290529577_113046108111385_8452677493873677800_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=NKyfN7ZhyGcAX9tOJiR&_nc_ht=scontent.fdac24-4.fna&oh=00_AfDdqysQponNyp978LohsWJ9ZyWfH_p-JbCOuG_Jo-BcxA&oe=65668922"
            alt=""
          />
        </div>

        <div className="flex flex-col pt-10">
          <h2 className="font-bold text-lg pb-3  text-[#333333]">
            Enter your email here
          </h2>
          <input
            type="email"
            className="bg-[#B2B2B2] px-20 mb-3 py-3 border-1 border-[#333333]"
          />
          <h2 className="font-bold text-lg pb-3  text-[#333333]">
            Enter your text here
          </h2>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Enter your message here"
            className="bg-[#B2B2B2] text-black"
          ></textarea>
          <input
            type="submit"
            value="Send"
            className="bg-[#333333] mt-3 mb-4 py-3 text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
