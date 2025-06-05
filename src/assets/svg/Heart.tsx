import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={27}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            fill="#AC1430"
            d="M26.158 3.387C25.028 1.1 21.77-.771 17.98.319A8.327 8.327 0 0 0 13.5 3.453 8.327 8.327 0 0 0 9.019.32C5.22-.754 1.972 1.1.842 3.387c-1.587 3.2-.929 6.801 1.957 10.7 2.262 3.052 5.494 6.145 10.186 9.737a.852.852 0 0 0 1.038 0c4.683-3.583 7.924-6.652 10.186-9.736 2.877-3.9 3.535-7.5 1.949-10.701Z"
        />
    </Svg>
)
export default SvgComponent
