import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';

import routes from './routes/routes';
import 'react-toastify/dist/ReactToastify.css';
import './styles/global.scss'

function App() {
  return (
    <Router>
      <Routes>
        {routes.map(item => {
          const Page = item.Element;
          let Layout = item.Layout === null ? Fragment : item.Layout;
          return (
            <Route
              key={item.path}
              path={item.path}
              exact={item.exact}
              name={item.name}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />)
        })}
      </Routes>
    </Router>
  );
}

export default App;

