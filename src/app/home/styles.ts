import { StyleSheet } from "react-native"

import { colors } from "@/styles/colors"
import { fontFamily } from "@/styles/fontFamily"

export const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.black,
  },
  header: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: colors.white,
    fontSize: 24,
    fontFamily: fontFamily.extrabold,
  },
  subtitle: {
    color: colors.gray[300],
    fontSize: 14,
    fontFamily: fontFamily.medium,
  },
  ticket: {
    backgroundColor: colors.white,
    borderRadius: 22,
    overflow: "hidden",
  },
  content: {
    padding: 20,
  },
  flight: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 62,
  },
  duration: {
    alignItems: "center",
  },
  hours: {
    color: colors.gray[800],
    fontSize: 14,
    fontFamily: fontFamily.regular,
  },
  label: {
    color: colors.gray[400],
    fontSize: 12,
    textTransform: "uppercase",
    fontFamily: fontFamily.regular,
  },
  name: {
    fontSize: 22,
    fontFamily: fontFamily.bold,
  },
  details: {
    marginTop: 42,
    gap: 32,
  },
  inline: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  footer: {
    width: "100%",
    padding: 20,
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },
  footerContent: {
    flex: 1,
    gap: 24,
  },
  qrCode: {
    width: 130,
    height: 130,
    backgroundColor: "red",
  },
})
