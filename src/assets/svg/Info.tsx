import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={34}
        height={34}
        fill="none"
        {...props}
    >
        <Path
            fill="#AC1430"
            d="M15.3 11.9h3.4V8.5h-3.4M17 30.6C9.503 30.6 3.4 24.497 3.4 17S9.503 3.4 17 3.4 30.6 9.503 30.6 17 24.497 30.6 17 30.6ZM17 0a17 17 0 1 0 0 34 17 17 0 0 0 0-34Zm-1.7 25.5h3.4V15.3h-3.4v10.2Z"
        />
    </Svg>
)
export default SvgComponent
