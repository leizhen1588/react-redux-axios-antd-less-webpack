import React, {Component} from 'react';
import Header from './component/header/header.jsx';
import Content from './component/content/content.jsx';
import './App.css';
import { Menu, Icon } from 'antd';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends Component {
    render() {
        return (
                 <div>
                     <Menu
                         defaultOpenKeys={['sub1']}
                         theme="dark"
                     >
                         <Menu.Item key="1">
                             <Link to="/">
                                 <Icon type="pie-chart"/>
                                 <span>首页</span>
                             </Link>
                         </Menu.Item>
                         <Menu.Item key="2">
                             <Link to="/movie">
                                 <Icon type="desktop"/>
                                 <span>电影</span>
                             </Link>
                         </Menu.Item>
                     </Menu>

                  <Route exact path="/" component={Header}></Route>
                  <Route path="/movie" component={Content}></Route>
                 </div>
        );

    }
}

export default App;
