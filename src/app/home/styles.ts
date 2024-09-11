import { StyleSheet } from "react-native"

export const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#D7D7D7",
    padding: 16,
  },
  header: {
    width: "100%",
    marginVertical: 62,
    flex: 1,
    padding: 32,
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
  title: {
    flex: 1,
    color: "#000000",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },
  ticket: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    overflow: "hidden",
  },
  content: {
    padding: 20,
  },
  label: {
    color: "#AFAFB4",
    fontSize: 12,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  name: {
    fontSize: 22,
    fontWeight: "700",
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
  footerDetails: {
    flex: 1,
    gap: 24,
  },
  qrCode: {
    width: 130,
    height: 130,
    backgroundColor: "red",
  },
})
