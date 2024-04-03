import { FaGoogle, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import QZoneImg1 from "../assets/qZone1.png";
import QZoneImg2 from "../assets/qZone2.png";
import QZoneImg3 from "../assets/qZone3.png";

const RightSideNav = () => {
    return (
        <div>
            <div className="mb-8">
                <h3 className="text-3xl font-semibold mb-5">Login With</h3>
                <button className="btn btn-outline btn-info w-full mb-2">
                    <FaGoogle />
                    Login With Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub />
                    Login With Github
                </button>
            </div>
            <div className="mb-8">
                <h3 className="text-3xl font-semibold mb-5">Find Us On</h3>
                <div className="border rounded">
                    <a href="" className="flex items-center gap-2 font-medium p-4 border-b"><FaFacebook className="text-3xl p-2 bg-slate-200 rounded-full"></FaFacebook> Facebook</a>
                    <a href="" className="flex items-center gap-2 font-medium p-4 border-b"><FaXTwitter className="text-3xl p-2 bg-slate-200 rounded-full"></FaXTwitter> Twitter</a>
                    <a href="" className="flex items-center gap-2 font-medium p-4"><FaInstagram className="text-3xl p-2 bg-slate-200 rounded-full"></FaInstagram> Instagram</a>
                </div>
            </div>
            <div className="bg-[#F3F3F3]">
                <h3 className="text-3xl font-semibold p-4 mb-1">Q-Zone</h3>
                <div className="flex flex-col gap-5 pb-4">
                    <img src={QZoneImg1} alt="" />
                    <img src={QZoneImg2} alt="" />
                    <img src={QZoneImg3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;