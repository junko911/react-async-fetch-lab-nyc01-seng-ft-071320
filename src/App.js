import React from 'react'

class App extends React.Component {

  state = {
    data: []
  }

  render() {
    return <div>App</div>
  }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
    .then(res => res.json())
    .then(data => this.setState({data: data}))
  }
}

export default App
