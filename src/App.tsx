import { BasicForm } from './components/BasicForm';
import { FormikContainer } from './components/FormikContainer';
import { LoginForm } from './components/LoginForm';
import { RegistrationForm } from './components/RegistrationForm';
import { UserForm } from './components/UserForm';

function App() {
  return (
    <div className="min-h-screen bg-sky-50 flex items-center justify-center">
      <RegistrationForm />
    </div>
  );
}

export default App;
