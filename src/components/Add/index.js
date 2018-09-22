import React, {Component} from 'react';

class Add extends Component {

  render() {

    return (
      <div>
        <form action="http://localhost:3001/add" method="post">
          <input type="text" name="title" />
          <textarea name="body" id="" cols="30" rows="10"></textarea>
          <input type="text" name="author" />
          <input type="submit" value="Save"/>

        </form>
      </div>
    )
  }
}



export default Add;
