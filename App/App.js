import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from 'react-native';

// stripe imports 
import { StripeProvider } from "@stripe/stripe-react-native";
import { getStripeApiKey } from './src/api/stripeApi';
import { useStripe } from "@stripe/stripe-react-native";

const App = () => {

  // getting stripe publishable key
  const [stripeApiKey, setStripeApiKey] = useState('')

  useEffect(() => {
    getStripeApiKeyData()
  }, [])

  const getStripeApiKeyData = async () => {
    const { data } = await getStripeApiKey()
    setStripeApiKey(data.stripeApiKey)
    console.log(data.stripeApiKey)
  }

  // payment process
  const stripe = useStripe();

  const Pay = async (event) => {

    const amount = 200;
    
    try {
      const response = await fetch("http://localhost:3000/process_payment", {
        method: "POST",
        body: JSON.stringify({ amount: amount }),
      });
      const data = await response.json();
      if (!response.ok) return Alert.alert(data.message);
      const clientSecret = data.client_secret;
      const initSheet = await stripe.initPaymentSheet({
        paymentIntentClientSecret: clientSecret,
        merchantDisplayName: 'Merchant Name',
      });
      if (initSheet.error) return Alert.alert(initSheet.error.message);
      const presentSheet = await stripe.presentPaymentSheet({
        clientSecret,
      });
      if (presentSheet.error) return Alert.alert(presentSheet.error.message);

      Alert.alert("Payment complete, thank you!");
    } catch (err) {
      console.error(err);
      Alert.alert("Something went wrong, try again later!");
    }
  };


  return (

    <StripeProvider publishableKey={stripeApiKey}>
      <View style={styles.container}>
        <Button title="Stripe Pay - 200" onPress={Pay} />        
      </View>
    </StripeProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
;

export default App;