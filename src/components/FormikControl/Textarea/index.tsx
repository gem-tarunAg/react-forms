import { ErrorMessage, Field } from 'formik';
import { TextError } from '../../TextError';
import { InputProps } from '../../../protocols/Formik';

export const Textarea = ({ label, name }: InputProps) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <Field
        as="textarea"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={name}
        name={name}
      />
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
};
