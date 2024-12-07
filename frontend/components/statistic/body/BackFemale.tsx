import { View } from "react-native";
import Svg, {
  G,
  Defs,
  RadialGradient,
  Stop,
  Path,
  Line,
} from "react-native-svg";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const BackFemale = ({
  color,
  activeColor,
  activeGroup,
}) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Svg
        viewBox="0 0 660.46 1206.46"
        width={width * 0.35}
        height={height * 0.3}
        fill={null}
      >
        <Defs>
          <RadialGradient
            id="jointradial"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <Stop offset="0%" stopColor="rgb(254, 91, 127)" stopOpacity="1" />
            <Stop
              offset="100%"
              stopColor="rgb(231, 236, 239)"
              stopOpacity="1"
            />
          </RadialGradient>
        </Defs>
        <G>
          <Path
            d="M309.94,131.94c-41.24,10.69-2.61,54.46-22.92,42.1-23.08-14.05-56.61-114.29-.12-158.85,25.77-20.33,63.21-14.33,74.07-3.12"
            fill="none"
            stroke="#484a68"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.54"
          ></Path>
          <Path
            d="M325.87,129.76c-3.85.18-7.32.52-10.42,1.04"
            fill="none"
            stroke="#484a68"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.54"
          ></Path>
          <Path
            d="M356.13,10.73c79.94,24.39,40.53,149.25,17.44,163.3-22.75,13.85,28.46-42.74-41.48-44.36"
            fill="none"
            stroke="#484a68"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.54"
          ></Path>
        </G>
        <G>
          <Path
            d="M256.99,919.42s-.84-33.56-30.2-24.07c-16,5.17-22.57-53.82-31.92-19.23"
            fill="none"
            stroke="#484a68"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.54"
          ></Path>
          <Path
            d="M127.13,349.54c-8.78,30.8,6.47,10.55,12.79,15.18,6.44,4.72-6.07,44.07,25.78,10.13"
            fill="none"
            stroke="#484a68"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.54"
          ></Path>
          <Path
            d="M46.63,471.55c-7.79,13.37-7.25,26.53-.9,31.6,1.63,1.3,5.2,3.07,9.41,2.47,5.62-.8,8.68-5.31,9.22-6.13"
            fill="none"
            stroke="#484a68"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.54"
          ></Path>
          <Path
            d="M173.13,278.81c2.88-4.79,6.66-8.97,12.49-11.47,9.27-3.99,13.32,1.41,25.31-2.73,5.97-2.07,7.04-4.13,9.12-3.41,3.13,1.05,5.71,7.35,3.76,29.88v.02"
            fill="none"
            stroke="#484a68"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.54"
          ></Path>
          <Path
            d="M231.13,202.41c10.35.92,18.04.3,23.31,4.46,2.04,1.6,2.36,2.75,5.12,4.92,6.31,4.98,10.77,3.77,11.51,5.82,1.67,4.7-20.24,13.91-40.19,31.92-4.51,4.08-8.28,8.03-11.38,11.53"
            fill="none"
            stroke="#484a68"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.54"
          ></Path>
          <Path
            d="M275.02,464.24c10.58-1.12,4.57-26.43,14.25-47.97,7.42-16.52,30.04-29.2,29.72-51.5-.15-10.41-2.89-30.34-7.2-47.82"
            fill="none"
            stroke="#484a68"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.54"
          ></Path>
          <Path
            d="M235.59,470.44c5.34-2.55,11.54-4.1,18.33-5.11,23.46-3.49,75.7-4.21,75.7,58.89"
            fill="none"
            stroke="#484a68"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.54"
          ></Path>
          <Path
            d="M322.94,599.28c-20.17,19.75-63.51,29.92-85.33,3.38-8.53-10.37-14.32-27.31-6.56-68.08,4.15-21.78,7.1-80.01,60.3-67.97"
            fill="none"
            stroke="#484a68"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.54"
          ></Path>
          <Path
            d="M208.39,823.4c-2.97,13.76,9.58,9.84,21.8-12.19,12.22-22.04,14.78-28.77,16.82-28.4,1.34.24.1,47.27,12.46,64.47,3.48,4.85,11.21,11.88,20.03-16.26"
            fill="none"
            stroke="#484a68"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.54"
          ></Path>
          <Path
            d="M247.69,999.16c-.12.44-.27.93-.46,1.49-2.86,8.8-12.89,30.51-22.11-1.19-1.53-5.28-2.13-8.83-4.32-9.36-5.46-1.27-7.93,19.19-17.53,20.63-6.97,1.04-13.08-12.73-18.23-39.31"
            fill="none"
            stroke="#484a68"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.54"
          ></Path>
          <Path
            d="M285.65,180.23s22.15-10.08,45.27-10.08"
            fill="none"
            stroke="#484a68"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.54"
          ></Path>
          <Line
            x1="329.62"
            y1="591.8"
            x2="329.62"
            y2="524.22"
            fill="none"
            stroke="#484a68"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.54"
          ></Line>
          <Path
            d="M403.55,919.42s.84-33.56,30.2-24.07c16,5.17,22.57-53.82,31.92-19.23"
            fill="none"
            stroke="#484a68"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.54"
          ></Path>
          <Path
            d="M533.41,349.54c8.78,30.8-6.47,10.55-12.79,15.18-6.44,4.72,6.07,44.07-25.78,10.13"
            fill="none"
            stroke="#484a68"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.54"
          ></Path>
          <Path
            d="M613.92,471.55c7.79,13.37,7.25,26.53.9,31.6-1.63,1.3-5.2,3.07-9.41,2.47-5.62-.8-8.68-5.31-9.22-6.13"
            fill="none"
            stroke="#484a68"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.54"
          ></Path>
          <Path
            d="M487.42,278.81c-2.88-4.79-6.66-8.97-12.49-11.47-9.27-3.99-13.32,1.41-25.31-2.73-5.97-2.07-7.04-4.13-9.12-3.41-3.13,1.05-5.71,7.35-3.76,29.88v.02"
            fill="none"
            stroke="#484a68"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.54"
          ></Path>
          <Path
            d="M429.41,202.41c-10.35.92-18.04.3-23.31,4.46-2.04,1.6-2.36,2.75-5.12,4.92-6.31,4.98-10.77,3.77-11.51,5.82-1.67,4.7,20.24,13.91,40.19,31.92,4.51,4.08,8.28,8.03,11.38,11.53"
            fill="none"
            stroke="#484a68"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.54"
          ></Path>
          <Path
            d="M385.52,464.24c-10.58-1.12-4.57-26.43-14.25-47.97-7.42-16.52-30.04-29.2-29.72-51.5.15-10.41,2.89-30.34,7.2-47.82"
            fill="none"
            stroke="#484a68"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.54"
          ></Path>
          <Path
            d="M424.96,470.44c-5.34-2.55-11.54-4.1-18.33-5.11-23.46-3.49-75.7-4.21-75.7,58.89"
            fill="none"
            stroke="#484a68"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.54"
          ></Path>
          <Path
            d="M337.6,599.28c20.17,19.75,63.51,29.92,85.33,3.38,8.53-10.37,14.32-27.31,6.56-68.08-4.15-21.78-7.1-80.01-60.3-67.97"
            fill="none"
            stroke="#484a68"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.54"
          ></Path>
          <Path
            d="M452.15,823.4c2.97,13.76-9.58,9.84-21.8-12.19-12.22-22.04-14.78-28.77-16.82-28.4-1.34.24-.1,47.27-12.46,64.47-3.48,4.85-11.21,11.88-20.03-16.26"
            fill="none"
            stroke="#484a68"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.54"
          ></Path>
          <Path
            d="M412.85,999.16c.12.44.27.93.46,1.49,2.86,8.8,12.89,30.51,22.11-1.19,1.53-5.28,2.13-8.83,4.32-9.36,5.46-1.27,7.93,19.19,17.53,20.63,6.97,1.04,13.08-12.73,18.23-39.31"
            fill="none"
            stroke="#484a68"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.54"
          ></Path>
          <Path
            d="M265.35,215.12s48.1-7.21,64.27-7.31c16.8-.1,66.86,6.77,66.86,6.77-14,4.78-25.91,24.85-29.39,38.58-5.5,21.72-15.65,53.23-21.42,74.87-.73,2.75-4.14,13.8-12.99,13.8h-4.82c-8.85,0-12.26-11.05-12.99-13.8-5.77-21.65-15.92-53.16-21.42-74.87-3.48-13.73-15.38-33.8-29.39-38.58"
            fill="none"
            stroke="#484a68"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.54"
          ></Path>
          <Path
            d="M374.89,180.23s-22.15-10.08-45.27-10.08"
            fill="none"
            stroke="#484a68"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.54"
          ></Path>
          <Line
            x1="330.92"
            y1="591.8"
            x2="330.92"
            y2="524.22"
            fill="none"
            stroke="#484a68"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.54"
          ></Line>
          <Path
            d="M329.63,593.59s-9.24-2.54-16.28,38.33c-12.77,87.95-31.87,118.82-31.02,168.54.85,49.73-23.91,75.87-25.04,95.19,4.27,81.84-5.95,85.12-12.73,115.34-6.79,30.22-14.61,109.78-12.88,121.95,1.74,12.16-.17,8.68-.87,14.94-.7,6.26-1.7,17.62-.84,24.02.65,4.79,2.95,5.49,1.38,17.31-2.33,13.5-18.52,13.37-31.89,11.89-10-1.11-20.14-11.17-28.15-17.25s-5.08-8.79.33-11.02c6.26-2.58,12.65-3.8,16.08-8.84,3.33-4.9,5.47-5.76,6.01-8.11,2.21-9.58-.15-16.5,1.07-19.8,1.21-3.3,1.51-5.1,2.59-19.94,1.09-14.86-5.44-81.13-11.61-136.55-6.16-55.41,10.67-118.4,15.39-128.95,4.71-10.56,11.47-44.23,9.22-53.21-4.94-13.47-4.72-97.2-6.07-135.37-1.35-38.16-8.32-55.22,8.32-125.94,16.63-70.72,40.69-86.43,41.6-114.49.44-52.98-19.31-82.86-21.98-103.3s-7.88-28.36-7.88-28.36c-14.88,30-69.92,97.4-72.22,104.58-4.14,17.73-40.37,56.37-62.53,76.98-22.17,20.61-31.32,32.22-31.92,37.58-.66,7.22,2,19.43-5.1,40.15-7.09,20.71-.13,31.3-4.63,33.05-15.92,5.04-10.01-29.6-10.01-29.6-5.57,1.39-5.18-.38-6.73,1.66-11.02,6.72-13.12,9.61-15.22,14.09-2.08,4.47-1.46,22.66.08,32.3,1.54,9.64-4.24,8.25-4.24,8.25,0,0-1.7-3.63-3.55-7.02s-3.01-7.17-4.79-15.29c-3.62-15.17-.73-19.2.73-27.58,1.01-14.15,3.36-12.65,7.22-21.08,5.8-12.63,15.61-26.7,18.8-35.52,3.18-8.8,9.16-17.71,9.16-17.71,43.87-88.51,59.18-102.1,72.58-115.47,8.35-8.33,28.98-42.35,38.85-59.84,8.37-14.85,16.31-21.52,22.27-30.68.56-.85,10.91-37.89,23.86-58.76,12.95-20.86,34.84-17.28,37.73-17.61,2.4-.27,36.21-15.05,50.94-22.23.09-.04.18-.08.26-.12"
            fill="none"
            stroke="#484a68"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.54"
          ></Path>
          <Path
            d="M24.79,558.55s-1.95,11.75-3.23,18.22c-.52,2.65.17,11.43,1.13,14.28.95,2.85,6.06,8.3,2.86,11.06-3.2,2.77-6.78,1.95-10.1-8.06"
            fill="none"
            stroke="#484a68"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.54"
          ></Path>
          <Path
            d="M330.92,593.59s9.23-2.54,16.27,38.33c12.77,87.95,31.87,118.82,31.02,168.54-.85,49.73,23.91,75.87,25.04,95.19-4.27,81.84,5.95,85.12,12.73,115.34,6.79,30.22,14.61,109.78,12.88,121.95-1.74,12.16.18,8.68.87,14.94.7,6.26,1.7,17.62.84,24.02-.65,4.79-2.95,5.49-1.38,17.31,2.33,13.5,18.52,13.37,31.89,11.89,10-1.11,20.14-11.17,28.15-17.25,8-6.08,5.08-8.79-.33-11.02-6.26-2.58-12.65-3.8-16.08-8.84-3.33-4.9-5.47-5.76-6.01-8.11-2.21-9.58.15-16.5-1.07-19.8-1.21-3.3-1.5-5.1-2.59-19.94-1.09-14.86,5.44-81.13,11.61-136.55,6.16-55.41-10.67-118.4-15.39-128.95-4.71-10.56-11.47-44.23-9.22-53.21,4.94-13.47,4.72-97.2,6.07-135.37,1.35-38.16,8.32-55.22-8.32-125.94-16.63-70.72-40.69-86.43-41.6-114.49-.44-52.98,19.31-82.86,21.98-103.3s7.88-28.36,7.88-28.36c14.88,30,69.92,97.4,72.22,104.58,4.14,17.73,40.37,56.37,62.53,76.98,22.17,20.61,31.32,32.22,31.92,37.58.66,7.22-2,19.43,5.1,40.15,7.09,20.71.13,31.3,4.63,33.05,15.92,5.04,10.01-29.6,10.01-29.6,5.57,1.39,5.18-.38,6.73,1.66,11.03,6.72,13.12,9.61,15.22,14.09,2.08,4.47,1.46,22.66-.08,32.3-1.54,9.64,4.24,8.25,4.24,8.25,0,0,1.7-3.63,3.55-7.02s3.01-7.17,4.79-15.29c3.62-15.17.73-19.2-.72-27.58-1.02-14.15-3.37-12.65-7.23-21.08-5.8-12.63-15.61-26.7-18.8-35.52-3.18-8.8-9.16-17.71-9.16-17.71-43.87-88.51-59.18-102.1-72.58-115.47-8.35-8.33-28.98-42.35-38.85-59.84-8.37-14.85-16.31-21.52-22.27-30.68-.55-.85-10.91-37.89-23.86-58.76-12.95-20.86-34.84-17.28-37.73-17.61-2.4-.27-36.21-15.05-50.94-22.23-.09-.04-.18-.08-.26-.12"
            fill="none"
            stroke="#484a68"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.54"
          ></Path>
          <Path
            d="M635.75,558.55s1.95,11.75,3.23,18.22c.52,2.65-.17,11.43-1.13,14.28-.95,2.85-6.06,8.3-2.86,11.06,3.2,2.77,6.78,1.95,10.1-8.06"
            fill="none"
            stroke="#484a68"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.54"
          ></Path>
          <Path
            d="M265.35,215.12s42.93-7.31,64.27-7.31c22.63,0,66.86,6.77,66.86,6.77"
            fill="none"
            stroke="#484a68"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.54"
          ></Path>
          <Path
            d="M365.91,175.19c-1.09-8.27-.76-26.61.22-28.46.49-.92,1.28-1.93,2.13-2.99"
            fill="none"
            stroke="#484a68"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.54"
          ></Path>
          <Path
            d="M292.29,143.8c.82,1.04,1.6,2.03,2.08,2.93.98,1.85,1.31,20.19.22,28.46"
            fill="none"
            stroke="#484a68"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.54"
          ></Path>
          <Path
            d="M325.87,129.76c2.78-17.69,3.62-37.03,3.62-37.03,0,0,2.51,27.58,2.59,36.94"
            fill="none"
            stroke="#484a68"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.54"
          ></Path>
          <Path
            d="M309.94,131.94c2.05-15.05,2.45-23.6,2.45-25.65,0-1.94,2.71,21.53,3.06,24.51"
            fill="none"
            stroke="#484a68"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.54"
          ></Path>
        </G>
        <G
          id="lowerback"
          fill={activeGroup.includes("lowerback") ? activeColor : color}
        >
          <Path d="M380.01,462.82c-11.24,1.19-23.1,4.71-32.54,12.83-9.15,7.88-14.91,19.1-17.19,33.46-2.3-14.36-8.05-25.58-17.2-33.46-9.43-8.11-21.3-11.63-32.53-12.83,2.5-3.6,3.18-9.88,3.98-17.21.92-8.48,2.06-19.06,6.36-28.62,2.66-5.91,7.36-11.34,12.35-17.1,8.72-10.06,17.74-20.47,17.53-35.15-.09-5.99-1.05-15.55-2.79-26.26,2.29,2.84,5.49,5.12,9.88,5.12h4.83c4.4,0,7.59-2.28,9.88-5.12-1.75,10.71-2.7,20.27-2.79,26.26-.21,14.69,8.81,25.09,17.53,35.15,4.99,5.76,9.69,11.19,12.35,17.1,4.3,9.56,5.44,20.14,6.37,28.63.79,7.32,1.47,13.61,3.98,17.2Z"></Path>
        </G>
        <G
          id="traps"
          fill={activeGroup.includes("traps") ? activeColor : color}
        >
          <Path d="M251.9,197.43c.12-.06.25-.11.37-.17,1.81-.78,3.7-1.6,5.61-2.44.13-.06.27-.11.39-.17,10.01-4.41,20.95-9.38,27.91-12.74,0,0,.02-.02.03,0,.05-.02.12-.04.18-.07.12-.05,7.19-3.23,17.36-5.97,10.51-4.17,18.24-5.25,32.85-3.65,19.8,1.64,37.37,9.53,37.57,9.63.08.04.17.07.25.09,11.09,5.36,32.27,14.8,43.67,19.48-5.23.44-9.55,1.27-13.08,4.06-1.07.84-1.74,1.58-2.38,2.3-.68.77-1.39,1.56-2.75,2.63-1.32,1.04-2.54,1.79-3.67,2.34h0s-.04,0-.05,0c-.16-.03-.35-.05-.59-.09-.05,0-.12-.02-.17-.03-.23-.04-.48-.07-.75-.11-.08-.02-.17-.03-.26-.04h-.03c-.16-.03-.32-.05-.49-.07-.17-.03-.35-.05-.53-.08-.34-.05-.7-.11-1.08-.16h-.03c-.06,0-.12-.02-.19-.03-.18-.03-.35-.05-.53-.08-.1-.02-.2-.03-.31-.04-.09,0-.18-.03-.27-.04-.04,0-.07,0-.1-.02-.17-.02-.35-.04-.52-.07-.03,0-.05,0-.09-.02-.04,0-.07,0-.11,0,0,0-.03,0-.04,0-.19-.03-.39-.05-.58-.08-.04,0-.08-.02-.12-.02-.21-.04-.43-.06-.64-.1-.05,0-.1,0-.14-.02-.04,0-.07,0-.11-.02-.44-.06-.91-.12-1.38-.19-.35-.04-.7-.1-1.05-.15-.59-.08-1.21-.16-1.83-.25-.86-.12-1.75-.23-2.67-.35-.43-.06-.87-.12-1.31-.18-.3-.04-.59-.07-.9-.11-.27-.04-.56-.07-.85-.12-.36-.04-.74-.09-1.11-.14-.12-.02-.24-.03-.36-.04-1.33-.17-2.7-.34-4.1-.51-.76-.1-1.54-.19-2.32-.28-1.36-.16-2.73-.33-4.12-.49-.41-.04-.82-.09-1.23-.14-.21-.02-.43-.04-.65-.07-.61-.07-1.22-.14-1.83-.2-.23-.03-.47-.05-.7-.08-.38-.04-.77-.08-1.16-.12-.41-.04-.82-.09-1.24-.13-.41-.04-.82-.09-1.24-.12-.22-.03-.44-.05-.67-.07-.31-.04-.63-.06-.94-.1-.29-.03-.58-.06-.87-.09-.24-.03-.47-.04-.71-.07-.59-.06-1.19-.11-1.77-.17-.82-.08-1.66-.16-2.47-.23-.42-.04-.82-.07-1.23-.11l-1.22-.11c-.41-.04-.81-.07-1.21-.1-.41-.04-.81-.06-1.21-.1-.81-.06-1.59-.12-2.39-.18-.78-.06-1.56-.12-2.34-.16-.38-.03-.76-.05-1.14-.07-.76-.04-1.52-.09-2.26-.12-.37-.02-.74-.04-1.1-.05h-.05c-.27-.02-.53-.03-.79-.04-.08,0-.17,0-.25,0-.28,0-.56-.02-.84-.03-.35-.02-.71-.03-1.06-.04-.12,0-.25,0-.37,0-.03,0-.05,0-.07,0-.27,0-.53,0-.79-.02-.28,0-.56,0-.83-.02-.74,0-1.47-.02-2.17-.02-.25,0-.5,0-.75,0-20.32.14-57.83,6.33-63.22,7.23-.31-.12-.62-.24-.93-.34-1.22-.58-2.58-1.37-4.06-2.53-1.36-1.07-2.06-1.86-2.75-2.63-.64-.72-1.3-1.46-2.37-2.3-3.53-2.79-7.85-3.62-13.08-4.06,2.69-1.11,5.92-2.47,9.44-3.98Z"></Path>
        </G>
        <G
          id="hands"
          fill={activeGroup.includes("hands") ? activeColor : color}
        >
          <Path d="M638.26,562.82c.68,4,1.69,9.79,2.45,13.64.58,2.94-.12,12.02-1.18,15.18-.33.98-.97,2.08-1.67,3.24-1.59,2.68-2.81,4.98-1.71,5.93,1.33,1.15,2.06.96,2.3.88.74-.2,2.71-1.41,4.95-8.17.04-.1.07-.19.12-.28.81-9.57.76-21.05-.63-24.03-1.02-2.19-1.99-4.01-4.64-6.4Z"></Path>
          <Path d="M655.61,564.41c-.36-1.56-.74-3.18-1.06-5.01,0-.05,0-.11-.02-.17-.68-9.53-1.91-11.48-3.93-14.73-.91-1.48-1.96-3.14-3.15-5.74-2.69-5.86-6.23-11.99-9.66-17.92-3.83-6.64-7.45-12.92-9.19-17.73-2.05-5.64-5.32-11.41-7.3-14.67.54,6.88-1.25,12.79-5.39,16.09-1.91,1.53-5.1,2.98-8.8,2.98-.64,0-1.3-.04-1.97-.14-.33-.04-.64-.1-.95-.17.19.61.32,1.18.38,1.7.18,1.9.14,4.03.1,6.5-.14,7.56-.33,17.93,4.92,33.26,4.19,12.25,3.6,21.25,3.24,26.63-.19,2.68-.34,5,.33,5.33,2.21.68,3.9.48,5.17-.62,5.06-4.4,3.51-21,2.49-27.03-.1-.58.11-1.19.54-1.59.44-.41,1.05-.56,1.64-.42,2.33.58,3.45.56,4.2.54,1.41-.04,2.21.17,3.29,1.5,2.45,1.5,4.46,2.8,6.14,4.01.09.05.18.11.26.19,5.72,4.09,7.49,6.75,9.23,10.48,2.45,5.27,1.43,24.85.07,33.33-.66,4.12.2,5.47.61,5.86.23.21.5.33.74.38.64-1.33,1.84-3.77,3.14-6.13,1.73-3.17,2.84-6.77,4.61-14.82,2.76-11.56,1.63-16.34.32-21.89Z"></Path>
          <Path d="M21,591.65c-1.05-3.16-1.76-12.25-1.18-15.18.76-3.85,1.77-9.64,2.45-13.64-2.65,2.39-3.62,4.21-4.64,6.4-1.39,2.98-1.44,14.46-.63,24.03.05.09.09.19.12.28,2.24,6.76,4.21,7.96,4.95,8.17.24.07.97.27,2.3-.88,1.1-.95-.12-3.25-1.71-5.93-.69-1.16-1.34-2.26-1.67-3.24Z"></Path>
          <Path d="M56.33,507.21c-.31.07-.62.12-.95.17-.66.1-1.33.14-1.97.14-3.7,0-6.89-1.45-8.8-2.98-4.14-3.3-5.93-9.21-5.39-16.09-1.99,3.26-5.26,9.02-7.29,14.67-1.75,4.81-5.37,11.09-9.2,17.73-3.43,5.93-6.97,12.06-9.66,17.92-1.19,2.6-2.23,4.27-3.15,5.74-2.02,3.25-3.24,5.2-3.93,14.73,0,.05,0,.11-.02.17-.32,1.84-.7,3.45-1.06,5.01-1.31,5.55-2.44,10.33.31,21.85,1.77,8.09,2.89,11.69,4.63,14.86,1.28,2.36,2.49,4.8,3.13,6.13.25-.05.51-.16.74-.38.41-.39,1.28-1.73.62-5.86-1.36-8.48-2.39-28.06.06-33.33,1.75-3.72,3.5-6.4,9.23-10.49.08-.06.17-.12.26-.18,1.68-1.2,3.7-2.51,6.14-4.01,1.08-1.33,1.89-1.53,3.29-1.5.74.02,1.87.04,4.2-.54.59-.14,1.2,0,1.64.42.43.41.65,1.01.54,1.59-1.02,6.03-2.57,22.63,2.49,27.03,1.27,1.1,2.96,1.3,5.17.62.66-.33.51-2.65.34-5.33-.36-5.38-.96-14.38,3.23-26.63,5.25-15.32,5.06-25.69,4.92-33.26-.04-2.47-.08-4.6.09-6.48.06-.53.19-1.11.39-1.73Z"></Path>
        </G>
        <G
          id="forearms"
          fill={activeGroup.includes("forearms") ? activeColor : color}
        >
          <Path d="M613.72,501.78c-.35.28-3.59,2.73-8.06,2.1-1.4-.19-2.62-.67-3.67-1.27-4.38-7.17-14.25-17.86-29.86-32.37-21.84-20.31-58.01-58.94-62.02-76.09,0-.04-.02-.09-.04-.13-.36-1.12-1.61-3.22-3.78-6.39,2.71,1.8,4.97,2.67,6.87,2.67.66,0,1.28-.11,1.85-.32,4.37-1.6,4.69-8.12,5-14.43.17-3.57.41-8.47,1.67-9.39,1.35-.99,4.1.13,6.53,1.13,2.92,1.19,5.96,2.42,8.06.55,1.49-1.34,2.19-3.8.96-10.26,3.98,5.78,7.52,10.48,10.06,13.01l1.42,1.42c11.99,11.91,26.75,26.58,63.53,99.03-.14.46-.11.97.16,1.42,7.56,12.98,6.61,25.1,1.33,29.33Z"></Path>
          <Path d="M154.26,387.62c-2.17,3.17-3.42,5.26-3.78,6.39-.02.04-.03.09-.04.13-4.01,17.16-40.17,55.78-62.02,76.09-15.61,14.5-25.48,25.19-29.86,32.37-1.05.6-2.28,1.08-3.68,1.27-4.48.64-7.71-1.81-8.06-2.1-5.28-4.23-6.23-16.35,1.33-29.33.27-.45.31-.96.16-1.42,36.79-72.46,51.53-87.12,63.53-99.03l1.42-1.42c2.54-2.54,6.09-7.24,10.07-13.02-1.24,6.48-.53,8.95.96,10.28,2.1,1.88,5.13.65,8.06-.55,2.43-1,5.18-2.12,6.53-1.13,1.26.92,1.5,5.81,1.67,9.39.31,6.31.63,12.83,5,14.43.58.21,1.2.32,1.85.32,1.9,0,4.16-.88,6.87-2.67Z"></Path>
        </G>
        <G
          id="triceps"
          fill={activeGroup.includes("triceps") ? activeColor : color}
        >
          <Path d="M533.9,365.2c-.45.4-3.09-.67-4.36-1.19-3.12-1.27-7.01-2.87-9.96-.71-2.62,1.92-2.85,6.63-3.12,12.07-.21,4.43-.51,10.49-2.68,11.29-1.21.44-5.32.08-17.43-12.78,0,0,0,0-.02-.02,0,0,0-.02-.02-.03-2.3-3.1-4.88-6.58-7.76-10.45-17.18-23.05-40.56-54.4-50.07-72.78h0c-2.06-24.21,1.46-27.34,2.6-27.73.36-.12.64-.02,2.12.79,1.28.7,3.05,1.65,5.84,2.63,6.48,2.24,10.81,1.84,14.63,1.5,3.45-.32,6.42-.58,10.55,1.19,4.74,2.03,8.43,5.4,11.59,10.61.03.04.05.09.08.13h0s.02.04.03.06c2.38,3.65,5.07,6.92,7.91,10.38,4.34,5.29,9.27,11.28,14.3,20.2,5.24,9.29,14.76,25.38,23.52,38.89h0c-.04.26-.03.52.04.78,3.7,12.99,2.47,14.92,2.19,15.17Z"></Path>
          <Path d="M222.06,290.59h0c-9.51,18.39-32.89,49.74-50.07,72.79-2.9,3.88-5.49,7.38-7.81,10.49,0,0-.02.02-.02.03-12.09,12.83-16.19,13.19-17.4,12.75-2.17-.8-2.46-6.86-2.68-11.29-.27-5.44-.5-10.15-3.12-12.07-2.94-2.16-6.83-.57-9.96.71-1.27.52-3.91,1.59-4.36,1.19-.28-.26-1.52-2.19,2.19-15.17.07-.26.09-.52.04-.77h0c8.76-13.51,18.28-29.6,23.52-38.9,5.03-8.92,9.96-14.91,14.31-20.2,2.8-3.42,5.45-6.64,7.81-10.24.04-.04.06-.1.1-.14.02-.02.03-.04.04-.06.03-.04.04-.08.07-.12,3.17-5.21,6.85-8.59,11.6-10.62,4.13-1.78,7.11-1.51,10.55-1.19,3.82.35,8.15.74,14.63-1.5,2.79-.97,4.55-1.93,5.84-2.63,1.48-.81,1.76-.91,2.13-.78,1.13.38,4.65,3.51,2.59,27.71Z"></Path>
        </G>
        <G
          id="calves"
          fill={activeGroup.includes("calves") ? activeColor : color}
        >
          <Path d="M473.74,971.18c-6.85,35.29-13.61,38.19-16.21,37.81-4.33-.65-7.19-6.57-9.69-11.81-2.5-5.19-4.65-9.69-8.52-8.79-2.86.69-3.74,3.86-4.95,8.24-.19.73-.42,1.52-.66,2.34-4.01,13.81-7.63,15.35-9,15.38h-.04c-3.31,0-7.37-7.15-9.69-14.25-.04-.11-.07-.21-.11-.32,0-.02,0-.04-.02-.06-.07-.24-.13-.47-.21-.7-.03-.11-.05-.21-.09-.32-.65-2.18-1.31-4.26-1.96-6.31-4.73-14.93-9.24-29.14-8.5-71.3.69-.21,1.2-.86,1.21-1.63,0-.15.51-14.98,9.36-21.23,4.63-3.26,10.86-3.67,18.53-1.19,8.78,2.84,14.64-9.25,19.34-18.98,2.01-4.16,5.37-11.1,6.97-11.1.02,0,.04,0,.04,0,.08,0,1.88.27,4.4,9.63.18.65.71,1.13,1.34,1.26,5.35,23.71,10.86,59.33,8.45,93.34Z"></Path>
          <Path d="M247.94,992.39c-.66,2.05-1.31,4.13-1.96,6.31-.12.4-.25.81-.37,1.22,0,0,0,.02,0,.03s0,.02,0,.03,0,0,0,.02c0,.04-.03.08-.04.12-2.3,7.1-6.36,14.24-9.68,14.24h-.04c-1.37-.03-4.99-1.57-9-15.38-.24-.82-.46-1.61-.66-2.35-1.21-4.38-2.08-7.54-4.95-8.23-3.86-.9-6.01,3.59-8.51,8.79-2.52,5.24-5.36,11.17-9.7,11.81-2.6.39-9.36-2.51-16.21-37.8h0c-2.42-34,3.09-69.62,8.45-93.34.63-.13,1.16-.6,1.34-1.27,2.53-9.35,4.32-9.63,4.4-9.63.02,0,.03,0,.04,0,1.6,0,4.95,6.95,6.97,11.1,4.23,8.74,9.38,19.4,16.77,19.4.82,0,1.68-.13,2.57-.42,7.67-2.48,13.9-2.07,18.52,1.19,8.86,6.26,9.36,21.09,9.37,21.23.02.77.52,1.41,1.21,1.63.74,42.15-3.77,56.37-8.5,71.3Z"></Path>
        </G>
        <G
          id="hamstrings"
          fill={activeGroup.includes("hamstrings") ? activeColor : color}
        >
          <Path d="M455.76,640.3c-.5,6.77-1.02,13.77-1.3,21.69-.36,10.38-.62,24.22-.89,38.86-.7,38.51-1.58,86.43-5.08,95.97-.02.05-.04.11-.05.18-1.17,4.69-.05,15.49,1.94,26.48,0,0,0,.02,0,.03,0,.09,0,.18.03.27.77,3.57.32,5.51-.43,5.8-2.06.78-9.75-4.19-18.08-19.22-3.85-6.94-6.68-12.25-8.96-16.52-5.85-10.97-7.06-13.25-9.73-12.77-1.56.29-1.69,1.84-1.87,3.8-.12,1.42-.23,3.38-.37,5.86-.79,14-2.42,43.12-11.33,55.53-1.97,2.74-3.82,4-5.5,3.72-2.08-.34-6.34-3.31-11.4-19.47,0-.03-.02-.06-.04-.09h0c-1.83-8.9-2.92-18.78-2.72-29.91.47-27.26-5.09-49.22-12.12-77.02-5.83-23.06-13.1-51.75-18.92-91.86-2-11.65-4.22-19.94-6.42-25.84,12.23,9.1,28.76,14.68,43.99,14.68,1.09,0,2.17-.04,3.24-.09,14.31-.77,26.27-6.51,34.55-16.59,7.62-9.28,15.3-25.56,6.93-69.54-.42-2.19-.83-4.82-1.28-7.61-2.81-17.83-7.07-44.77-25.27-57.1-1.99-1.34-4.09-2.47-6.3-3.38,2.93.23,5.63.56,7.98.91,6.98,1.04,12.65,2.58,17.26,4.69h0c7.27,15.16,15.61,35.23,22.56,64.75,13.13,55.84,11.49,78.06,9.57,103.79Z"></Path>
          <Path d="M318.02,605.8c-2.2,5.89-4.41,14.2-6.42,25.87-5.81,40.06-13.08,68.76-18.91,91.81-7.04,27.8-12.59,49.76-12.12,77.02.19,11.15-.9,21.05-2.73,29.94v.02s-.02.03-.02.04c-5.07,16.17-9.32,19.14-11.41,19.47-1.67.27-3.54-.98-5.5-3.72-8.91-12.4-10.55-41.52-11.33-55.52-.14-2.49-.26-4.45-.37-5.87-.18-1.96-.31-3.5-1.87-3.8-2.66-.49-3.88,1.8-9.73,12.76-2.28,4.27-5.1,9.59-8.96,16.53-8.33,15.02-15.99,19.99-18.08,19.22-.75-.28-1.21-2.22-.43-5.8.02-.09.03-.18.03-.27,0,0,0-.02,0-.03,1.99-10.99,3.11-21.79,1.94-26.48-.02-.06-.04-.12-.05-.18-3.5-9.54-4.38-57.45-5.08-95.96-.27-14.65-.52-28.5-.89-38.88-.28-7.92-.81-14.92-1.3-21.69-1.91-25.73-3.56-47.95,9.57-103.79,6.95-29.53,15.3-49.6,22.57-64.75,4.62-2.11,10.28-3.65,17.25-4.69,2.35-.35,5.04-.68,7.98-.91-2.22.91-4.32,2.04-6.3,3.38-18.2,12.33-22.46,39.27-25.27,57.1-.44,2.79-.86,5.41-1.28,7.61-8.37,43.97-.69,60.25,6.93,69.54,8.29,10.08,20.24,15.82,34.55,16.59,1.07.06,2.15.09,3.24.09,15.22,0,31.75-5.58,43.99-14.67Z"></Path>
        </G>
        <G
          id="glutes"
          fill={activeGroup.includes("glutes") ? activeColor : color}
        >
          <Path d="M421.57,601.54c-7.65,9.29-18.71,14.58-32,15.31-17.81.96-38.11-6.56-50.6-18.7,0,0,0,0,0-.02-1.69-2.84-3.3-4.44-4.69-5.34-.59-.37-1.13-.61-1.6-.76,0-.07.02-.14.02-.22v-67.59c0-20.7,5.75-36.13,17.09-45.88,5.74-4.95,12.49-8.06,19.44-9.95h0c.12,0,.24,0,.35-.04,13.43-3.03,24.57-1.65,33.12,4.14,16.93,11.46,21.04,37.49,23.76,54.72.44,2.81.87,5.48,1.29,7.72,8.1,42.53.95,57.95-6.19,66.63Z"></Path>
          <Path d="M327.87,592.03c-.48.15-1.02.39-1.6.76-1.4.89-3,2.5-4.69,5.34,0,0,0,0,0,.02-12.49,12.15-32.81,19.66-50.59,18.7-13.3-.73-24.36-6.02-32-15.31-7.14-8.68-14.29-24.1-6.19-66.63.43-2.24.85-4.9,1.29-7.72,2.72-17.23,6.83-43.26,23.76-54.72,8.55-5.79,19.7-7.18,33.12-4.14.12.04.24.04.35.04h0c6.96,1.89,13.7,5.01,19.44,9.95,11.33,9.76,17.09,25.19,17.09,45.88,0,.06,0,.12,0,.18v67.41c0,.08,0,.15.02.22Z"></Path>
        </G>
        <G
          id="lats"
          fill={activeGroup.includes("lats") ? activeColor : color}
        >
          <Path d="M434.78,288.86s-.07.09-.1.13c-.22.34-5.47,8.5-8.15,29.1-.85,6.51-3.57,14.25-6.72,23.23-6.58,18.72-15.58,44.36-15.28,80.36.43,13.14,5.65,23.42,12.89,37.65,1.23,2.42,2.53,4.97,3.88,7.7-4.12-1.48-8.89-2.61-14.42-3.43-5.69-.85-13.3-1.57-21.55-1.17-3.8-.78-4.69-7.1-5.79-17.18-.95-8.73-2.13-19.62-6.66-29.69-2.87-6.38-7.75-12.01-12.9-17.96-8.29-9.56-16.86-19.46-16.67-32.79.14-9.71,2.63-29.07,7.13-47.32l.03-.11c2.02-7.08,4.3-14.73,6.66-22.67,4.27-14.38,8.68-29.24,11.69-41.11,2.87-11.32,10.65-24.95,19.93-32.52,1.97,2.53,6.37,5.43,12.83,9.71,7.78,5.15,17.48,11.56,26.88,20.06,3.36,3.03,6.55,6.21,9.7,9.67-2.7,2.3-4.87,8.75-3.38,28.34Z"></Path>
          <Path d="M317.22,364.79c.19,13.33-8.37,23.23-16.67,32.79-5.16,5.95-10.03,11.58-12.9,17.96-4.53,10.08-5.71,20.95-6.66,29.69-1.1,10.09-1.99,16.4-5.78,17.18-8.25-.39-15.87.32-21.56,1.17-5.53.82-10.29,1.96-14.42,3.43,1.36-2.73,2.65-5.27,3.88-7.7,7.23-14.23,12.46-24.51,12.89-37.69.3-35.95-8.7-61.59-15.28-80.31-3.15-8.97-5.87-16.71-6.72-23.23-2.68-20.6-7.93-28.76-8.15-29.1-.03-.04-.06-.09-.09-.12,1.5-19.62-.69-26.06-3.39-28.35,3.15-3.46,6.35-6.64,9.7-9.67,9.41-8.49,19.1-14.91,26.88-20.06,6.47-4.28,10.86-7.18,12.83-9.72,9.28,7.56,17.06,21.2,19.93,32.52,3,11.87,7.43,26.74,11.7,41.12,2.34,7.91,4.61,15.55,6.63,22.6,0,.02.02.03.02.04v.02c4.51,18.27,7.01,37.69,7.15,47.42Z"></Path>
        </G>
        <G
          id="rear-shoulders"
          fill={activeGroup.includes("rear-shoulders") ? activeColor : color}
        >
          <Path d="M482.79,270.28c-2.14-1.93-4.5-3.42-7.17-4.57-4.95-2.13-8.68-1.8-12.27-1.46-3.63.33-7.4.67-13.15-1.32-2.51-.88-4.13-1.75-5.3-2.39-1.05-.58-2-1.09-3.05-1.22h0c-3.58-4.02-7.18-7.64-11.01-11.11-9.61-8.67-19.84-15.44-27.31-20.39-4.94-3.27-10.46-6.92-11.99-8.82,1.15-.76,2.31-1.42,3.49-1.96.66-.23,1.39-.5,2.16-.87,1.46-.66,3.11-1.61,4.88-3.01,1.6-1.27,2.45-2.21,3.19-3.05.59-.65,1.1-1.22,1.93-1.88,3.68-2.9,9.07-3.22,15.89-3.63,2.05-.12,4.17-.25,6.45-.45h.03c7.41-.1,22.56.81,32.49,16.82,8.94,14.4,16.76,37,20.74,49.29Z"></Path>
          <Path d="M268.97,218.98c-1.55,1.96-7.04,5.59-11.95,8.85-7.47,4.95-17.71,11.71-27.31,20.39-3.83,3.46-7.43,7.09-11.01,11.1h0c-1.05.14-1.99.65-3.04,1.23-1.18.64-2.8,1.51-5.31,2.39-5.75,1.99-9.51,1.65-13.15,1.32-3.6-.34-7.32-.67-12.27,1.46-2.67,1.14-5.03,2.64-7.17,4.56,3.99-12.29,11.8-34.88,20.74-49.28,9.93-16,25.08-16.92,32.49-16.82h.03c2.29.2,4.4.33,6.45.45,6.82.41,12.21.73,15.9,3.64.82.65,1.33,1.21,1.92,1.87.74.84,1.6,1.79,3.19,3.05,1.72,1.36,3.32,2.29,4.75,2.95.09.04.18.09.27.11.42.2.81.36,1.19.5,0,0,.03.02.04.02.02,0,.04.02.06.03.04,0,.07.03.11.04.21.08.42.15.62.22,1.17.54,2.33,1.19,3.47,1.94Z"></Path>
        </G>
        <G
          id="traps-middle"
          fill={activeGroup.includes("traps-middle") ? activeColor : color}
        >
          <Path d="M389.11,215.37c-.58.38-1.04.89-1.32,1.65-.04.13-.09.27-.12.41-11.23,8.53-19.62,24.77-22.29,35.29-2.99,11.79-7.39,26.62-11.65,40.97-2.37,7.99-4.66,15.7-6.69,22.83-1.11,3.88-2.14,7.58-3.07,11.06-.78,2.93-3.9,12.48-11.28,12.48h-4.83c-7.38,0-10.5-9.56-11.28-12.48-.93-3.45-1.94-7.11-3.04-10.96,0-.02,0-.04-.02-.05,0-.03,0-.05-.02-.08-2.03-7.1-4.31-14.8-6.68-22.77-4.26-14.35-8.67-29.18-11.65-40.98-2.68-10.54-11.07-26.78-22.31-35.3-.03-.14-.07-.27-.12-.41-.15-.43-.38-.79-.66-1.09,13.23-1.89,43.25-6.01,56.33-6.34.2,0,.41,0,.61,0,.2,0,.41,0,.6,0,.35,0,.7,0,1.05,0,.31,0,.62,0,.93,0,.37,0,.74,0,1.13.03,14.25.45,43.01,4.02,56.37,5.76Z"></Path>
        </G>
        
      </Svg>
    </View>
  );
};
