import React from 'react';


class PageRow extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = { pageNum: props.pageNum };
    }
     
    render() {
        
        return (
            <div >
                    {this.props.pageNum}
            </div>
        )
    }
}

export default PageRow;