import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={42}
        height={42}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            d="M0 7.35 7.35 0l7.35 7.35H0Zm27.3 0L34.65 0 42 7.35H27.3ZM42 42V23.1h-4.2v-9.45h-6.3v9.45h-6.3v-5.25l-4.2-4.2-4.2 4.2v5.25h-6.3v-9.45H4.2v9.45H0V42h14.7v-4.2a6.3 6.3 0 1 1 12.6 0V42H42Z"
        />
        <Path
            fill="#fff"
            d="M3.15 7.35h8.4v6.3h-8.4v-6.3Zm27.3 0h8.4v6.3h-8.4v-6.3Z"
        />
    </Svg>
)
export default SvgComponent
