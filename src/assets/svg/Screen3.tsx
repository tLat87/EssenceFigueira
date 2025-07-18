import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={23}
        fill="none"
        {...props}
    >
        <Path
            fill={props.fill}
            d="m9 9.252-5.925-3.58L2 6.325v1.098l7 4.234 7-4.234V6.325l-1.075-.653L9 9.252Zm-1 11.37-7-4.208a2.029 2.029 0 0 1-.737-.758A2.12 2.12 0 0 1 0 14.61V6.3c0-.383.088-.732.263-1.046.175-.313.421-.566.737-.758L8 .287C8.317.096 8.65 0 9 0s.683.096 1 .287l7 4.208c.317.192.563.445.738.758.175.314.263.663.262 1.046v4.861a6.67 6.67 0 0 0-3-.706c-1.933 0-3.583.715-4.95 2.144C8.683 14.026 8 15.75 8 17.773c0 .557.054 1.093.163 1.608.109.514.271 1.006.487 1.476a6.312 6.312 0 0 0-.337-.091.916.916 0 0 1-.313-.144ZM15 23c-1.383 0-2.562-.51-3.537-1.53-.975-1.02-1.462-2.252-1.463-3.697 0-1.446.487-2.678 1.463-3.698.976-1.02 2.155-1.53 3.537-1.53 1.382 0 2.561.51 3.538 1.53.977 1.02 1.464 2.252 1.462 3.698-.002 1.445-.49 2.678-1.463 3.698-.973 1.02-2.152 1.53-3.537 1.529Zm.5-5.436v-2.928h-1v3.346l2.15 2.248.7-.732-1.85-1.934Z"
        />
    </Svg>
)
export default SvgComponent
