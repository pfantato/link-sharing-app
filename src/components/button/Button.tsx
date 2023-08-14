import clsx from "clsx";
import styles from "./Button.module.scss";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
  active?: boolean;
  disabled?: boolean;
};

type ButtonComponent = React.FC<ButtonProps>;

export const Button: ButtonComponent = ({
  variant = "primary",
  onClick,
  children,
  className,
  type = "button",
  active = false,
  disabled = false,
  ...htmlButtonAttributes
}) => {
  const classNames = {
    button: styles.button,
    primary: styles["button--primary"],
    secondary: styles["button--secondary"],
    active: styles.active,
    disabled: styles.disabled,
  };

  return (
    <button
      {...htmlButtonAttributes}
      className={clsx(
        classNames.button,
        active && classNames.active,
        disabled && classNames.disabled,
        classNames[variant],
        className
      )}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
