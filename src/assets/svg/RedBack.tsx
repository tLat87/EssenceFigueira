import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={31}
        height={22}
        fill="none"
        {...props}
    >
        <Path
            stroke="#AC1430"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M1 10.514h28.544M10.514 20.029 1 10.515 10.514 1"
        />
    </Svg>
)
export default SvgComponent
