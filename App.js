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
  const toastRef = useRef(null);

  const handleShowToast = () => {
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

      <Button type="success" text="Success" onPress={() => { setToastType("success"); handleShowToast(); }} />
      <Button type="danger" text="Danger" onPress={() => { setToastType("danger"); handleShowToast(); }} />
      <Button type="info" text="Info" onPress={() => { setToastType("info"); handleShowToast(); }} />
      <Button type="warning" text="Warning" onPress={() => { setToastType("warning"); handleShowToast(); }} />

    </View>
  );
};