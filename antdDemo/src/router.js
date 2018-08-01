import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Item1 from './routes/Item1';
import Item2 from './routes/Item2';
import Item3 from './routes/Item3';
import Item4 from './routes/Item4';
import Item5 from './routes/Item5';
import Item6 from './routes/Item6';
import Item7 from './routes/Item7';
import Item8 from './routes/Item8';
import Item9 from './routes/Item9';
import Item10 from './routes/Item10';


const sideMenu =[{
    key:"sub1",
    item:[
        {key:"1",component:Item1},
        {key:"2",component:Item2},
        {key:"3",component:Item3},
        {key:"4",component:Item4},
    ]
},{
    key:"sub2",
    item:[
        {key:"5",component:Item5},
        {key:"6",component:Item6}
    ]
},{
    key:"sub3",
    item:[
        {key:"7",component:Item7},
        {key:"8",component:Item8},
        {key:"9",component:Item9},
        {key:"10",component:Item10},
    ]
}]

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        { 
            sideMenu.map((menu)=>{
                return ( menu.item.map((subMenu)=>{
                    return  <Route path={`/${menu.key}/${subMenu.key}`} key={subMenu.key} exact component={subMenu.component} />
                }) )
            })
        }
      </Switch>
    </Router>
  );
}

export default RouterConfig;
