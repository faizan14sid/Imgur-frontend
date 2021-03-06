import React from 'react'

class Imgur extends React.Component {
   
    handleClick = () => {
    }
  
    render() {
      return (
        <button style={{backgroundColor:"green"}} onClick={this.handleClick}>
            Imgur
        </button>
      );
    }
  }

export default Imgur
