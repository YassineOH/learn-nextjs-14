import AcmeLogo from '../ui/acme-logo';
import LoginForm from '../ui/login-form';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Login',
};

async function LoginPage() {
  return (
    <main className='flex items-center justify-center md:h-screen'>
      <div className='relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32'>
        <div className='flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36'>
          <div className='w-32 text-white md:w-36'>
            <AcmeLogo />
          </div>
        </div>
        <LoginForm />
        <div className='border w-full space-y-4 rounded-md p-4'>
          <p>
            <span className='font-bold'>email:</span> user@nextmail.com
          </p>
          <p>
            <span className='font-bold'>passowrd:</span> 123456
          </p>
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
