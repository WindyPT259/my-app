import DefaultLayout from '../layouts/DefaultLayout';
import Home from '../views/home/Home';
import Page404 from '../views/errors/Page404';

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
    name: '404',
    path: '*',
    title: 'Page 404',
    exact: false,
    Element: Page404,
    Layout: null
  }
];

export default routes;
