import { Stack } from "expo-router";
import "./global.css";
import { useFonts } from "expo-font";
import {
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { Inter_400Regular } from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
import tailwindConfig from "@/tailwind.config";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Inter_400Regular,
  });
  const colors = tailwindConfig.theme?.extend?.colors as Record<string, any>;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="light" backgroundColor="#0A0A0A" />
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
            contentStyle: { boxShadow: "none", shadowColor: "inherit" },
          }}
        />
      </Stack>
    </SafeAreaView>
  );
}
