import { Home } from "@/app/home"
import { StatusBar } from "expo-status-bar"
import {
  useFonts,
  Poppins_700Bold,
  Poppins_500Medium,
  Poppins_400Regular,
  Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins"

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_500Medium,
    Poppins_400Regular,
    Poppins_800ExtraBold,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Home />
    </>
  )
}
