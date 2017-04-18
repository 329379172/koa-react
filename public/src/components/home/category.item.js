const React = require('react');

class CategoryItemComponent extends React.Component {
    render() {
        return (
            <div className="categoryItem">
                <div className="icon">
                    <img src={this.props.data.icon} />
                </div>
                <div className="title">{this.props.data.title}</div>
                <div className="describe">{this.props.data.describe}</div>
                <div className="post">
                    <img src={this.props.data.postIcon} />
                </div>
            </div>
        );
    }

};

export default CategoryItemComponent;