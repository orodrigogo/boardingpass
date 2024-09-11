import { Text, View, ImageBackground } from "react-native"
import Svg, { Line, Circle } from "react-native-svg"
import { Ionicons } from "@expo/vector-icons"
import QRCode from "react-native-qrcode-svg"

import { s } from "./styles"
import { colors } from "@/styles/colors"

import { Info } from "@/components/info"
import { Flight } from "@/components/flight"

export function Home() {
  return (
    <View style={s.container}>
      <ImageBackground
        style={s.header}
        source={require("../../assets/cover.png")}
      >
        <Text style={s.title}>Cartão de embarque</Text>
        <Text style={s.subtitle}>Falta 45 dias para sua viagem</Text>
      </ImageBackground>

      <View style={s.ticket}>
        <View style={s.content}>
          <View style={s.flight}>
            <Flight label="São Paulo" value="GRU " />

            <View style={s.duration}>
              <Ionicons name="airplane-sharp" size={32} />
              <Text style={s.hours}>6h 0m</Text>
            </View>

            <Flight label="Nova York" value="JFK" />
          </View>

          <Text style={s.label}>Passageiro</Text>
          <Text style={s.name}>Rodrigo Gonçalves</Text>

          <View style={s.details}>
            <View style={s.inline}>
              <Info label="Data" value="17 de Nov." />
              <Info label="Embarque" value="17:25" />
            </View>
          </View>
        </View>

        <View>
          <Svg height={20} width="100%">
            <Line
              x1="0%"
              y1="50%"
              x2="100%"
              y2="50%"
              stroke={colors.gray[400]}
              strokeWidth="1"
              strokeDasharray="5, 5" // cria um padrão onde a linha é desenhada por 5 unidades e depois há um espaço de 5 unidades.
            />

            <Circle r={8} cx={0} cy="50%" fill={colors.black} />
            <Circle r={8} cx="100%" cy="50%" fill={colors.black} />
          </Svg>
        </View>

        <View style={s.footer}>
          <View style={s.footerContent}>
            <View style={s.inline}>
              <Info label="Voo" value="YZ 607" />
              <Info label="Assento" value="29G" />
            </View>

            <View style={s.inline}>
              <Info label="Terminal" value="3" />
              <Info label="Portão" value="39" />
            </View>
          </View>

          <QRCode value="boarding code" size={130} />
        </View>
      </View>
    </View>
  )
}
