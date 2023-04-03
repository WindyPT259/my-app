import { useState } from 'react';
import { useForm } from "react-hook-form";
import icon from '../../assets/icon';
import Button from '../../components/Button';
import { InputField, CheckBoxField } from '../../components/FormField';
import '../../styles/login.scss'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [loginError, setLoginError] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const defaultValues = { emailLogin: '', passwordLogin: '', isRememberMe: false, };
    const { control, handleSubmit, errors } = useForm({ defaultValues });
    const handleLogin = async data => {
        console.log(data);
    }
    const handleShowPassword = () => setShowPassword(!showPassword)

    const loginJSX = (
        <div className="wrapper-login">
            <div className="login-header">
                <div className="login-header-title">ĐĂNG NHẬP</div>
                {loginError && <div className="login-header-error">{loginError}</div>}
            </div>
            <div className="login-body">
                <form className="login-form" onSubmit={(handleSubmit(handleLogin))}>
                    <InputField
                        label='Email'
                        placeholder="Enter email"
                        name='emailLogin'
                        className="email-login"
                        labelRequired={true}
                        control={control}
                    />
                    <InputField
                        label='Mật khẩu'
                        placeholder="Enter password"
                        name='passwordLogin'
                        className="password-login"
                        type={showPassword ? 'text' : 'password'}
                        labelRequired={true}
                        control={control}
                        iconEnd={
                            <img
                                className="eye-icon"
                                alt="Show password"
                                title={showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
                                src={showPassword ? icon.loginShowPassWord : icon.loginHidePassWord}
                                onClick={handleShowPassword}
                            />}
                    />
                    <div className="login-flex">
                        <CheckBoxField
                            control={control}
                            name="isRememberMe"
                            label="Ghi nhớ đăng nhập"
                            className="login-remember-me"
                        />
                        <Button to="/forgot-password" className="login-forgot-password">
                            Quên mật khẩu?
                        </Button>
                    </div>
                    <Button className="btn-login" type="submit" primary > Đăng nhập </Button>

                    <div className="login-footer">
                        Chưa có tài khoản.<Button to="/register">Đăng ký</Button>

                    </div>

                </form>
            </div>
        </div>
    );
    return loginJSX;
}
export default Login;