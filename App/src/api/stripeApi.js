import axios from "axios";
const API_URL = "http://localhost:3000"

// get stripe key Api call
export const getStripeApiKey = async () => {
    try {
        const response = await axios.get(`${API_URL}/stripe_api_key`);
        console.log("Response :", response.data)
        return response;
    }
    catch (error) {
        console.log(error);
    }
};

// process payment Api call 
export const processPayment = async () => {
    try {
        const response = await axios.post(`${API_URL}/process_payment`);
        console.log("Response :", response.data)
        return response;
    }
    catch (error) {
        console.log(error);
    }
};