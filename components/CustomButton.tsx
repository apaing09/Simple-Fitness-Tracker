import { StyleProp, TextStyle, Pressable, ViewStyle } from "react-native";
import GlobalStyles from "../constants/GlobalStyles";
import CustomText from "./CustomText";

interface CustomButtonProps {
  text: string;
  textStyle?: StyleProp<TextStyle>;
  pressableStyle?: StyleProp<ViewStyle>;
  onPress: () => void;
}

const CustomButton = ({
  text,
  textStyle,
  pressableStyle,
  onPress,
}: CustomButtonProps) => {
  return (
    <Pressable style={[GlobalStyles.button, pressableStyle]} onPress={onPress}>
      <CustomText textStyle={[GlobalStyles.buttonText, textStyle]}>
        {text}
      </CustomText>
    </Pressable>
  );
};

export default CustomButton;
