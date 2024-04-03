import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex items-center gap-5 p-4 bg-[#F3F3F3]">
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee pauseOnHover={true}>
                <Link to="/" className="mr-8">I can be a React component, multiple React components, or just some text...</Link>
                <Link to="/" className="mr-8">I can be a React component, multiple React components, or just some text...</Link>
                <Link to="/" className="mr-8">I can be a React component, multiple React components, or just some text...</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;