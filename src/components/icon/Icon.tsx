type IconProps = {
  size?: number;
  stroke?: string;
  fill?: string;
  iconName?: string;
  viewBox?: string;
};

export const Icon = ({
  size = 16,
  stroke,
  fill,
  viewBox = "0 0 16 16",
  iconName = "github",
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      height={size}
      width={size}
      fill={fill}
      stroke={stroke}
    >
      <use href={`#${iconName}`} />
    </svg>
  );
};
