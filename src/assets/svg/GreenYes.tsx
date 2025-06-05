import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={48}
        height={48}
        fill="none"
        {...props}
    >
        <Path
            fill="#16A364"
            d="M0 24a24 24 0 1 1 48 0 24 24 0 0 1-48 0Zm35.3-4.3a2.402 2.402 0 0 0-1.7-4.103 2.402 2.402 0 0 0-1.7.704L21.6 26.606l-5.5-5.505a2.403 2.403 0 0 0-3.4 3.398l7.2 7.2a2.4 2.4 0 0 0 3.4 0l12-12Z"
        />
    </Svg>
)
export default SvgComponent
