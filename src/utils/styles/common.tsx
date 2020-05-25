import { StyleSheet } from 'react-native';
import { getWindowWidth, getWindowHeight, STATUSBAR_HEIGHT } from '../../constants';
import { red600, Colors } from '../colors';
const CommonStyle = StyleSheet.create({
  scroll: {
    flex: 1,
    flexDirection: 'column',
    // alignItems: 'stretch'
  },
  container: {
    width: getWindowWidth(),
    height: getWindowHeight(),
    backgroundColor: '#fff',
  },
  content: {

  },
  contentScreen: {
    padding: 16,
    backgroundColor: '#f7f8f8'
  },
  flexRow: {
    flex: 1,
    flexDirection: 'row'
  },
  paddingTop8: {
    paddingTop: 8
  },
  paddingLeft8: {
    paddingLeft: 8
  },
  textBold: {
    fontWeight: '700'
  },
  textRight: {
    textAlign: 'right'
  },
  textUppercase: {
    textTransform: 'uppercase'
  },
  textError: {
    color: Colors.error
  },
  buttonFooterContainer: {
    marginBottom: 24
  },
  buttonRounded: {
    alignSelf: 'center',
    backgroundColor: '#1d3051',
    height: 56,
    width: 200
  },
  buttonRoundedText: {
    color: '#BCCD00',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  buttonTransparentText: {
    color: Colors.dark,
    textDecorationLine: 'underline',
    fontWeight: 'normal',
    fontSize: 16
  },
});

export default CommonStyle;