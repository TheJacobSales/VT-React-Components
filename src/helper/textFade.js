
const TextFade = ({ text }) => {

    return text.split("").map((char, index) => {
            const style = {"animation-delay": (1.5 + index/10) + "s"};
            const dist = 121.876 + index * 7;
            return <tspan 
                className="mord-nums"
                aria-hidden="true" 
                key={index} 
                style = {style}
                x = {dist}
                y="147.239"
                strokeWidth="0.287"
                fontFamily="Arial"
                fontSize="13.761"
                fontStretch="normal"
                fontStyle="normal"
                fontVariant="normal"
                fontWeight="normal"
                >
                {char}
            </tspan>;
        })

    
}

export default TextFade;