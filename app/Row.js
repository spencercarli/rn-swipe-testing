let React = require('react-native');
let {
  StyleSheet,
  View,
  Text,
  PixelRatio,
  Animated,
  PanResponder,
  TouchableHighlight,
} = React;

let Row = React.createClass({
  // Configuration
  displayName: 'Row',

  getInitialState() {
    return {
      transformAnimation: new Animated.Value(0),
      opacityAnimation: new Animated.Value(1)
    }
  },

  handleDismiss() {
    Animated.parallel([
      Animated.timing(
        this.state.opacityAnimation,
        { toValue: 0 },
      ),
      Animated.timing(
        this.state.transformAnimation,
        { toValue: -500 },
      )
    ]).start(() => {
      console.log('completed');
      this.props.dismiss(this.props.data);
    });
  },

  // Component Render
  render() {
    let rowStyles = [styles.row, {
      transform: [{
        translateX: this.state.transformAnimation
      }],
      opacity: this.state.opacityAnimation
    }];

    return (
      <Animated.View
        style={rowStyles}
      >
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.index}>{this.props.data.index}</Text>
          <Text style={styles.text}>{this.props.data.text}</Text>
        </View>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.handleDismiss()}
        >
          <Text>Dismiss</Text>
        </TouchableHighlight>
      </Animated.View>
    );
  }

});

const styles = StyleSheet.create({
  row: {
    borderColor: 'black',
    borderWidth: 1 / PixelRatio.get(),
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
  },
  button: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    marginTop: 15,
    backgroundColor: 'gray',
    alignItems: 'center'
  }
});

module.exports = Row;
