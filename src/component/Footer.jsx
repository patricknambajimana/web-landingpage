import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-6 lg:ml-20 lg:mr-30 border-t-2 border-b-2 border-primary-300 mt-40">
        <div>
          <div className="flex items-center gap-2 text-3xl capitalize py-10">
            <img src="https://medicai.co.za/wp-content/uploads/2024/12/mai_icon_2.png" alt="" width={50} />
            <h2 className="text-3xl font-extrabold">
              bussines <strong className="text-primary-500/100 font-extrabold">cafe</strong>
            </h2>
          </div>

          <p className="text-xl font-light">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia neque, rem incidunt eum laudantium
            repellat. Suscipit eaque quo unde, temporibus consectetur.
          </p>

          <ul className="flex gap-4 mt-4 text-3xl text-primary-500">
            <li>
              <a href="#"><CiFacebook /></a>
            </li>
            <li>
              <a href="#"><FaTwitter /></a>
            </li>
            <li>
              <a href="#"><CiLinkedin /></a>
            </li>
            <li>
              <a href="#"><FaInstagram /></a>
            </li>
          </ul>
        </div>

        <div className="lg:ml-40 py-10">
          <h2 className="text-4xl font-extrabold capitalize ">quick links</h2>
          <div className="text-center p-0.5 mt-5  md:w-80   bg-primary-400 "></div>
          <ul className="py-2 text-2xl capitalize">
            <li className="py-2"><a href="">home</a></li>
            <li className="py-2"><a href="">space</a></li>
            <li className="py-2"><a href="">about</a></li>
            <li className="py-2"><a href="">contact</a></li>
          </ul>
        </div>

        <div className="lg:ml-40 py-10">
          <h2 className="text-4xl font-extrabold capitalize">contactinfo</h2>
          <div className="text-center p-0.5 mt-5  md:w-80  bg-primary-400 "></div>
          <div className="py-2 text-xl capitalize">
            <p className="py-2">
              <strong>location:</strong> kigali, <strong className="text-primary-400">Rwanda</strong>
            </p>
            <p className="py-2">
              <strong className="text-xl py-4">Email:</strong> businesscafe@info.com
            </p>
            <p className="py-2">
              <strong>phone:</strong> +250783787817
            </p>
            <a href="#" className="underline text-primary-400">view location on google map</a>
          </div>
        </div>
      </div>

      <div className="text-center text-2xl py-5 mb-20 capitalize">
        <span>copy right &copy;2023 bussines cafe all right reserved</span>
      </div>
    </div>
  );
}
