import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {

    const { userSignUp } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        const form = new FormData(e.currentTarget);

        // const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');

        userSignUp(email, password)
            .then((result) => {
                console.log(result.user);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className="bg-[#f3f3f3] min-h-screen">
            <div>
                <NavBar></NavBar>
                <div className="hero">
                    <div className="hero-content flex-col">
                        <div className="card shrink-0 w-full md:w-[600px] shadow-2xl bg-base-100 p-5 lg:p-20">
                            <h3 className="text-4xl font-semibold text-center">Register your account</h3>
                            <div className="divider my-6 lg:my-8"></div>
                            <form onSubmit={handleRegister} className="card-body p-0">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name="photo" placeholder="photo url" className="input input-bordered" />
                                </div>
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
                                <div className="form-control">
                                    <label className="items-center flex mt-4 gap-3">
                                        <input type="checkbox" className="checkbox checkbox-accent" />
                                        <span className="label-text">Accept <span className="font-bold">Term & Conditions</span></span>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                            </form>
                            <p className="mt-8 text-center font-semibold">Already have an account? <Link
                                to="/login" className="text-[#FF8C47]">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;