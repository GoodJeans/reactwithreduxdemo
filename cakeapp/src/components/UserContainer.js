import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../redux'

function UserContainer() {

    useEffect(( userData, fetchUsers)=>{
        fetchUsers()
    }, [])
    

    return userData.loading? (  
        <div>
           <h2>Loading..</h2>
        </div>
    ) :userData.error? (
        <h2>{userData.error}</h2>
    )
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchUsers: () => dispatchEvent(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
