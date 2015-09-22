let React = require('react-native');
let {
  StyleSheet,
  View,
  Text
} = React;

let Swipeout = require('react-native-swipeout');

const swipeoutBtns = [
  {
    text: 'Dismiss',
    onPress: () => console.log('dismiss'),
    backgroundColor: 'red'
  }
];

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
      <Swipeout
        right={this.getButtons()}
        autoClose={true}
        backgroundColor="white"
      >
        <View style={styles.row}>
          <Text style={styles.index}>{this.props.data.index}</Text>
          <Text style={styles.text}>{this.props.data.text}</Text>
        </View>
      </Swipeout>
    );
  }
});

const styles = StyleSheet.create({
  row: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 5,
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
