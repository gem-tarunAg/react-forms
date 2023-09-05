import { FormikProps, useFormik } from 'formik';
import * as Yup from 'yup';

type BasicFormValues = {
  name: string;
  email: string;
  phone: string;
};

const initialValues = {
  name: '',
  email: '',
  phone: '',
};

const onSubmit = (values: BasicFormValues) => {
  console.log('Form Submitted!', values);
};

const validationSchema = Yup.object({
  name: Yup.string().required('It is a required field'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string().required('Required'),
});

const validate = (values: BasicFormValues) => {
  let errors: BasicFormValues = { name: '', email: '', phone: '' };
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (!values.name) {
    errors.name = 'Required';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!emailRegex.test(values.email)) {
    errors.email = 'Invalid email id';
  }

  if (!values.phone) {
    errors.phone = 'Required';
  }
  return errors;
};

export const BasicForm = () => {
  const formik: FormikProps<BasicFormValues> = useFormik<BasicFormValues>({
    initialValues,
    onSubmit,
    validationSchema,
    // validate
  });

  //   console.log('Form Values', formik.values);

  return (
    <div className="w-1/2">
      <form className="bg-white shadow-lg rounded-lg px-8 py-8" onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name && <p className="text-sm text-red-500">{formik.errors.name}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            placeholder="Enter you e-mail id"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && <p className="text-sm text-red-500">{formik.errors.email}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Phone
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            name="phone"
            type="text"
            placeholder="Enter your phone number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone && <p className="text-sm text-red-500">{formik.errors.phone}</p>}
        </div>
        <div className="flex items-center justify-center mt-8">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
