import { Formik, Form, Field, ErrorMessage, FieldArray, ArrayHelpers, FormikProps, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { TextError } from '../TextError';
import { useState } from 'react';

type BasicFormValues = {
  name: string;
  email: string;
  phoneNumbers: string[];
  phNumbers: string[];
  address: string;
  description: string;
  social: {
    github: string;
    linkedin: string;
  };
};

const initialValues = {
  name: '',
  email: '',
  phoneNumbers: ['', ''],
  phNumbers: [''],
  address: '',
  description: '',
  social: {
    github: '',
    linkedin: '',
  },
};

const savedValues = {
  name: 'Tarun',
  email: 'tg@hotmail.com',
  phoneNumbers: ['9116320360', ''],
  phNumbers: [''],
  address: 'bharatpur',
  description: 'Hey, I am a developer',
  social: {
    github: 'tarun-09',
    linkedin: '',
  },
};

const onSubmit = (values: BasicFormValues, { setSubmitting, resetForm }: FormikHelpers<BasicFormValues>) => {
  setTimeout(() => {
    console.log('Form Submitted!', values);
    setSubmitting(false);
    resetForm();
  }, 5000);
};

const validationSchema = Yup.object({
  name: Yup.string().required('It is a required field'),
  email: Yup.string().email('Invalid email').required('Required'),
  phoneNumbers: Yup.array().of(Yup.string()),
  phNumbers: Yup.array().of(Yup.number().typeError('Enter a valid number')),
  address: Yup.string(),
  description: Yup.string(),
  social: Yup.object({
    github: Yup.string(),
    linkedin: Yup.string(),
  }),
});

export const UserForm = () => {
  const [formValues, setFormValues] = useState<BasicFormValues | null>(null);
  return (
    <Formik
      initialValues={formValues || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {({ values, isValid, isSubmitting }: FormikProps<BasicFormValues>) => (
        <div className="w-1/3">
          <h1 className="text-center font-mono text-3xl font-bold my-3">User Form</h1>
          <Form className="bg-white shadow-lg rounded-lg px-8 py-8">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <Field
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                placeholder="Enter your name"
              />
              <ErrorMessage component={TextError} name="name" />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <Field
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                placeholder="Enter you e-mail id"
              />
              <ErrorMessage component={TextError} name="email" />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="primaryPhone">
                Primary phone number
              </label>
              <Field
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="primaryPhone"
                name="phoneNumbers[0]"
                placeholder="Enter your primary phone number"
              />
              <ErrorMessage component={TextError} name="phoneNumbers[0]" />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="secondaryPhone">
                Secondary phone number
              </label>
              <Field
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="secondaryPhone"
                name="phoneNumbers[1]"
                placeholder="Enter your secondary phone number"
              />
              <ErrorMessage component={TextError} name="phoneNumbers[1]" />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phNumbers">
                List of phone numbers
              </label>
              <FieldArray id="phNumbers" name="phNumbers">
                {({ push, remove }: ArrayHelpers) => {
                  return (
                    <>
                      {values.phNumbers.map((phNumber: string, index: number) => (
                        <div key={index} className="mb-4">
                          <Field
                            className="w-9/12 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name={`phNumbers[${index}]`}
                            placeholder="Enter your number"
                          />
                          {index > 0 && (
                            <button
                              type="button"
                              className="w-1/12 bg-blue-500 ml-4 py-1 rounded-2xl text-white text-xl font-bold hover:bg-blue-700"
                              onClick={() => remove(index)}
                            >
                              -
                            </button>
                          )}
                          <button
                            type="button"
                            className="w-1/12 bg-blue-500 ml-4 py-1 rounded-2xl text-white text-xl font-bold hover:bg-blue-700"
                            onClick={() => push('')}
                          >
                            +
                          </button>
                          <ErrorMessage component={TextError} name={`phNumbers[${index}]`} />
                        </div>
                      ))}
                    </>
                  );
                }}
              </FieldArray>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                Address
              </label>
              <Field
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="address"
                name="address"
                placeholder="Enter your address"
              />
              <ErrorMessage component={TextError} name="address" />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Description
              </label>
              <Field
                as="textarea"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                name="description"
                placeholder="Tell us About Youserlf"
              />
              <ErrorMessage component={TextError} name="description" />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="github">
                Github
              </label>
              <Field
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="github"
                name="social.github"
                placeholder="Enter your github profile"
              />
              <ErrorMessage component={TextError} name="social.github" />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="linkedin">
                Linkedin
              </label>
              <Field
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="linkedin"
                name="social.linkedin"
                placeholder="Enter your linkedin profile"
              />
              <ErrorMessage component={TextError} name="social.linkedin" />
            </div>

            <div className="flex items-center justify-evenly mt-8">
              <button
                type="reset"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-blue-300"
              >
                Reset
              </button>

              <button
                disabled={savedValues === null}
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-gray-400"
                type="button"
                onClick={() => setFormValues(savedValues)}
              >
                Load Saved Data
              </button>

              <button
                disabled={!isValid || isSubmitting}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-blue-300"
                type="submit"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};
