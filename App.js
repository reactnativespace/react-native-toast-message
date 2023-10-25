/*
//Single
import { useRef } from 'react';
import { View } from 'react-native';

import ToastMessage from './components/ToastMessage';
import Button from './components/Button';

export default function App() {

  const toastRef = useRef(null);

  const handleShowToast = () => {
    if (toastRef.current) {
      toastRef.current.show();
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <ToastMessage
        type="success"
        text="This is a success toast message!"
        description="This is description text"
        timeout={2000}
        ref={toastRef} />

      <Button type="success" text="Success" onPress={handleShowToast} />

    </View>
  );
};
*/

//Multiple
import { useRef, useState } from 'react';
import { View } from 'react-native';

import ToastMessage from './components/ToastMessage';
import Button from './components/Button';

export default function App() {

  const [toastType, setToastType] = useState("success");
  const [toastText, setToastText] = useState("Main text");
  const [toastDescription, setToastDescription] = useState("Description");
  const toastRef = useRef(null);

  const handleShowToast = (type, text, description) => {
        setToastType(type);
        setToastText(text);
        setToastDescription(description);
        
        if (toastRef.current) {
          toastRef.current.show();
        }
      };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <ToastMessage
        type={toastType}
        text="Lorem Ipsum Text"
        description="Lorem Ipsum Description"
        ref={toastRef} />

      <Button type="success" text="Success" onPress={() => { handleShowToast("Success", "Text Success", "Success"); }} />
      <Button type="danger" text="Danger" onPress={() => { handleShowToast("Danger", "Text Danger", "Danger"); }} />
      <Button type="info" text="Info" onPress={() => { handleShowToast("Info", "Text Info", "Info"); }} />
      <Button type="warning" text="Warning" onPress={() => { handleShowToast("Warning", "Text Warning", "Warning"); }} />

    </View>
  );
};
