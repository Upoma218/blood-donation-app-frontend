import DBDatePicker from "@/components/Forms/DBDatePicker";
import DBForm from "@/components/Forms/DBForm";
import DBInput from "@/components/Forms/DBInput";
import { useUpdateMYProfileMutation } from "@/redux/api/userApi";
import { User } from "@/types";
import { dateFormatter } from "@/utils/dateFormatter";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import DBModal from "../Dashboard/DBModal/DBModal";

interface ProfileUpdateModalProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  id: string;
  showModalButtonLabel: string;
  title: string;
  defaultValues: User;
}

export const updateUserProfileSchema = z.object({
  phone: z
    .string()
    .regex(/^\d{11}$/, "Please provide a valid phone number!")
    .optional(),
  location: z.string().min(1, "Please enter your address!"),
  bio: z.string(),
  age: z
    .preprocess((x) => (x ? x : undefined), z.coerce.number().int().optional())
    .optional(),
  lastDonationDate: z
    .preprocess(
      (x) => (x ? x : undefined),
      z.date().refine((date) => date instanceof Date, {
        message: "Invalid date format",
      })
    )
    .optional(),
});

const ProfileUpdateModal: React.FC<ProfileUpdateModalProps> = ({
  setOpen,
  id,
  showModalButtonLabel,
  title,
  defaultValues,
}) => {
  const [updateMYProfile] = useUpdateMYProfileMutation();
  const [isSuccess, setIsSuccess] = useState(false);
  const [users, setUsers] = useState({});

  const { handleSubmit, reset, setValue } = useForm({
    defaultValues,
    resolver: zodResolver(updateUserProfileSchema),
  });
  useEffect(() => {
    setUsers(defaultValues);
    reset(defaultValues);
  }, [reset]);

  console.log(defaultValues);

  const handleFormSubmit: SubmitHandler<any> = async (data) => {
    data.lastDonationDate = dateFormatter(data.lastDonationDate);
    data.age = Number(data.age);
    try {
      const res = await updateMYProfile({ body: data }).unwrap();
      console.log(res);
      if (res?.id) {
        setIsSuccess(true);
        reset();
        setOpen(false);
      }
    } catch (error) {
      console.error("Update Error:", error);
    }
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <DBModal
      id={id}
      title={title}
      showModalButtonLabel={showModalButtonLabel}
      onClose={handleCloseModal}
      content={
        <div className="text-gray-700">
          <h1 className="text-3xl font-semibold text-red-700 my-4">
            Update Profile
          </h1>
          <DBForm onSubmit={handleFormSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <DBInput
                name="location"
                label="Location"
                fullWidth
                className="input input-bordered w-full"
              />
              <DBInput
                name="bio"
                label="Bio"
                type="text"
                fullWidth
                className="input input-bordered w-full"
              />
              <DBInput
                name="age"
                label="Age"
                type="number"
                fullWidth
                className="input input-bordered w-full"
              />
              <DBDatePicker
                name="lastDonationDate"
                label="Last Donation Date"
                className="w-full"
              />
            </div>
            <button
              className="btn bg-pink-500 p-3 w-full my-6 font-bold text-white"
              type="submit"
              onSubmit={() => {
                handleSubmit;
              }}
            >
              Update Profile
            </button>
          </DBForm>
          {isSuccess && (
            <p className="text-green-500 mt-2">
              User profile updated successfully!
            </p>
          )}
        </div>
      }
    />
  );
};
export default ProfileUpdateModal;
