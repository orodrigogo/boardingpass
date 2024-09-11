import { Text, View } from "react-native"
import Svg, { Line, Circle } from "react-native-svg"
import { MaterialIcons } from "@expo/vector-icons"

import { s } from "./styles"
import { Info } from "../../components/info"
import { Flight } from "../../components/flight"

export function Home() {
  return (
    <View style={s.container}>
      <View style={s.header}>
        <Text style={s.title}>Boarding Pass</Text>
      </View>

      <View style={s.ticket}>
        <View style={s.content}>
          <View style={s.flight}>
            <Flight label="Tokyo" value="NRT" />

            <View style={s.duration}>
              <MaterialIcons name="flight-takeoff" size={32} color="#434EF1" />
              <Text style={s.label}>6h 0m</Text>
            </View>

            <Flight label="Tokyo" value="NRT" />
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

        <Svg height="20" width="100%">
          <Line
            x1="0%"
            y1="50%"
            x2="100%"
            y2="50%"
            stroke="#AFAFAF"
            strokeWidth="1"
            strokeDasharray="5, 5" // cria um padrão onde a linha é desenhada por 5 unidades e depois há um espaço de 5 unidades.
          />

          <Circle r={8} cx={0} cy="50%" fill="#D7D7D7" />
          <Circle r={8} cx="100%" cy="50%" fill="#D7D7D7" />
        </Svg>

        <View style={s.footer}>
          <View style={s.footerDetails}>
            <View style={s.inline}>
              <Info label="Voo" value="YZ 607" />
              <Info label="Assento" value="29G" />
            </View>

            <View style={s.inline}>
              <Info label="Terminal" value="3" />
              <Info label="Portão" value="39" />
            </View>
          </View>

          <View style={s.qrCode} />
        </View>
      </View>
    </View>
  )
}
