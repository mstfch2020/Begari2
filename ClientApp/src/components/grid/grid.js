import React from 'react';
import classNames from 'classnames';
export class Grid extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
        };
    }
    

    render() {
        var sideClass = classNames('col-md-2' ,'sidebar') ;
        return (
            <div className={sideClass}>
                <h4>Sidebar</h4>
            </div>
        );
    }
}
export default Grid;