import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("categories.json")
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);
    
    return (
        <div>
            <div className="mb-6">
                <h3 className="text-3xl font-semibold mb-5">All Caterogy</h3>
                <ul className="menu p-0">
                    {
                        categories.map((category) => <li key={category.id}><NavLink className="py-3 text-xl font-semibold" to={`/category/${category.id}`}>{category.name}</NavLink></li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default LeftSideNav;