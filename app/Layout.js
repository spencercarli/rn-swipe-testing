let React = require('react-native');
let {
  StyleSheet,
  View,
  Text,
  ListView
} = React;

let _ = require('underscore');
let Row = require('./Row');

let Layout = React.createClass({
  // Configuration
  displayName: 'Layout',

  getInitialState: function() {
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => {
      return r1 !== r2
    }});
    return {
      dataSource: ds.cloneWithRows(this.props.data),
      data: this.props.data
    };
  },

  handleDismiss(item) {
    let data = this.state.data;
    data = _.without(data, item);
    this.setState({data: data, dataSource: this.state.dataSource.cloneWithRows(data)})
  },

  // Component Render
  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Row data={rowData} dismiss={this.handleDismiss} />}
          initialListSize={20}
          />
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEF3'
  }
});

module.exports = Layout;
