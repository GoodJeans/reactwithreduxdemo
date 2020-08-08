import React from 'react';
import {connect} from 'react-redux';
import {buyCookies} from '../redux/index';

function CookieContainer(props){
    return(
        <div>
            <h2>Number of Cookies - {props.numOfCookies}</h2>
            <button onClick={props.buyCookies}>Buy Cookies</button>
        </div>
    )
}

const mapStateToProps = state => {
    console.log("cookie state to props"+state)
    return{
        numOfCookies : state.cookies.numOfCookies
    }
}

const mapDispatchToProps = dispatch => {
    console.log("cookie state to props dispatch")
    return{
        buyCookies : () =>dispatch(buyCookies())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CookieContainer)