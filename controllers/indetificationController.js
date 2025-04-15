// Import HMAC token generator from utils
import generateHmacToken from "../utils/hmacTokenGenerator.js";

// Controller function to handle visitor identity verification
const VisitorIdentityVerification =  async (req, res) => {
    try {
        // Fech the visitor's unique ID, email, and phone number from the request body
        const { visitorUniqueId, visitorEmail, visitorPhone } = req.body;
        
        // Check if the visitor's unique ID, email, and phone number are provided
        if (!visitorUniqueId || !visitorEmail || !visitorPhone) {
            return res.status(400).json({ message: 'Visitor unique ID, email, and phone number are required.' });
        }

        // Fetch the secret key from the environment variables
        const secretKey = process.env.HMAC_SECRET_KEY;

        // Generate the HMAC token using the visitor's unique ID, email, and phone number
        // Unique ID has more priority then email and then phone number

        // The HMAC token is generated using the secret key and the visitor's unique ID or email, or phone number
        const hmacToken = generateHmacToken(secretKey, visitorUniqueId || visitorEmail || visitorPhone); 

        // Return the generated HMAC token as a response
        return res.status(200).json({ hmacToken });

    } catch (error) {
        // Log the error for debugging purposes
        console.error('Error in VisitorIdentityVerification:', error);

        // Return an error response if any error occurs
        return res.status(500).json({ message: 'An error occurred during identity verification.' });        
    }
}

// Export the controller function
// This function is responsible for verifying the identity of a visitor
export default VisitorIdentityVerification;