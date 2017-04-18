const React = require('react');
import CategoryItemCompoent from './category.item'
import '../../../assets/css/category.scss';
import PropTypes from 'prop-types';

class CategoryComponent extends React.Component {
    render() {
        return (
            <div className="category">
                <CategoryItemCompoent data={this.props.categories[0]} />
                <CategoryItemCompoent data={this.props.categories[1]} />
            </div>
        );
    }
};

CategoryComponent.propTypes = {
    categories: PropTypes.array.isRequired
};

CategoryComponent.defaultProps = {
    categories: []
}

export default CategoryComponent;