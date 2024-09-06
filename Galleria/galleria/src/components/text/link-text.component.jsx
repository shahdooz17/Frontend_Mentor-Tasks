const linkSizes = {
  large: {
    textSize: "text-[12px]",
    lineHeight: "leading-[15px]",
    tracking: "tracking-[2.5px]",
  },
  small: {
    textSize: "text-[9px]",
    lineHeight: "leading-[11px]",
    tracking: "tracking-[2px]",
  },
};

export const LinkText = ({ size = "large", children }) => {
  const { textSize, lineHeight, tracking } = linkSizes[size] || linkSizes.large;

  return (
    <p
      className={`text-dark-grey ${textSize} ${lineHeight} ${tracking} hover:text-black cursor-pointer`}
    >
      {children}
    </p>
  );
};
