import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={39}
        fill="none"
        {...props}
    >
        <Path
            fill="#AC1430"
            d="M0 9.75c5-2.438 2.5 9.75 6.25 17.063C6.25 14.624 7.5 4.875 15 4.875s8.75 9.75 8.75 21.938C27.5 19.5 25 7.313 30 9.75 28.75 2.437 20 0 15 0S1.25 2.438 0 9.75Zm8.828 7.77C8.881 22.75 10.625 29.936 15 39c10-20.719 6.25-31.688 0-31.688-3.516 0-6.24 3.483-6.172 10.207Z"
        />
    </Svg>
)
export default SvgComponent
