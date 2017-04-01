const React = require('react');
import CategoryItemCompoent from './category.item'
import '../../../public/css/category.scss';



let CategoryComponent = React.createClass({
    render: function() {
        return (
            <div className="category">
                <CategoryItemCompoent data={this.props.data[0]}/>
                <CategoryItemCompoent data={this.props.data[1]}/>
            </div>
        );
    }
});

export default CategoryComponent;