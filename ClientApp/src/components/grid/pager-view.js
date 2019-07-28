import React from 'react';
import PageRow from './PageRow';

class PagerView extends React.Component {

    constructor(props) {
        super(props);

        this.state = { totalRows: props.totalRows };
    }

    render() {
        let pageComponents = [];

        for (let i = 1; i < this.props.totalRows; i++) {
            pageComponents.push(<PageRow pageNum={i} />);
        }
        return (
            <div className>                
                {pageComponents}
            </div>
        )
    }
}

export default PagerView;