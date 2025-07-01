import { Text, ImageBackground, View } from "react-native";
import { styles } from "./styles";
import { Flight } from "@components/flight";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { Info } from "@/components/info";
import QRCode from "react-native-qrcode-svg";
import Svg, { Line, Circle } from "react-native-svg";
export function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.header}
        source={require("@assets/GettyImages-486334510_CC36FC20-0DCE-7408-77C72CD93ED4A476-cc36f9e70fc9b45_cc36fc73-07dd-b6b3-09b619cd4694393e.jpg")}
      >
        <Text style={styles.title}>Cartão de Embarque</Text>
        <Text style={styles.subtitle}>Falta 45 dias pra sua viagem</Text>
      </ImageBackground>
      <View style={styles.ticket}>
        <View style={styles.content}>
          <View style={styles.flight}>
            <Flight label="Porto" value="OPO" />
            <View style={styles.duration}>
              <Ionicons name="airplane-sharp" size={32} color={colors.black} />
              <Text style={styles.hours}>11h 10m</Text>
            </View>
            <Flight label="São Paulo" value="GRU" />
          </View>
          <Text style={styles.label}>Passageiro</Text>
          <Text style={styles.name}>David Macêdo</Text>
          <View style={styles.details}>
            <View style={styles.inline}>
              <Info label="Data" value="09 de Agosto" />
              <Info label="Embarque" value="21:15" />
            </View>
          </View>
        </View>
        <View>
          <Svg height={20} width="100%">
            <Line
              x1="0"
              y1="50%"
              x2="100%"
              y2="50%"
              stroke={colors.gray[400]}
              strokeWidth={2}
              strokeDasharray="5,5"
            />
            <Circle r={8} cx={"0%"} cy={"50%"} fill={colors.black} />
            <Circle r={8} cx={"100%"} cy={"50%"} fill={colors.black} />
          </Svg>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerContent}>
            <View style={styles.inline}>
              <Info label="Voo" value="TP087" />
              <Info label="Assento" value="12A" />
            </View>
            <View></View>
            <View style={styles.inline}>
              <Info label="Terminal" value="3" />
              <Info label="Portão" value="39" />
            </View>
          </View>
          <QRCode value="boarding code" size={150} />
        </View>
      </View>
    </View>
  );
}
