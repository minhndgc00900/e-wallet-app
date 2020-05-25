/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import signup from './src/components/users/signup/signup'

AppRegistry.registerComponent(appName, () => signup);
