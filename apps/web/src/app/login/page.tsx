
'use client';

import FormInput from '@/components/Forminput';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useFormik } from 'formik';
import { validationSchema } from './validationSchema';
import useRegister from '@/hooks/api/auth/useRegister';
import useLogin from '@/hooks/api/auth/useLogin';

const Login = () => {
  const { login} = useLogin();
  const {values, errors,touched, handleChange,handleBlur, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      login(values);
    },
  });
  return (
    <main className="container mx-auto px-4">
      <div className="mt-16 flex justify-center">
        <Card className="w-[350px] ">
          <CardHeader className="space-y-4">
            <CardTitle className="text-center text-2xl ">
             Login
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                <FormInput
                  name="email"
                  type="text"
                  label="Email"
                  placeholder="Type your email here"
                  value={values.email}
                  error={errors.email}
                  isError={!!touched.email && !!errors.email}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />

                <FormInput
                  name="password"
                  type="password"
                  label="Password"
                  placeholder="Type your Password here"
                  value={values.password}
                  error={errors.password}
                  isError={
                    !!touched.password && !!errors.password
                  }
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />

                <Button type="submit" className=" mt-6 w-full text-white">
                  Login
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-end">
            {/* <Button className=" text-white">Register</Button> */}
          </CardFooter>
        </Card>
      </div>
    </main>
  );
};

export default Login;
