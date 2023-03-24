
import { Link } from 'react-router-dom';
import image from '../../assets/images';
import '../../styles/header.scss'
function Header() {
    const menu = [
        {
            id: 1,
            label: "Home",
            to: "/"
        },
        {
            id: 2,
            label: ".NET template initializer",
            to: "/NETtemplate"
        },
        {
            id: 3,
            label: "ReactJS template initializer",
            to: "/ReactJStemplate"
        }
    ];

    return (
        <header className='wrapper-header'>
            <div className='header-content'>
                <div className='header-logo'>
                    <Link to='/home' >
                        <img src={image.logoMenu} alt="TMA Solution" className='header-logo-link' />
                    </Link>
                </div>
                <div className="header-items">
                    <div className="header-item">
                        <ul >
                            {menu.map((item) => (
                                <li key={item.id} className='item'>
                                    <Link to={item.to}>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="header-item-left">
                        <img className='user-avatar' src={image.avatar} alt="Nguyen Van A" />
                        <div className='header-item-user'>
                            <div className='header-item-fullname'>Phương Thảo</div>
                            <div className='header-item-username'>ltpthao</div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header;