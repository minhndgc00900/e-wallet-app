import React, { Component } from 'react';
import { View, TextInput, Text, Animated, TouchableOpacity, TextInputProps } from 'react-native';
import { ErrorMessage } from 'react-hook-form';
import PropTypes from 'prop-types';
import { Icon } from 'native-base';

import styles from './styles';
import { grey600 } from '../../utils/colors/index';
import CommonStyle from '../../utils/styles/common';


interface DefaultProps extends TextInputProps {
  containerStyle?: any,
  inputRef?: any,
  label?: string,
  mode?: 'pin',
  hasIcon?: boolean,
  hideFloating?: boolean,
  iconType?: "AntDesign" | "Entypo" | "EvilIcons" | "Feather" | "FontAwesome" | "FontAwesome5" | "Foundation" | "Ionicons" | "MaterialCommunityIcons" | "MaterialIcons" | "Octicons" | "SimpleLineIcons" | "Zocial",
  icon?: string,
  name?: string,
  hasError?: boolean,
  errors?: any,
  setValue?: any,
}

class TextInputRound extends Component<DefaultProps> {
  static MODE = {
    PIN: 'pin'
  }

  ICON = {
    secureSymbol: '✶',
    eye: 'eye',
    eyeSlash: 'eye-slash'
  }

  state = {
    value: '',
    isFocused: false,
    secureTextEntry: false,
    secureIcon: this.ICON.eye,
  };
  _animatedIsFocused: any;

  componentWillMount() {
    this._animatedIsFocused = new Animated.Value(!this.props.value ? 0 : 1);
    this.setState({ secureTextEntry: this.props.secureTextEntry })
  }

  handleFocus = () => this.setState({ isFocused: true });
  handleBlur = () => this.setState({ isFocused: false });

  componentDidUpdate() {
    Animated.timing(this._animatedIsFocused, {
      toValue: (this.state.isFocused || !!this.props.value) ? 1 : 0,
      duration: 200,
      useNativeDriver: false
    }).start();
  }

  changeSecureTextEntry = () => {
    const { secureTextEntry } = this.state;
    this.setState({
      secureIcon: !secureTextEntry ? this.ICON.eye : this.ICON.eyeSlash,
      secureTextEntry: !secureTextEntry
    })
  }

  onValueChange = (value: string) => {
    const { setValue, name, onChangeText } = this.props;
    this.setState({ value });
    if (!!setValue) setValue(name, value, true);
    if (!!onChangeText) onChangeText(value);
  }

  render() {
    const {
      containerStyle,
      label,
      hideFloating,
      mode,
      hasIcon,
      inputRef,
      iconType,
      icon,
      hasError,
      name,
      errors,
      ...props
    } = this.props;
    const { value, secureTextEntry, secureIcon } = this.state;
    // const style = defaultStyles;
    const animatedLabelViewStyle = {
      top: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [26, 0],
      }),
      // backgroundColor: this._animatedIsFocused.interpolate({
      //   inputRange: [0, 0],
      //   outputRange: ['transparent', 'white'],
      // })
    };

    const animationLabelStyle = {
      fontSize: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [16, 10],
      }),
    };

    const textValue = props.value || '';
    return (
      <View style={[styles.layout, containerStyle]}>
        <View style={[{ paddingTop: 8, minWidth: 150 }]}>
          {!!label && !hideFloating && <Animated.View style={[styles.viewLabel, animatedLabelViewStyle]} pointerEvents={'none'}>
            <Animated.Text style={[styles.label, animationLabelStyle]}>{label}</Animated.Text>
          </Animated.View>}
          <TextInput
            style={[styles.inputRound, mode === TextInputRound.MODE.PIN && !!value && [{ letterSpacing: 20 }, secureTextEntry ? { color: 'white' } : { color: 'black' }]]}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            blurOnSubmit
            underlineColorAndroid="transparent"
            selection={{
              start: textValue.length,
              end: textValue.length,
            }}
            caretHidden={secureTextEntry || TextInputRound.MODE.PIN === mode}
            contextMenuHidden={secureTextEntry || TextInputRound.MODE.PIN === mode}
            {...props}
            secureTextEntry={secureTextEntry}
            placeholder={(hideFloating ? label : '')}
            placeholderTextColor={'black'}
            ref={inputRef}
            onChangeText={this.onValueChange}
          />
          {hasIcon && mode === TextInputRound.MODE.PIN && (
            [<TouchableOpacity key={0} style={styles.rightIcon}
              onPress={() => { this.changeSecureTextEntry() }} >
              <Icon type={'FontAwesome'} name={secureIcon} style={{ fontSize: 20 }} />
            </TouchableOpacity>,
            (secureTextEntry && (<View key={1} pointerEvents={'none'} style={styles.pinSecureView}>
              <Text style={styles.pinSecureText}>{Array((textValue.length)).fill(this.ICON.secureSymbol)}</Text>
            </View>))
            ]
          )}
        </View>
        {!!name && !!errors[name] && (
          <ErrorMessage errors={errors} name={name}>
            {({ message }) => <Text style={[CommonStyle.textError, { textAlign: 'center' }]}>{message}</Text>}
          </ErrorMessage>
        )}
      </View>
    );
  }
}

export default TextInputRound;