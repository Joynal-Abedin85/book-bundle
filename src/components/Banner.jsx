import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

import styled from "styled-components";

const StyledSlider = styled(AwesomeSlider)`
  .aws-btn {
    background-color: #4caf50!important; /* Change arrow background color */
    color: white !important; /* Change arrow icon color */
  }

  .aws-btn:hover {
    background-color: #388e3c !important; /* Change arrow hover background */
  }

  .aws-sld__bullets .aws-sld__bullets-item {
    background-color: #cccccc; /* Inactive bullet */
  }

  .aws-sld__bullets .aws-sld__bullets-item--active {
    background-color: #4caf50; /* Active bullet */
  }
`;

const Banner = () => {
  return (
    <StyledSlider className="h-[800px] sm:h-[450px]">
      <div className="bg-gradient-to-t from-purple-700 to-black flex items-center justify-center flex-col sm:flex-row  h-full py-6 gap-3 px-3">
        <div className="w-1/2">
          <h2 className="text-white text-xl border-b-2 border-[#00F9AA]">
            Lets talk about
          </h2>
          <h2 className="text-5xl text-[#00F9AA] font-bold my-4">
            we have a uniqe book what you need to know
          </h2>
          <h2 className="text-gray-300">
          Our Library System helps manage books, borrowing, and returns easily. It tracks inventory, sends reminders for late returns, manages members, and provides reports to make library work simple and efficient.
          </h2>
        </div>
        <div className="w-1/2 h-[400px] flex items-center justify-center">
          <img src="/assets/book3.png" alt="" className="w-auto h-[330px]" />
        </div>
      </div>
      <div className="bg-gradient-to-t flex-col sm:flex-row from-violet-700 to-black flex items-center justify-center h-full gap-3 px-4">
        <div className="w-1/2">
          <h2 className="text-white text-xl border-b-2 border-[#00F9AA]">
            Lets talk about
          </h2>
          <h2 className="text-5xl text-[#00F9AA] font-bold my-4">
          We have a uniqe book what you need to know
          </h2>
          <h2 className="text-gray-300">
          Our Library System helps manage books, borrowing, and returns easily. It tracks inventory, sends reminders for late returns, manages members, and provides reports to make library work simple and efficient.
          </h2>
        </div>
        <div className="w-1/2 h-[400px] flex items-center justify-center">
          <img src="/assets/book2.png" alt="" className="w-auto h-[330px]" />
        </div>
      </div>
      <div className="bg-gradient-to-t flex-col sm:flex-row from-fuchsia-700 to-black flex items-center justify-center h-full gap-3 px-4">
        <div className="w-1/2">
          <h2 className="text-white text-xl border-b-2 border-[#00F9AA]">
            Lets talk about
          </h2>
          <h2 className="text-5xl text-[#00F9AA] font-bold my-4">
            we have a uniqe book what you need to know
          </h2>
          <h2 className="text-gray-300">
          Our Library System helps manage books, borrowing, and returns easily. It tracks inventory, sends reminders for late returns, manages members, and provides reports to make library work simple and efficient.
          </h2>
        </div>
        <div className="w-1/2 h-[400px] flex items-center justify-center">
          <img src="/assets/book1.png" alt="" className="w-auto h-[330px]" />
        </div>
      </div>
    </StyledSlider>
  );
};

export default Banner;
