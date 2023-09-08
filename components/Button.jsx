import { Text, TouchableOpacity } from 'react-native';

const Button = ({ type, text, onPress }) => {

    const BUTTON_TYPE = {
      success: {
        backgroundColor: '#2ecc71'
      },
      danger: {
        backgroundColor: '#e74c3c'
      },
      info: {
        backgroundColor: '#3498db'
      },
      warning: {
        backgroundColor: '#f39c12'
      }
    }
  
    const backgroundColor = BUTTON_TYPE[type].backgroundColor;
  
    return (
      <TouchableOpacity style={{ width: 250, paddingVertical: 12, justifyContent: 'center', alignItems: 'center', backgroundColor: backgroundColor, borderRadius: 10, marginBottom: 8 }} onPress={onPress}>
        <Text style={{ fontSize: 18, fontWeight: '400', color: '#FFF' }}>{text}</Text>
      </TouchableOpacity>
    )
};

export default Button;
