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
    return <div>Hello</div>;
  }
}
