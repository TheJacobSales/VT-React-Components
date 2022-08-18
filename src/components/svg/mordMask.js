import React from "react";
import '../../mordStartup.css';
import TextFade from "../../helper/textFade";

const MordMask = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="210mm"
      height="297mm"
      version="1.1"
      viewBox="0 0 210 297"
    >
      <defs>
        <clipPath id="clipPath5750" clipPathUnits="userSpaceOnUse">
          <circle
            cx="102.713"
            cy="125.534"
            r="71.855"
            fill="#efedff"
            fillOpacity="1"
            strokeWidth="0.265"
            display="inline"
          ></circle>
        </clipPath>
        <clipPath id="clipPath5754" clipPathUnits="userSpaceOnUse">
          <circle
            cx="102.713"
            cy="125.534"
            r="71.855"
            fill="#efedff"
            fillOpacity="1"
            strokeWidth="0.265"
            display="inline"
          ></circle>
        </clipPath>
      </defs>
      <g display="inline">
        <g 
          className="mord-ears"
          fillOpacity="1">
          <path
            fill="#efedff"
            strokeWidth="0.403"
            d="M40.09 33.339l-8.243 80.548 47.63-49.337z"
          ></path>
          <path
            fill="#271592"
            strokeWidth="0.242"
            d="M43.303 43.097l-3.43 53.58 34.855-29.132z"
            display="inline"
          ></path>
        </g>
        <g 
          className="mord-ears"
          fillOpacity="1">
          <path
            fill="#efedff"
            strokeWidth="0.402"
            d="M165.162 33.339l8.243 80.284-47.63-49.176z"
          ></path>
          <path
            fill="#271592"
            strokeWidth="0.241"
            d="M161.95 43.065l3.43 53.405-34.856-29.037z"
            display="inline"
          ></path>
        </g>
        <circle
          className="mord-head"
          cx="102.713"
          cy="125.534"
          r="71.855"
          fill="#efedff"
          fillOpacity="1"
          strokeWidth="0.265"
          display="inline"
        ></circle>
        <g 
          className="mord-eyes"
          fill="#271592" 
          display="inline">
          <path
            strokeWidth="0.171"
            d="M92.037 133.699c-15.59 2.22-24.428-2.028-30.404-6.202-12.375-8.645-15.022-24.332-14.42-26.604 3.868-1.273 17.216 2.462 24.988 7.202 5.945 3.625 12.533 10.998 19.836 25.604z"
            display="inline"
          ></path>
          <path
            strokeWidth="0.169"
            d="M114.74 132.64c15.268 2.603 24.056-1.426 30.03-5.452 12.37-8.338 15.351-23.954 14.814-26.241-3.77-1.367-16.978 2.038-24.73 6.585-5.931 3.478-12.584 10.686-20.114 25.108z"
            display="inline"
          ></path>
        </g>
        <path
          className="mord-tears"
          fill="#271592"
          fillOpacity="1"
          strokeWidth="0.265"
          d="M73.025 129.117H81.227V198.702H73.025z"
          clipPath="url(#clipPath5754)"
        ></path>
        <path
          className="mord-tears"
          fill="#271592"
          fillOpacity="1"
          strokeWidth="0.27"
          d="M57.282 118.666H65.484V190.897H57.282z"
          clipPath="url(#clipPath5750)"
          display="inline"
        ></path>
        <text
          xmlSpace="preserve"
          style={{ InkscapeFontSpecification: "Arial" }}
          x="121.876"
          y="147.239"
          fill="#271592"
          fillOpacity="1"
          strokeWidth="0.287"
          fontFamily="Arial"
          fontSize="13.761"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
        >
          {/* <tspan
        style={{ InkscapeFontSpecification: "Arial" }}
        x="121.876"
        y="147.239"
        strokeWidth="0.287"
        fontFamily="Arial"
        fontSize="13.761"
        fontStretch="normal"
        fontStyle="normal"
        fontVariant="normal"
        fontWeight="normal"
        >
        </tspan> */}
          <TextFade text = "014" />
        </text>
        <path
          className="mord-moon"
          fill="#271592"
          strokeWidth="0.164"
          d="M110.308 80.638c4.349 4.98 3.836 12.542-1.144 16.89-4.98 4.349-12.543 3.837-16.891-1.144a11.934 11.934 0 01-2.926-8.682 11.99 11.99 0 011.179-4.436c-.375 4.749 6.664 11.11 11.866 6.569 5.202-4.542.276-12.26-4.846-12.698a11.99 11.99 0 014.554-.57 11.934 11.934 0 018.208 4.07z"
        ></path>
      </g>
    </svg>
  );
}

export default MordMask;