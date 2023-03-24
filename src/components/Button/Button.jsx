import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from '../../styles/button.scss'
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Button({
    to,
    href,
    text = false,
    primary = false,
    outline = false,
    small = false,
    large = false,
    rounded = false,
    disable = false,
    children,
    onClick,
    className,
    leftIcon,
    rightIcon,
    ...passProps
}) {
    let Comp = 'button';
    const props = { onClick, ...passProps };

    //Remove event button when btn is disable
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    // const classuser = `wrapper-btn ${className ? className : ''}`
    const classes = cx('wrapper-btn', { [className]: className, text, primary, outline, rounded, disable, small, large });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className='icon-btn'>{leftIcon}</span>}
            <span className='title'>{children}</span>
            {rightIcon && <span className='icon-btn'>{rightIcon}</span>}
        </Comp>
    );
};
Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    text: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    disable: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    children: PropTypes.node.isRequired,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
};
export default Button;
