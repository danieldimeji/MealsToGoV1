import React, { useState } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { initializeApp } from "firebase/app";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
  useFonts as useDMSans,
  DMSans_400Regular,
} from "@expo-google-fonts/dm-sans";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { Navigation } from "./src/infrastructure/navigation";

const firebaseConfig = {
  apiKey: "AIzaSyCkRiPuOUQpR6R1FE_qrQdSDbH_3YH6C0Q",
  authDomain: "mealtogo-a20ca.firebaseapp.com",
  projectId: "mealtogo-a20ca",
  storageBucket: "mealtogo-a20ca.appspot.com",
  messagingSenderId: "332162761233",
  appId: "1:332162761233:web:58a4301436ee97ba9127b0",
};

initializeApp(firebaseConfig);

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useDMSans({
    DMSans_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
