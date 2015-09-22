let React = require('react-native');
let {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

let Layout = require('./app/Layout');

let SwipeToDismiss = React.createClass({
  render() {
    return <Layout />;
  }
});

let styles = StyleSheet.create({});

AppRegistry.registerComponent('SwipeToDismiss', () => SwipeToDismiss);
