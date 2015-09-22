let React = require('react-native');
let {
  StyleSheet,
  View,
  Text
} = React;
let Row = React.createClass({
  // Configuration
  displayName: 'Row',
  mixins: [],
  statics: {},
  propTypes: {},

  // Initial Value (State and Props)
  getDefaultProps() {
    return {};
  },
  getInitialState() {
    return {};
  },

  // Mounting Lifecycle Events
  componentWillMount() {},
  componentDidMount() {},

  // Updating Lifecycle Events
  componentWillReceiveProps(newProps) {},
  shouldComponentUpdate(newProps, newState) {},
  componentWillUpdate(newProps, newState) {},
  componentDidUpdate(oldProps, oldState) {},

  // Unmounting Lifecycle Events
  componentWillUnmount() {},

  // Data Getters
  getFullName() {},

  // Click Handlers
  handleChangeNameClick() {},

  // Sub-render
  renderFullName() {},

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
