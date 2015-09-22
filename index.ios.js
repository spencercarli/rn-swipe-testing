let React = require('react-native');
let {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

let Layout = require('./app/Layout');

let SwipeToDismiss = React.createClass({
  getInitialState() {
    let data = [];

    for (i=0; i < 100; i++) {
      data.push({
        index: i,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dolor.",
        dismissed: false
      });
    }
    return {
      data: data
    }
  },

  render() {
    return <Layout data={this.state.data} />;
  }
});

let styles = StyleSheet.create({});

AppRegistry.registerComponent('SwipeToDismiss', () => SwipeToDismiss);
