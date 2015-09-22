let React = require('react-native');
let {
  StyleSheet,
  View,
  Text,
  PixelRatio
} = React;

let Row = React.createClass({
  // Configuration
  displayName: 'Row',

  getButtons() {
    return [
      {
        text: 'Dismiss',
        onPress: () => this.props.dismiss(this.props.data),
        backgroundColor: 'red'
      }
    ];
  },

  // Component Render
  render() {
    return (
      <View style={styles.row}>
        <Text style={styles.index}>{this.props.data.index}</Text>
        <Text style={styles.text}>{this.props.data.text}</Text>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  row: {
    borderColor: 'black',
    borderWidth: 1 / PixelRatio.get(),
    flexDirection: 'row',
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 5
  },
  index: {
    marginRight: 15,
    flex: 1,
    textAlign: 'center',
    alignSelf: 'center'
  },
  text: {
    flex: 8
  }
});

module.exports = Row;
