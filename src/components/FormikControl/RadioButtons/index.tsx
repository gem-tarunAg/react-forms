import { ErrorMessage, Field, FieldProps } from 'formik';
import { TextError } from '../../TextError';
import React from 'react';
import { InputProps } from '../../../protocols/Formik';

export const RadioButtons = ({ label, name, options }: InputProps) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <Field name={name}>
        {({ field }: FieldProps) =>
          options &&
          options.map((option) => (
            <React.Fragment key={option.key}>
              <input
                type="radio"
                id={option.value}
                {...field}
                value={option.value}
                checked={field.value === option.value}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
              />
              <label className="text-gray-700 text-lg mx-2" htmlFor={option.value}>
                {option.key}
              </label>
            </React.Fragment>
          ))
        }
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
};
