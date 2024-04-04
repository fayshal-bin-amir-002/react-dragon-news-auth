import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const NewsCard = ({ news }) => {

    const { _id, title, image_url, details } = news;

    return (
        <div className="border p-5 rounded">
            <h4 className="text-xl font-semibold mb-5">{title}</h4>
            <img src={image_url} alt="" className="mb-8" />
            <p>{details.length > 250 && details.slice(0,250)}... <Link to={`/news/${_id}`} className="text-[#FF8C47] font-bold cursor-pointer">Read more</Link></p>
            <div className="divider my-5"></div>
        </div>
    );
};

NewsCard.propTypes = {
    news: PropTypes.object.isRequired
};

export default NewsCard;