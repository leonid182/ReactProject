
import styles from './App.module.scss';
import { Route, Routes } from 'react-router-dom';
import routes from "./Components/routes"
import MainPage from "./Containers/MainPage/MainPage"
import AboutPage from "./Containers/AboutPage/AboutPage"
import NewsPage from "./Containers/NewsPage/NewsPage"
import ListPage from "./Containers/ListPage/ListPage"


import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
function App() {
  return (
   
      <div className={styles.wrapper}>
        
        <BrowserRouter > 
        <Routes>
                    <Route path={routes.Main} element={<MainPage/>}/>
                    <Route path={routes.About} element={<AboutPage/>}/>
                    <Route path={routes.News} element={<NewsPage/>}/>
                    <Route path={routes.List} element={<ListPage/>}/>
                   
                    
                   
          </Routes>
          </BrowserRouter> 
      
      </div>
  
  );
}

export default App;
