"use client";
import type { InputHTMLAttributes } from "react";

import clsx from "clsx";

import styles from "./Input.module.scss";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  active?: boolean;
  hint?: string;
  icon?: React.ReactNode;
  errorMessage?: string;
  hasError?: boolean;
};

export const Input = ({
  label,
  id,
  name,
  type,
  placeholder,
  required,
  disabled = false,
  active = false,
  value,
  hint,
  onChange = () => {},
  errorMessage,
  hasError,
  icon,
  ...inputProps
}: InputProps) => {
  const stateClassNames = clsx(
    active && styles.active,
    disabled && styles.disabled,
    hasError && styles.error
  );

  const classNames = {
    wrapper: clsx(styles.wrapper, styles[`wrapper--${type}`]),
    input: clsx(styles.input, stateClassNames),
    inputGroup: clsx(styles.inputGroup, stateClassNames),
    label: clsx(styles.label, stateClassNames),
    icon: styles.icon,
    error: styles.error,
    errorMessage: styles.errorMessage,
    hint: styles.hint,
    active: styles.active,
    disabled: styles.disabled,
  };

  return (
    <div className={classNames.wrapper}>
      <label className={classNames.label} htmlFor={name}>
        {label}
      </label>
      <div className={classNames.inputGroup}>
        {icon && <div className={classNames.icon}>{icon}</div>}
        <input
          id={id}
          className={classNames.input}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          value={value}
          onChange={onChange}
          aria-errormessage={errorMessage}
          {...inputProps}
        />
        {hasError && errorMessage && (
          <span className={classNames.errorMessage}>{errorMessage}</span>
        )}
        {hint && <span className={classNames.hint}>{hint}</span>}
      </div>
    </div>
  );
};
