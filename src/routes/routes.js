import DefaultLayout from '../layouts/DefaultLayout';
import Home from '../views/home/Home';
import Page404 from '../views/errors/Page404';
import Login from '../views/auth/Login';
import ForgotPassword from '../views/auth/ForgotPassword';
import Register from '../views/auth/Register';
import AuthLayout from '../layouts/AuthLayout';

const routes = [
  {
    name: 'home',
    path: '/',
    title: 'Trang chủ',
    exact: true,
    Element: Home,
    Layout: DefaultLayout
  },
  {
    name: 'home',
    path: '/home',
    title: 'Trang chủ',
    exact: true,
    Element: Home,
    Layout: DefaultLayout
  },
  {
    name: 'register',
    path: '/register',
    title: 'Register',
    exact: true,
    Element: Register,
    Layout: AuthLayout
  },
  {
    name: 'login',
    path: '/login',
    title: 'Login',
    exact: true,
    Element: Login,
    Layout: AuthLayout
  },
  {
    name: 'forgotPassword',
    path: '/forgot-password',
    title: 'Forgot Password',
    exact: true,
    Element: ForgotPassword,
    Layout: AuthLayout
  },
  {
    name: '404',
    path: '*',
    title: 'Page 404',
    exact: false,
    Element: Page404,
    Layout: null
  }
];

export default routes;
