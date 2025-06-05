import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        fill="none"
        {...props}
    >
        <Path
            fill="#000"
            fillRule="evenodd"
            d="m15.96 20.256 10.737 10.737a3.038 3.038 0 1 0 4.296-4.296L20.252 15.96 30.99 5.223A3.037 3.037 0 0 0 26.695.928L15.96 11.665 5.223.928A3.037 3.037 0 1 0 .926 5.221L11.667 15.96.928 26.699a3.037 3.037 0 1 0 4.297 4.292L15.96 20.256Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default SvgComponent
