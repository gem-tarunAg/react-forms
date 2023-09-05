import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ErrorMessage, Field, FieldProps } from 'formik';
import { TextError } from '../../TextError';
import { InputProps } from '../../../protocols/Formik';

export const Datepicker = ({ label, name }: InputProps) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <Field name={name}>
        {({ form, field }: FieldProps) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DatePicker
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id={name}
              {...field}
              selected={value}
              onChange={(val) => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
};
