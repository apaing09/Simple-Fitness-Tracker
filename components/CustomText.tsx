import React from "react";
import { Text } from "react-native";
import GlobalStyles from "../constants/GlobalStyles";
import { StyleProp, TextStyle } from "react-native";

interface CustomTextProps {
  children: string;
  textStyle?: StyleProp<TextStyle>;
}

const CustomText = ({ children, textStyle }: CustomTextProps) => {
  return <Text style={[GlobalStyles.text, textStyle]}>{children}</Text>;
};

export default CustomText;
