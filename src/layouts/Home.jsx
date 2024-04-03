import BreakingNews from "../components/BreakingNews";
import Header from "../components/Header";
import LeftSideNav from "../components/LeftSideNav";
import NavBar from "../components/NavBar";
import RightSideNav from "../components/RightSideNav";

const Home = () => {
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
                    <h2 className="text-4xl">News comming soon</h2>
                </div>
                <div className="col-span-1">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;