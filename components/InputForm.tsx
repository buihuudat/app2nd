import React from 'react';
import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputChangeEventData,
  View,
} from 'react-native';
import colors from '../constants/colors';
import {Icon} from 'react-native-elements';

interface InputProps {
  label: string;
  placeholder: string;
  type: KeyboardTypeOptions | undefined;
  secure?: boolean;
  value: string;
  setValue: (value: string) => void;
  autoCap?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  isPasswordShow: boolean;
  setIsPasswordShow: (isPasswordShow: boolean) => void;
  icon: string;
}

const InputForm = (props: InputProps) => {
  const {
    icon,
    label,
    placeholder,
    type,
    secure,
    value,
    setValue,
    autoCap = 'none',
    isPasswordShow,
    setIsPasswordShow,
  } = props;

  const handleChangeInput = (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    setValue(event.nativeEvent.text);
  };

  return (
    <View>
      <Text>{label}</Text>
      <View style={styles.inputSubContainer}>
        <Icon
          name={icon}
          size={22}
          color={colors.DEFAULT_GREY}
          style={{paddingRight: 5}}
        />

        <TextInput
          placeholderTextColor={colors.DEFAULT_GREY}
          selectionColor={colors.DEFAULT_GREY}
          style={styles.inputText}
          placeholder={placeholder}
          keyboardType={type}
          secureTextEntry={isPasswordShow}
          aria-label={label}
          value={value}
          autoCapitalize={autoCap}
          onChange={handleChangeInput}
        />
        {secure && (
          <Icon
            name={isPasswordShow ? 'visibility' : 'visibility-off'}
            size={22}
            color={colors.DEFAULT_GREY}
            style={{marginRight: 10}}
            onPress={() => setIsPasswordShow(!isPasswordShow)}
          />
        )}
      </View>
    </View>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  input: {
    borderColor: 'gray',
    width: '100%',
  },
  inputSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    padding: 10,
    borderRadius: 8,
    borderWidth: 0.5,
    justifyContent: 'center',
  },
  inputText: {
    fontSize: 18,
    textAlignVertical: 'center',
    padding: 0,
    height: '100%',
    width: 100,
    color: colors.DEFAULT_BLACK,
    flex: 1,
  },
});
