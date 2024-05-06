import { Modal, Text, View } from "react-native"
import CustomButton from "../components/CustomButton";
import GlobalStyles from "../constants/GlobalStyles";
import Colors from "../constants/Colors";

interface AcceptTermsModalProps {
    onAccept: () => void;
}

const AcceptTermsModal = ({onAccept} : AcceptTermsModalProps) => {
  return (
    <Modal animationType="slide" transparent={true} visible={true}>
      <View 
      style={[
        GlobalStyles.screenContainer, 
        { backgroundColor: Colors.backgroundDimmed },
        ]}
      >
        <Text style={GlobalStyles.text}>Are you ready to get started on your fitness journey?</Text>
        <CustomButton text="Yes" onPress={onAccept} />
      </View> 
    </Modal>
  
  );
};
export default AcceptTermsModal;
