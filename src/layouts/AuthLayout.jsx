import PropTypes from 'prop-types';
import '../styles/layout.scss';
import Footer from '../components/Footer/Footer';

function AuthLayout({ children }) {
  return (
    <div className='wrapper'>
      <div className='container'>
        <div className='content'>{children}</div>
      </div>
      <Footer />
    </div>

  );
};
AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AuthLayout;
