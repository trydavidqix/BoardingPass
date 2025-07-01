import { StyleSheet } from "react-native";

import { colors } from "@styles/colors";
import { fontFamily } from "@styles/fontFamily";

export const styles = StyleSheet.create({
    label : {
        color: colors.gray[400],
        fontFamily: fontFamily.regular,
        textTransform: "uppercase",
        fontSize: 10,
    },
    value: {
        color: colors.black,
        fontFamily: fontFamily.medium,
        fontSize: 16,
    },
})