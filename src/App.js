import React from 'react'

class App extends React.Component {

  state = {
    data: []
  }

  getPeople = () => {
    return this.state.data.people.map(el => <div>{el.name}</div>)
  }

  render() {
    return(
      this.state.data.length === 0 ? null : <div>{this.getPeople()}</div>
    )
  }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
    .then(res => res.json())
    .then(data => this.setState({data: data}))
  }
}

export default App
