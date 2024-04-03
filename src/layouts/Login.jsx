import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

const Login = () => {
    return (
        <div className="bg-[#f3f3f3] min-h-screen">
            <div>
                <NavBar></NavBar>
                <div className="hero">
                    <div className="hero-content flex-col">
                        <div className="card shrink-0 w-full md:w-[600px] shadow-2xl bg-base-100 p-5 lg:p-20">
                            <h3 className="text-4xl font-semibold text-center">Login your account</h3>
                            <div className="divider my-6 lg:my-12"></div>
                            <form className="card-body p-0">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            <p className="mt-8 text-center font-semibold">Don&apos;t have an account? <Link 
                            to="/register" className="text-[#FF8C47]">Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;