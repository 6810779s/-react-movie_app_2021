import React from 'react';

class App extends React.Component{
  state={
    isLoading: true,
  };

  componentDidMount(){
    //영화 데이터 로딩
    setTimeout(()=>{
      this.setState({isLoading: false})
    },3000);
  }
  render(){
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading...' : "Let's enjoy Movie"} </div>;
  }
}


export default App;
