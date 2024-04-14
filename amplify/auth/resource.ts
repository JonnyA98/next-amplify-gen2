import { defineAuth } from '@aws-amplify/backend';

export const auth = defineAuth({
  loginWith: {
    email: {
      verificationEmailSubject: "Welcome to Prep Flavour! Please Verify Your Email!"
    },
  },
  userAttributes: {
    phoneNumber: {
      required: true,
      mutable: false,
    },
    address: {
      required: true,
      mutable: false,
    },
  },

});
