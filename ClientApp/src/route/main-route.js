import React from "react";
import Counter from '../components/Counter';
import FetchData from '../components/FetchData';
import CatDetail from '../components/sample/CatDetail';
import CatCreate from '../components/sample/CatCreate';
import CatUpdate from '../components/sample/CatUpdate';
import { Route } from 'react-router-dom'
import CartableManipulate from '../components/entity/cartable-manipulate';
import EntityList from '../components/entity/entity-list';
import Organization from "../components/forms/organization/organization";
import GuiltyPersonSaveData from "../components/guilty-persons/guilty-person-save-data";
import GuiltyPersonList from "../components/guilty-persons/guilty-person-list";
export class MainRoute extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div>
                <Route  path='/GuiltyPerson' component={GuiltyPersonList} />
                <Route  path='/Cartable' component={EntityList} />
                <Route  path='/CartableCreation' component={CartableManipulate} />
                <Route  path='/GuiltyPersonCreation' component={GuiltyPersonSaveData} />
                <Route  path='/CartableUpdate/:id' component={CartableManipulate} />
                <Route  path='/GuiltyPersonUpdate/:id' component={GuiltyPersonSaveData} />
                <Route  path='/Organization' component={Organization} />
                <Route  path='/catDetail' component={CatDetail} />
                <Route  path='/create' component={CatCreate} />
                <Route  path='/update/:id' component={CatUpdate} />
                <Route  path='/counter' component={Counter} />
                <Route  path='/fetch-data/:startDateIndex?' component={FetchData} />
            </div>

        )
    }
}
export default MainRoute;
