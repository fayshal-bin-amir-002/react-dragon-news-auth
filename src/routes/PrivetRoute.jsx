import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../components/Loader';

const PrivetRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    if(loading) {
        return <Loader></Loader>
    }

    if(user) {
        return children;
    }
    return <Navigate to="/login" state={location.pathname}></Navigate>
};

PrivetRoute.propTypes = {
    children: PropTypes.node
};

export default PrivetRoute;