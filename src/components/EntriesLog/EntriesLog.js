import React, { Component } from 'react';
import firebase from '../../utils/firebaseUtils';

export default class EntriesLog extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    let data = [];
    firebase
      .firestore()
      .collection('entries')
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          data.push(doc.data());
        });
      });
    this.setState({ data });
  }
  render() {
    const { data } = this.state;
    console.log(data.length);
    if (data.length > 0) {
      return (
        <div>
          {data.map(entry => (
            <div>entry</div>
          ))}
        </div>
      );
    } else {
      return <div>Loading</div>;
    }
  }
}
