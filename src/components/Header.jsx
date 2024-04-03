import Logo from "../assets/logo.png"
import moment from 'moment';

const Header = () => {
    return (
        <div className="flex flex-col items-center my-4 lg:my-8">
            <img src={Logo} alt="logo" />
            <p className="text-lg text-[#706F6F] mt-5 mb-2">Journalism Without Fear or Favour</p>
            <p className="text-xl font-medium">{moment().format("dddd, MMMM D YYYY")}</p>
        </div>
    );
};

export default Header;