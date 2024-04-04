import { useLoaderData } from "react-router-dom";
import BreakingNews from "../components/BreakingNews";
import Header from "../components/Header";
import LeftSideNav from "../components/LeftSideNav";
import NavBar from "../components/NavBar";
import RightSideNav from "../components/RightSideNav";
import NewsCard from "../components/NewsCard";

const Home = () => {

    const news = useLoaderData();

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <NavBar></NavBar>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6 my-10 lg:my-20">
                <div className="col-span-1">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-1 lg:col-span-2">
                    <h3 className="text-3xl font-semibold mb-5">Dragon News Home</h3>
                    <div className="space-y-8">
                        {
                            news.map((sNews) => <NewsCard key={sNews._id} news={sNews}></NewsCard>)
                        }
                    </div>
                </div>
                <div className="col-span-1">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;