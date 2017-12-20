/**
 * Created by EasyLiang on 2017/6/13.
 */
var Search=React.createClass({
    propTypes:function(){
        text:React.PropTypes.string.isRequired
    },
    render:function(){
        return (<div>
            {this.props.searchType}:<input type="text"/>
    <button>Search</button>
    </div>
)
}
});