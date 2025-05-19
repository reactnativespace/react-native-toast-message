import { useRef, useState } from 'react';
import ToastMessage, { ToastMessageRef } from './components/ToastMessage';
import Button from './components/Button';
import { SafeAreaView } from 'react-native';

export default function App() {

  const [toastType, setToastType] = useState<'success' | 'danger' | 'info' | 'warning'>('success');

  const toastRef = useRef<ToastMessageRef>(null);

  const handleShowToast = () => {
    if (toastRef.current) {
      toastRef.current.show();
    }
  };

  return (
      <SafeAreaView style={{
        flex: 1,
        backgroundColor:'#1e272e',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <ToastMessage
            type={toastType}
            text='Lorem Ipsum Text'
            description='Lorem Ipsum Description'
            ref={toastRef} />

        <Button type='success' text='Success' onPress={() => { setToastType('success'); handleShowToast(); }} />
        <Button type='danger' text='Danger' onPress={() => { setToastType('danger'); handleShowToast(); }} />
        <Button type='info' text='Info' onPress={() => { setToastType('info'); handleShowToast(); }} />
        <Button type='warning' text='Warning' onPress={() => { setToastType('warning'); handleShowToast(); }} />
      </SafeAreaView>
  );
};