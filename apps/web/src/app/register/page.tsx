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

const Register = () => {
  const { register } = useRegister();
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      register(values);
    },
  });
  return (
    <main className="container mx-auto px-4">
      <div className="mt-16 flex justify-center">
        <Card className="w-[350px] ">
          <CardHeader className="space-y-4">
            <CardTitle className="text-center text-2xl ">
              Welcome to SOSMED!
            </CardTitle>
            <CardDescription>
              Sign-up and join us feel the joy of sharing thoughts!{' '}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={formik.handleSubmit}>
              <div className="grid w-full items-center gap-4">
                <FormInput
                  name="fullName"
                  type="text"
                  label=" Full Name"
                  placeholder="Type your Full Name here"
                  value={formik.values.fullName}
                  error={formik.errors.fullName}
                  isError={
                    !!formik.touched.fullName && !!formik.errors.fullName
                  }
                  handleBlur={formik.handleBlur}
                  handleChange={formik.handleChange}
                />

                <FormInput
                  name="email"
                  type="text"
                  label="Email"
                  placeholder="Type your email here"
                  value={formik.values.email}
                  error={formik.errors.email}
                  isError={!!formik.touched.email && !!formik.errors.email}
                  handleBlur={formik.handleBlur}
                  handleChange={formik.handleChange}
                />

                <FormInput
                  name="password"
                  type="password"
                  label="Password"
                  placeholder="Type your Password here"
                  value={formik.values.password}
                  error={formik.errors.password}
                  isError={
                    !!formik.touched.password && !!formik.errors.password
                  }
                  handleBlur={formik.handleBlur}
                  handleChange={formik.handleChange}
                />

                <Button type="submit" className=" mt-6 w-full text-white">
                  Register
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

export default Register;
