let React = require('react-native');
let {
  StyleSheet,
  View,
  Text,
  ListView
} = React;

let Row = require('./Row');

let Layout = React.createClass({
  // Configuration
  displayName: 'Layout',

  getInitialState: function() {
    let data = [];

    for (i=0; i < 100; i++) {
      data.push({index: i, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dolor."});
    }

    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(data),
    };
  },

  // Component Render
  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Row data={rowData} />}
          initialListSize={20}
          />
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  }
});

module.exports = Layout;
