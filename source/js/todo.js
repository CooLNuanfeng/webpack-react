var React = require('react');

var Todo = React.createClass({
    render : function(){
        return (
            <div>
                <h1>Hello React && webpack</h1>
                <div className="bg bg1"></div>
                <div className="bg bg2"></div>
                <div className="bg bg3"></div>
                <div className="bg bg4"></div>
            </div>
        )
    }
});

module.exports = Todo;
