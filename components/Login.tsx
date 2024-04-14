"use client";
import { Authenticator } from "@aws-amplify/ui-react";

const formFields = {
    signIn: {
      username: {
        placeholder: 'Enter Your Email Here',
        isRequired: true,
        label: 'Email:'
      },
    },
  }
  
  export default function App() {
    return (
      <Authenticator formFields={formFields}>
        {({ signOut }) => <button onClick={signOut}>Sign out</button>}
      </Authenticator>
    );
  }