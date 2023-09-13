import React, { FC } from "react";
// import SvgIcon from "@mui/material/SvgIcon";
import { Box, SxProps } from "@mui/material";

const BlobHero: FC<{ sx?: SxProps }> = ({ sx }) => {
  return (
    <Box sx={{ ...sx }}>
      <svg width="2270" height="1721" viewBox="0 0 2270 1721" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_304_40)">
          <path fillRule="evenodd" clipRule="evenodd" d="M1529.04 527.799C1458.09 510.225 1378.6 479.885 1318.22 521.07C1257.15 562.726 1260.08 649.088 1245.09 721.478C1228.81 800.084 1185.04 885.311 1228.86 952.564C1273.45 1020.98 1367.93 1038.09 1449.54 1035.21C1518.2 1032.79 1567.27 979.254 1622.7 938.671C1677.94 898.226 1751.95 870.071 1766.49 803.166C1781.42 734.469 1739.16 667.214 1693.25 613.975C1651.29 565.307 1591.42 543.252 1529.04 527.799Z" fill="#FF7038" fillOpacity="0.25" />
        </g>
        <g filter="url(#filter1_f_304_40)">
          <path fillRule="evenodd" clipRule="evenodd" d="M741.382 712.799C812.326 695.225 891.814 664.885 952.195 706.07C1013.27 747.726 1010.34 834.088 1025.33 906.478C1041.61 985.084 1085.38 1070.31 1041.56 1137.56C996.973 1205.98 902.484 1223.09 820.877 1220.21C752.221 1217.79 703.15 1164.25 647.719 1123.67C592.476 1083.23 518.465 1055.07 503.927 988.166C489 919.469 531.257 852.214 577.166 798.975C619.133 750.307 679.003 728.252 741.382 712.799Z" fill="#FF2E84" fillOpacity="0.25" />
        </g>
        <defs>
          <filter id="filter0_f_304_40" x="709.925" y="0.459473" width="1559.62" height="1535.05" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_304_40" />
          </filter>
          <filter id="filter1_f_304_40" x="0.873047" y="185.459" width="1559.62" height="1535.05" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_304_40" />
          </filter>
        </defs>
      </svg>
    </Box>
  );
};

export default BlobHero;
