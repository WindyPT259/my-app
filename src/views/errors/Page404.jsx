import { Link } from 'react-router-dom';
import image from '../../assets/images';
import '../../styles/page404.scss';

const Page404 = () => {
  return (
    <div className="not-found-container">
      <div className="not-found">
        <img
          src={image.notFound}
          alt="Not Found"
          className="not-found-logo"
        />
        <div className="not-found-title" data-text="404">
          404
        </div>
        <div className="not-found-sub-title">Không tìm thấy trang!</div>
        <div className="not-found-message">
          Đường dẫn không tồn tại. Quay về <Link to="/home">Trang chủ</Link>
        </div>
      </div>
    </div>
  );
};

export default Page404;
