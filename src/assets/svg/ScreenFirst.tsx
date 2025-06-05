import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={22}
        height={23}
        fill="none"
        {...props}
    >
        <Path
            fill={props.fill}
            d="m9.778 23-8.556-4.76A2.335 2.335 0 0 1 0 16.17v-3.488h6.111v3.548h3.667V23ZM0 10.318V6.829c0-.434.107-.832.321-1.197.215-.364.515-.655.901-.872L9.778 0v6.77H6.11v3.548H0Zm8.556 3.547v-4.73h4.888v4.73H8.556ZM12.222 23v-6.77h3.667v-3.548H22v3.489a2.33 2.33 0 0 1-1.222 2.07L12.222 23Zm3.667-12.682V6.77h-3.667V0l8.556 4.76c.387.216.688.507.902.872.214.365.32.764.32 1.197v3.489h-6.111Z"
        />
    </Svg>
)
export default SvgComponent
