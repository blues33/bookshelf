import React from 'react';

class Add extends React.Component {
  state = {
    title: '',
    author: '',
    description: ''
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('handleSubmit')

    const book = {
      title: this.state.title,
      author: this.state.author,
      description: this.state.description
    };



    this.props.add(book);
  }
  
  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <input 
            type="text" 
            value={ this.state.title } 
            name="title" 
            onChange={ this.handleInputChange }
            />
          <textarea 
            name="description" 
            value={ this.state.description } 
            id="" 
            cols="30" 
            rows="10" 
            onChange={ this.handleInputChange }
            />
          <input 
            type="text" 
            value={ this.state.author } 
            name="author" 
            onChange={ this.handleInputChange }
            />
          <input type="submit" value="Save" />
        </form>
      </div>
    )
  }

}

export default Add;
