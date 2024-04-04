import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import RightSideNav from '../components/RightSideNav';
import NavBar from '../components/NavBar';

const NewsDetails = () => {

    const { id } = useParams();

    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <div className='grid grid-cols-4 gap-6'>
                <div className=' col-span-3'>
                    <h3 className="text-3xl font-semibold mb-5">Dragon News</h3>
                    <div className="border p-5 rounded">
                        <h4 className="text-xl font-semibold mb-5"></h4>
                        <img src="" alt="" className="mb-8" />
                        <p></p>
                        <div className="divider my-5"></div>
                    </div>
                </div>
                <div className=' col-span-1'>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;