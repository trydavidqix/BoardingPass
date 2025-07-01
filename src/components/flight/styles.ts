import { StyleSheet } from "react-native";

import { colors } from "@styles/colors";
import { fontFamily } from "@styles/fontFamily";

export const styles = StyleSheet.create({
    label : {
        color: colors.gray[400],
        fontFamily: fontFamily.regular,
        textTransform: "uppercase",
        fontSize: 12,
    },
    value: {
        color: colors.black,
        fontFamily: fontFamily.bold,
        fontSize: 42,
        marginTop: -10,
    },
})