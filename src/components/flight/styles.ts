import { StyleSheet } from "react-native"

import { colors } from "@/styles/colors"
import { fontFamily } from "@/styles/fontFamily"

export const s = StyleSheet.create({
  label: {
    color: colors.gray[400],
    fontSize: 12,
    textTransform: "uppercase",
    fontFamily: fontFamily.regular,
  },
  value: {
    fontSize: 42,
    color: colors.black,
    fontFamily: fontFamily.bold,
    marginTop: -7,
  },
})
