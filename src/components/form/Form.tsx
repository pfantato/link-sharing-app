"use client";
import "client-only";

import type { ZodSchema } from "zod";
import type {
  Control,
  DefaultValues,
  FieldValues,
  SubmitHandler,
} from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import { Button } from "@/components/button";
import { Input } from "@/components/input";

import styles from "./Form.module.scss";

export type FormInput = {
  type: string;
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  required?: boolean;
};

export type FormInputs = { [key: string]: FormInput };

export type FormProps<T extends FieldValues> = {
  inputs: FormInputs;
  schema: ZodSchema;
  onSubmit: SubmitHandler<T>;
  submitButton: {
    label: string;
    variant?: "primary" | "secondary";
  };
  hint?: string;
};

export const Form = <FormSchema extends FieldValues>({
  schema,
  inputs,
  onSubmit,
  hint,
  submitButton,
}: FormProps<FormSchema>) => {
  const classNames = {
    form: styles.form,
    hint: styles.hint,
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    mode: "onBlur",
    defaultValues: Object.entries(inputs).reduce(
      (acc, [name, input]) => ({ ...acc, [name]: input.defaultValue }),
      {} as DefaultValues<FormSchema>
    ),
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classNames.form}>
      {Object.entries(inputs).map(([name, input]) => (
        <Controller
          key={name}
          name={name}
          control={control as Control<FieldValues>}
          rules={{ required: input.required }}
          render={({ field }) => (
            <Input
              {...field}
              name={name}
              type={input.type}
              label={input.label}
              placeholder={input.placeholder}
              hasError={Boolean(errors[name])}
              errorMessage={`${errors[name]?.message}`}
            />
          )}
        />
      ))}

      {hint && <p className={classNames.hint}>{hint}</p>}

      <Button type="submit" variant={submitButton.variant || "primary"}>
        {submitButton.label}
      </Button>
    </form>
  );
};
