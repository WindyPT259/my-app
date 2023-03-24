import PropTypes from 'prop-types';
import '../styles/defaultLayout.scss';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function DefaultLayout({ children }) {
  return (
    <div className='wrapper'>
      <Header />
      <div className='container'>
        <div className='content'>{children}</div>
      </div>
      <Footer />
    </div>

  );
};
DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default DefaultLayout;
