import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import FormField from '../components/FormField';
import CustomButton from '../components/CustomButton';

interface FormData {
  email: string;
  password: string;
}

const SignUp = () => {
  const [formData, setFormData] = useState<FormData>({ email: '', password: '' });
  function submitForm(formData: FormData) {

    
  }
  return (
    <View style={styles.container}>
      <Text>SignUp</Text>
      <View style={styles.form}>
        <FormField
          name="Email"
          keyboardType="email-address"
          data={formData.email}
          setData={(e) => setFormData({ ...formData, email: e })}
        />
        <FormField
          name="Password"
          data={formData.password}
          setData={(e) => setFormData({ ...formData, password: e })}
        />
      </View>
      <CustomButton handlePress={() => submitForm} text={'Submit'} />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 30,
    height: '100%',
    paddingTop: 30,
  },
  form: {
    width: '100%',
  },
});
