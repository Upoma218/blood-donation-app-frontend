"use client";

import DBDatePicker from "@/components/Forms/DBDatePicker";
import DBForm from "@/components/Forms/DBForm";
import DBInput from "@/components/Forms/DBInput";
import { useCreateRequestMutation } from "@/redux/api/userApi";
import { dateFormatter } from "@/utils/dateFormatter";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const requestValidationSchema = z.object({
  hospitalName: z.string({ required_error: "Hospital name is required." }),
  hospitalAddress: z.string({
    required_error: "Hospital address is required.",
  }),
  reason: z.string({ required_error: "Reason for asking is required." }),
  dateOfDonation: z.preprocess(
    (x) => (x ? x : undefined),
    z.date().refine((date) => date instanceof Date, {
      message: "Invalid date format",
    })
  ),
});

const defaultValues = {
  hospitalName: "Labaid",
  hospitalAddress: "Dhanmondi",
  reason: "Fever",
  dateOfDonation: "2024-06-26",
};

const CreateRequest = () => {
  const searchParams = useSearchParams();

  const donorId = searchParams.get("donorId");
  console.log(donorId);
  const router = useRouter();
  const [error, setError] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const [createRequest] = useCreateRequestMutation();

  const handleSubmit = async (values: FieldValues) => {
    values.dateOfDonation = dateFormatter(values.dateOfDonation);
    values.donorId = donorId;

    if (!isChecked) {
      toast.error("Must e agreed with terms and conditions");
      return;
    }
    try {
      console.log(values);

      const res = await createRequest(values).unwrap();
      console.log(res);

      if (res?.id) {
        toast.success("Request created successfully!");
        setIsChecked(false);
        router.push("/dashboard/requester");
      }
    } catch (err: any) {
      console.error(err.message);
      setError(err.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-pink-100 p-8 w-full">
      <div className="max-w-2xl w-full bg-white shadow-md rounded-md p-8 text-center">
        <h1 className="text-3xl font-semibold text-red-700 bg-white mb-4">
          Create Request for Blood
        </h1>
        {error && (
          <div className="bg-red-500 text-white p-2 rounded mb-4">{error}</div>
        )}

        <DBForm
          onSubmit={handleSubmit}
          resolver={zodResolver(requestValidationSchema)}
          defaultValues={defaultValues}
        >
          <div className="grid grid-cols-1 w-full mb-4 p-6">
            <div>
              <DBInput
                name="hospitalName"
                label="Hospital Name"
                type="text"
                fullWidth={true}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <DBInput
                name="hospitalAddress"
                label="Hospital Address"
                type="text"
                fullWidth={true}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <DBInput
                name="reason"
                label="Reason"
                type="text"
                fullWidth={true}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <DBDatePicker
                name="dateOfDonation"
                label="Date of Donation"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="my-3">
            <label>
              <input
                checked={isChecked}
                onClick={() => {
                  setIsChecked(!isChecked);
                }}
                type="checkbox"
                required
                className="m-2"
              />
              Agree with{" "}
              <Link href="/terms" className="link text-pink-500">
                {" "}
                Terms And Conditions
              </Link>
            </label>
          </div>
          <button
            type="submit"
            className="btn bg-red-700 w-full mb-4 text-white font-bold"
          >
            Send Request
          </button>
        </DBForm>
      </div>
    </div>
  );
};

export default CreateRequest;
