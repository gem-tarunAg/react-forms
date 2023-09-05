import { Formik, Form, FormikProps } from 'formik';
import * as Yup from 'yup';
import { FormikControl } from '../FormikControl';

type LoginFormValues = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const initialValues: LoginFormValues = { email: '', password: '' };
  const validationSchema = Yup.object({
    email: Yup.string().email('Please enter a valid mail').required('Email is Required!'),
    password: Yup.string().required('Password is required!'),
  });

  const onSubmit = (values: LoginFormValues) => {
    console.log('Submitted Data:', values);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ isValid }: FormikProps<LoginFormValues>) => (
        <div className="flex flex-col w-full items-center">
          <h1 className="text-4xl block font-bold font-mono my-4"> Login Form</h1>
          <Form className="w-1/3 bg-white shadow-2xl rounded-lg px-8 py-8">
            <FormikControl control="input" type="email" label="Email Id" name="email" />
            <FormikControl control="input" type="password" label="Password" name="password" />
            <div className="flex items-center justify-evenly mt-8">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-blue-300"
                type="submit"
                disabled={!isValid}
              >
                Submit
              </button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};
