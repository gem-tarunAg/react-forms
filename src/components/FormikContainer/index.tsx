import { Formik, Form, FormikProps } from 'formik';
import * as Yup from 'yup';
import { FormikControl } from '../FormikControl';

type FormValues = {
  email: string;
  description: string;
  gender: string;
  workLocation: string;
  skills: string[];
  dob: Date | null;
};

export const FormikContainer = () => {
  const genderOptions = [
    { key: 'Male', value: 'male' },
    { key: 'Female', value: 'female' },
    { key: 'Other', value: 'other' },
  ];

  const workLocationOptions = [
    { key: 'Select your Location', value: '' },
    { key: 'Remote', value: 'remote' },
    { key: 'Gurugram', value: 'gurugram' },
    { key: 'Panchkula', value: 'panchkula' },
    { key: 'Noida', value: 'noida' },
    { key: 'Bangalore', value: 'bangalore' },
  ];

  const skillOptions = [
    { key: 'Angular', value: 'angular' },
    { key: 'React', value: 'react' },
    { key: 'Node', value: 'Node' },
    { key: 'MongoDB', value: 'mongodb' },
    // Add more skill options as needed
  ];
  const initialValues: FormValues = { email: '', description: '', gender: '', workLocation: '', skills: [], dob: null };
  const validationSchema = Yup.object({
    email: Yup.string().email('Enter a valid email').required('Email is required'),
    description: Yup.string().required('It is a required field'),
    gender: Yup.string().required('It is a required field'),
    workLocation: Yup.string().required('It is a required field'),
    skills: Yup.array().min(1, 'Please choose at least one skill').required('It is a required field'),
    dob: Yup.date().required('It is a required field'),
  });
  const onSubmit = (values: FormValues) => console.log('Form data', values);
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ values }: FormikProps<FormValues>) => (
        <Form className="w-1/3 bg-white shadow-2xl rounded-lg px-8 py-8">
          <FormikControl control="input" label="Email Id" name="email" type="email" />
          <FormikControl control="textarea" label="Description" name="description" />
          <FormikControl control="radio" label="Gender" name="gender" options={genderOptions} />
          <FormikControl control="select" label="Work Location" name="workLocation" options={workLocationOptions} />
          <FormikControl control="checkbox" label="Skills" name="skills" options={skillOptions} />
          <FormikControl control="date" label="Date of Birth" name="dob" />
          <div className="flex items-center justify-evenly mt-8">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-blue-300"
              type="submit"
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
