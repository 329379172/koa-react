const React = require('react');

import homeCss from '../../public/css/home.scss';
import store from '../store/index';
import homeAction from '../actions/actions';

const HomeComponent = React.createClass({
    displayName: "HomeComponent",
    getInitialState() {
        return {topImg: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png', topImageUrl: ''};         
    },
    getDefaultProps() {

    },
    propTypes() {

    },
    statics: {

    },
    componentWillMount() {

    },
    stateChange() {
        this.setState(store.getState().home);
    },
    componentDidMount: function() {
        let self = this;
        store.dispatch(homeAction.getHomeDataAction());
        store.subscribe(self.stateChange);
    },
    componentWillReceiveProps: function(nextProps) {

    },
    shouldComponentUpdate: function(nextProps, nextState) {
        return true;
    },
    componentWillUpdate: function(nextProps, nextState) {

    },
    componentDidUpdate: function(prevProps, prevState) {

    },
    componentWillUnmount() {

    },
    render: function() {
        return (
        <div className="home">
            <div className="header">
               <div className="topImg">
                   <img src={this.state.topImg}/>
                </div> 
            </div>
            <div className="body">
                <div></div>
            </div>
        </div>
        );
    }
});

export default HomeComponent;