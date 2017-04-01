const React = require('react');

import homeCss from '../../public/css/home.scss';
import store from '../store/index';
import homeAction from '../actions/actions';
import CategoryComponent from './home/category';
let categories = [
    {
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABgCAMAAADLj7e5AAAATlBMVEUAAAAAgsUAgsUAgsUAgsUAgsUAgsUAgsUAgsUAgsUAgsUAgsUAgsUAgsUAgsUAgsUAgsUAgsUAgsUAgsUAgsUAgsUAgsUAgsUAgsUAgsXK4J8FAAAAGnRSTlMAgHE5eTIGFWRcdQkcay0RDUlEVkAmIWBQZfMS68UAAAH0SURBVGje7dnrrqIwFIbhb5WWQ0s5yNH7v9HB4gQ3YyYsKk226fvLxMhTlEIFxGKxWCwWe5ZoOteUgd9M5yvZWk8eScPUDHl1Y3KDH3dncokfJ8Jy+qv37pOcLvqkUv1sQ3BWpXhWzpdzbYqXRnEt18NlGvN8Ia7kOjwaCknS9k5s5HWcdEJLa6LEkrqOu+3eqrEkLuMyADVt5Vi6XcVZt/W9P1zFtViy9FLymH1XcVMyZBntuTHcOXMAUAXj3FbbYNwIIJUnuXTJNE1mjnLVuoZicWXfTUWeW2uF0PIxVPXgjmolsThFuw5zA5ZqzeJGOsuNTmNegDoet9c08Th7kkuwVGpicuIcd8dSRhSIGwAYHYrT66UhFNe5s0kwrnVTKBjXA6jCcSosZ9u5vYfjXN/LSZIBuco0Ta2DcaX7aDDOrVHEt+7d+tt965H526e58uMsk6v9uI7JofPiSi5ntIfWgsH1eFTnF9w8Ff/54qs5v+e77lPx7OdodFf87VaCxWn+X0BZ41DC405yaV+WuR4czQ2OlM7b+Hw4kp3K6uyfGuyqJC1NYHBeB3iWE2kThnO1nGciE4tTeFON4ymOJhv4NjO4Cv6pSa7RlnyT6EZ8pHSt2p6/pe/Ch+u3ORukYsH0gFAZSUWDcA03xGKxWOxnfwBn3SBYkalR1wAAAABJRU5ErkJggg==',
        title: '问答社区',
        describe: '再也不愁找不到客服',
        postIcon: 'data:image/png;base64,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'
    },
    {
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAABgCAMAAADPemeEAAAAbFBMVEUAAAD9sGX9sGX9sGX9sGX9sGX9sGX9sGX9sGX9sGX9sGX9sGX9sGX9sGX9sGX9sGX9sGX9sGX9sGX9sGX9sGX9sGX9sGX9sGX9sGX9sGX9sGX9sGX9sGX9sGX9sGX9sGX9sGX9sGX9sGX9sGUMjLArAAAAI3RSTlMA8zUfYuYl+Qx1RZTfBtEYs8vYnH65q6SELhJZTj2KVMW/bEUXTtEAAAPJSURBVGje7NZZrqMwFATQwpjJYQqQiRcISe1/j02wsUSPConpn3d+kSjda6lsfPs/ZILthCxjbKZkGmIrD9K7YCOKZBBjG4KjEtu48EnBxwYUn+5QPdxLOCng1XAu50Sip4RjV2o9FHmBWxW1GiG5h1OSxg6FRyq4FNDop7AaDinOJHySAxwqORNQjpsk9mh4MRKSCdxRnJ30lBe4c+ZMoY3IFA6daAQ6eIBDAw2pj28PhypqKfDgyCtgOQuTcx8/4E5qT8zn5AB37nMvojOxGZzZ2S0KTrwM8Yfz4u7Rn3ax7fzOdkmOYxQcEvGxJFnqH8dAEc1huJlbTX+sGh8f0ASc7EOMaj59YSQDXVeZOnIU1SHeFOb6aHYCk3Ya7WRGbjpMRE6+38q+XuC5WFax12Ip02n9+9dXsDj+L46OGZZEZN5368URRxILKiAp8JPATLxeaK6upbbPTzGWuoijNPOvMkmkWB/Gu8I/SL1Fr4o4SZM1Yca+UTH+RDQVf3HPVoRZwbBLbp3fwspav5NNmfK3juvDLK/K98NwOAx5Gnj8G4HX+BFfF1GrV0z2kqC/hYU486l6dTK+SACwJR06XqOAlnN03WAy++RLNgq72zD3axT21nM/WfujHTtZUhCGogD6MkIIowwyKer7/3/sKu2ipCOQQOvKs2RzKwW5yeOxz9knwoJHVvnufcYA6HEMfnNYx6/4qwD3utrqDJ8L4+CM4TZlA/ChlWUDbJFsCCv77T8HXIV7hj9XNWxWoaNLtOdPt5O4AFfs1KniRt2/EBIBSM75QFlkNfWp6oAPahyRbNXjnR9FqQe5mNQdBT5pHduR+AA1Pol1P7NCmhOcYuMBb2e4T1RTQlMwRNosApetNs4fmflcwhSL8S8h4e6EdrL5U0nBM0nMJkjgF0cbBx8e+pWdHgnzZTMAl7SsfRpNTQGM6pWVBwRX5PBEo6FcbEA2bf8Kl4hu7WAKYRSioYGp4IpzyNlfPZiuMEoX1j06HcnrOkzgj3zxlkDRVJljbTvoeBJI0oKaPaTRINbKXagETC0dbkWtda14LyMwsEKsDqEcXyAVZ+Ci7VLP5qpFL/iKF2ve+GAhalRKrK91SuAMUWoeLJ1QsldViDPCE7zgqxDneeJQ5vWt6wMqWZIkUjYNDTpVV1mIC3QEr0W8RCueh3byBhY0RYz/RZwbWEPVxcPdSNVFYIV1eYY7ZLpvwQXriyok6EpczwODTZKA6zQTVilxqm+9hL18SQOudF6VWXwIBbkTQoSH7Joe79VFmQ9fX19fb/QDvmKxRMGrAfAAAAAASUVORK5CYII=',
        title: '生活社区',
        describe: '收获财富与健康',
        postIcon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAACTCAMAAAC00HtdAAABQVBMVEUAAADp5Nvl3tPx5Nbj3dLy5NbW1c7x5Nby5NbW1s/V1c7W1c7W1c/x5Nby5NbX1s/W1s/y5Nby5Nbw49by5NbV1c7V1c7w49bW1s/W1s/W1s/W1s/c2dDy5NbW1c7k3dLx5Nby5NbV1c/e2tHl4Nfy5Nby5Nbx5NbY18/V1c7j3NLy5NbV1c7t4dXy5Nby5Nb5+PXy5Nbv4tT/okjs4NLp3tHl287V1c7///77+vj75NP8/Pr80K3VzsXg18vi2Mzb08j+uoD39fLc2dDQy8Hd1cnNycDg2tHSzMPk3dPZ0cfLx77q4NT58+3t4dbIxbz/qFjs6ubZ1s/72sD18u767uTf3djt6OHx6eD66dv81bby8Ozy7ufv5Nnn3tP9v4z+tHTu7Oj9xZj+rmbm5eDU0cn8y6L08Orl4dvq5NvHxLvsiXe9AAAAMHRSTlMABRBaHu1Xu/r6sVvtjbA/OvNhVTnzubWRKyTRuINiS0ElghMJz5osm4fwd3fq9da0/1WxAAAKLUlEQVR42u2cCVfaQBSFAyigFvfWfW9r945ETFmFsC9SoSharfva//8DOiZvMkGcLJChPT3eni4WOX7nvvveTEIS4VnPepDriV9/V2wEnnjmTN1+C0+mf4jNxeENfKxyz44ueb2Li17v0uis27JrHK2a8b4fnBtIp/OK0ul0XZJezg2+986w38qZyjWyOv+hWKluPFK1UsynMd2r1RGXERkXKvfi/IfKhoEqxQe2wUU3m8xxKpd3/mTDgir5ujQw6G15Kz+q2enP5kgUTZJeTM+yyJzDGp0PbrQo2KZHrxfT2LQRDmB6Kl870aaiEJb6r3a6Co7a/CiDzAGsmalWKBVni+jkpLiFpQISNEr2aoYB1iXVWsDfCqUgFe9rDRSOftMUjSL5+KCqoVGygek1DiHz9OugFKbtYrMR1mhAhDAsH1RDLWgndenFkDOW0eWjjwRLcUqBOg8DURgLaQpjAV34FttGyYJ5XMw+Ry2bALPAqu1EU4HCSIghDKegHejJKtgyrwbWtVuut5QKW5UoHkcVKGQiFa3xC8jAsncuhxzre0OpsFXFBgOKiSbryE4kaa6vCzD6rmW1hmquEmlKZZcMlnVcyxEGmB0sj5+alUieRwmVTbJbzbIgnhhDDDDrWB+JWbiE2WKYUNknix5oluGQfWKAWcVaoFiJ7BGh6oxM1sCKkrTKALOGFSA1JGahjhV9GBqklhhs2j4YdYuaVWpSszq37Bgs68wxmi2KdQRmdSN9LYudZ8xDsLazJRlXAXUtnARUpWBaV9qbW36ClcyGWTW0X8vwLwDLSwMjHYS+r99pLACLErC09KKPYRjbrtdvWrCQY6Jgwbo091qwqbecsPRgVbyIEzcs2jWhYcURYDkIFsbhh0XcayP5EC4VSwYsR8HQJmTfUsToqz7FrtBWNn4OkXcYTNYi9spGL3rUKm4l4neOY0FXHqtgFW2KucztWusHrFIaZwFxEG4lvFZCJdes2vUWwlWKy4DFASy8SSo5bWYYvLLuJ+GqRaOIk6LRBunJgRnBknwkXPUoh3BpESOVTJPou4ztmiRVzMicsAAsvEmiP2rDrmz8jlsVoZLHxLB5MMaCXYl4IczPLjDslw3DhtXQJwtNjlgA1iCGDYI1bL9WFLtw6ONhnlWEShLDBmbNRmtAsWsb28U498DHMPYMc6l/9oNdBRRG3EUSVpReABFLHpKuO752gWHQkkFJ8jIMg/+YgmbMyWwsDjMsD8lnxd7tV8qYLaS52wVgTZJ8t9HMH1dTX8rUeGMBVxg2YnVp0WgRGobU53innoJVoZCGI2wMc+HUZ9LhnnEdQCFfGqxCy2oZ4/zLSMFk0pEjbL8WSBnl3nGhKozWVXa8fApXsiBZxdpBTEViF3YKWTTaheF4Kd24b8b1I4KwDk9FNtiFKO5ZAsOjVQ0Y0691MlTN4rWzK56qf8UQS3ui+NMSV0MdrZI0w/LLow7VeFk2s0sUFcNi4u5e6wspKlHcpV8cGgRsEwI2xCpjAOJVQCa6FFPEtxQiUkEZihgE7BdMsPfMLSHEq26CFdN+zs9HxdqLMGTQIFrwB1nt+Eblyu0bY+3pXDoTxUPUnbTJOsdqyDE8VR9if4UMldJ12uGuuPsILGW5hsB1qwSsKr1kbSZgqpZriCWoXUzfAgSMVvkypZMpF9IakrGlWCHteIQMdCiKZ629+ShjMcAGmXPJm7ClmH3ar0nYe32XjUbXJfWHgp3udcGlDYrRp/1agjFRNsLCQf+BUBvYbkzruBub+aJcS0/7NaFyZcrGWBePg53C4RcvKGbskfYscrHOaXqAK2eY+Yu2hrtAO6kz1IXI1nCo3S+yiQ4xucCMM/z7ZyRygcujSu1OzZMfN7F2WeRabPfLKhcN966W65jpSmSHq90vjw2uUzLydx7lOhKLUGFbsXZP7dSx3a8J4ILcm6zcN8Bh0G8/LkXx8sZ8ndoELu/Tfi1B7r+bY+3haaFx7bCpzuC7rHEtPe3XJHD9ls3jpdH81KfnMKITHsD6mlqdq+1+rcBc/Q7rkOl+FVZDPS5TKcSUTLhmn/bLTdahmmnqaahuxJR+u3oR04Q3jzGi09SN0boNXG7G/msM1m32Pker3Q3d1Zwyt0MxZEnHsG6/ZO2/3sA+Z980XGda1tmHHmdWuQ5gnzPHwBKG4XBIMmzFlIaF04wrymo50R5XlX2qKQD76JwB1YUIWGRnurvzZKljN1a5YKxW4LiDMfAxFwwKVrToj4s87LwOWbWGYzhzheC4Y4hVx3UyKGoGmU/pQGKRHebgTd1YxLolY3WG5ZeLNOQ+6qGaMCba2pF+4YPgF1APdQ/t+EojaSNb2AiSgPVOIThvsiowtUwCdoV6JpiqRTgvxwgYTFYJ9UwHJF4uo/O+cB7T8FCNRxk32FNVv5XuXSGPQzBVF4243H4o5DXqkaAb8wNuwUhTpCOPUE8kQxnrRmWkpwwL5TTiLzpUK7AIMeXqh9HKPflgF5QRPudjKwCf833vyVrUDMGnCtOCiVbIRwvlHhgmn8BQHZg144IRxt0wahdW2iT19GjtIWENxFU0XRVLF3b4IGHlOuKse2LXvDkVGIZbMvO7hrjq1oZdYJi6Pczxjf7JJtj1SrCkdT9cN8Q3+k1iF1xnZa63cJ1V5jvHSt5uEbumBYta61eiz7WSchFCfwLX8VnROFwBVuC3r7iDKgbrsDLaiH6CX8SapIp5CL3l62ohYr+57BDPCVYFrqu1qgly6WOOR/aPtkJBqKLX9nXbcB1yrnyOQM61Yohch/zODhNc5x7kBHaEsaAX4Tp3exHjBHarYVUhXPa07KdgNR5uBW3eR0H3+hqYc8dttW2CtZEeEjrTRw3MsTl2T7Hyn4ROtQBg2XimfC07sfhQrOKq0LkC2n1NhXKu65Adb21RrGmhGy1oYA+1lLurYUKH9V7oTh/hvjmlloUuLDvKb+PFh2B9ErrVuF9nWbne6DBZd2CWovyQ0L2W+wEMW1bIlTsppnyf2NZhfRgRnFDfG3ofKybL2SWTr7KKWYAVnOsTnNFruPmKkh1Zp2rcKVSaWdV3rwXHNNFP75PGZHiaXVkzrZZPQglJDb2Ck+qb0t1XnsUdkMulmyZocq2YxF7pqYLzUEMHLftMyFTTsGu56/2azGA6v0uXFKuAStHnIQ4P7XAH/PS5BQ9oJZUtvX91fiRrQI3z5l0+GVegsFU6Kv+7NYexQCtTrc95SGSTpVIc0xUymUwhfn19HX9QqZTMKlCtz3mYmiFtBFgOatK3oaGpbNuJRDabxMI0WNlsIrGtMgEUyDfC9zE6k8PM54hgsZ4jMsWVCqoZ6CdoAKd/7gog6aH6A7NCT+TyTPmtPqfGPzXhEnon9/jw2IapxobH3UKv5Vpe8I0ZMPkWlnk7xWZb9wSGv35pJfrydTjgWf/rD7/Dcq9MLk14xsc9E0uTK27hWf+PXK6/H7B/geFZz/ov9AdTRRr3Nqy0YgAAAABJRU5ErkJggg=='
    }
];

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
                <CategoryComponent data={categories}/>
            </div>
        </div>
        );
    }
});

export default HomeComponent;