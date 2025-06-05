import * as React from "react"
import Svg, { SvgProps, Circle, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={29}
        height={30}
        fill="none"
        {...props}
    >
        <Circle cx={14.5} cy={15} r={14.5} fill="#AC1430" />
        <Path
            fill="#000"
            d="m21.166 12.406-5.76 4.934a1.044 1.044 0 0 1-.672.246c-.129 0-.256-.02-.375-.063a.982.982 0 0 1-.316-.183l-5.76-4.934A.77.77 0 0 1 8 11.823a.77.77 0 0 1 .282-.584c.181-.155.426-.242.682-.242.256 0 .5.087.682.242l4.108 3.519V.822a.785.785 0 0 1 .287-.577 1.066 1.066 0 0 1 1.352-.004c.18.154.282.363.282.581v13.96l4.128-3.551a.99.99 0 0 1 .312-.18 1.106 1.106 0 0 1 .738 0 .989.989 0 0 1 .313.18.83.83 0 0 1 .209.268.725.725 0 0 1 0 .631.83.83 0 0 1-.21.268v.008Z"
        />
    </Svg>
)
export default SvgComponent
