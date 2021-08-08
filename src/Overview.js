import React from 'react'

//handles the task rendering
class Overview extends React.Component {
render(){
    const {list} = this.props
    return (
        <div>{list}</div>
    )
}
}

export default Overview