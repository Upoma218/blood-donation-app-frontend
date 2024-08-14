"use client";

import DBForm from "@/components/Forms/DBForm";
import DBInput from "@/components/Forms/DBInput";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.services";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const validationSchema = z.object({
  email: z.string().email("Please enter a valid email address!"),
  password: z.string().min(6, "Must be at least 6 characters"),
});

const LoginPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const methods = useForm({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = async (values: FieldValues) => {
    try {
      const res = await userLogin(values);
      console.log(res.data);
      if (res?.data?.accessToken) {
        toast.success(res?.message);
        // window.location = "/dashboard" as any;
        storeUserInfo({ accessToken: res?.data?.accessToken });
        router.push("/dashboard");
      } else {
        setError(res.message);
      }
    } catch (err: any) {
      console.error(err.message);
      setError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className=" flex min-h-screen items-center justify-center bg-pink-100 py-6">
      <div className="max-w-md w-full bg-white shadow-md rounded-md p-8 text-center border-4 border-pink-100">
        <h1 className="text-3xl font-semi text-cyan-400 bg-white mb-4">
          Login To Donate Blood
        </h1>
        {error && (
          <div className="bg-red-500 text-white p-2 rounded mb-4">{error}</div>
        )}

        <FormProvider {...methods}>
          <DBForm onSubmit={handleLogin}>
            <div className="grid grid-cols-1 gap-4 mb-4">
              <DBInput
                name="email"
                label="Email"
                type="email"
                fullWidth={true}
                className="input input-bordered w-full"
              />
              <DBInput
                name="password"
                label="Password"
                type="password"
                fullWidth={true}
                className="input input-bordered w-full"
              />
            </div>

            <p className="text-right mb-4 text-sm">
              <Link href="/change-password" className="link text-pink-500">
                Want to change password?
              </Link>
            </p>

            <button
              type="submit"
              className="btn bg-cyan-400 w-full mb-4 text-white font-bold"
            >
              Login
            </button>
            <p className="text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="link text-pink-500">
                Create an account
              </Link>
            </p>
            <p className="text-sm text-left bg-slate-200 p-4 my-4">
              <span className="text-pink-500 font-bold text-md">
                You can test the functionalities by using these credintials for
                different users: <br />
              </span>{" "}
              admin: <br /> email: admin@gmail.com, password: admin123 <br />
              donor: <br /> email: donor@gmail.com, password: donor123 <br />
              requester: <br /> email: requester@gmail.com, password:
              requester123
            </p>
          </DBForm>
        </FormProvider>
      </div>
    </div>
  );
};

export default LoginPage;
