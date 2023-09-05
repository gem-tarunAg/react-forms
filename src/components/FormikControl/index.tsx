import { Checkbox } from './Checkbox';
import { Datepicker } from './Datepicker';
import { Input } from './Input';
import { RadioButtons } from './RadioButtons';
import { Select } from './Select';
import { Textarea } from './Textarea';

type ControlProps = {
  control: string;
  label: string;
  name: string;
  type?: string;
  options?: { key: string; value: string }[];
};

export const FormikControl = ({ control, ...rest }: ControlProps) => {
  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'textarea':
      return <Textarea {...rest} />;
    case 'select':
      return <Select {...rest} />;
    case 'radio':
      return <RadioButtons {...rest} />;
    case 'checkbox':
      return <Checkbox {...rest} />;
    case 'date':
      return <Datepicker {...rest} />;
    default:
      return null;
  }
};
