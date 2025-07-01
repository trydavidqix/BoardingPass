import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: "center",
  },
  header: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: colors.white,
    fontFamily: "FontFamily.extrabold",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 14,
    color: colors.white,
    fontFamily: "FontFamily.medium",
  },
  ticket: {
    backgroundColor: colors.white,
    width: "100%",
    borderRadius: 22,
    overflow: "hidden",
    paddingBottom: 24,
  },
  content: {
    padding: 20,
  },
  flight: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 52,
  },
  duration: {
    alignItems: "center",
  },
  hours: {
    color: colors.gray[800],
    fontSize: 14,
    fontFamily: "FontFamily.regular",
  },
  label: {
    color: colors.gray[400],
    fontSize: 12,
    fontFamily: "FontFamily.regular",
    textTransform: "uppercase",
  },
  name: {
    color: colors.black,
    fontSize: 24,
    fontFamily: "FontFamily.bold",
  },
  details: {
    marginTop: 52,
  },
  inline: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  footer: {
    width: "100%",
    padding: 20,
    flexDirection: "row",
    gap: 22,
  },
  footerContent: {
    flex: 1,
    gap: 24,
  },
  footerRight: {
    flexDirection: "column",
    alignItems: "flex-end",
    gap: 10,
  },
});
