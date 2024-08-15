import { useUpdateMYProfileMutation } from "@/redux/api/userApi";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

// Define the types for the component props
interface ProfileUpdateModalProps {
  setOpen: (open: boolean) => void;
  id: string;
  defaultValues: {
    phone: string;
    location: string;
    bio: string;
    age: number;
    lastDonationDate: string;
  };
}

const ProfileUpdateModal: React.FC<ProfileUpdateModalProps> = ({
  setOpen,
  id,
  defaultValues,
}) => {
  // Use react-hook-form with the provided defaultValues
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm({
    defaultValues, // Use default values for the form
  });

  // Reset form when defaultValues change
  useEffect(() => {
    reset(defaultValues);
    console.log("Default values set:", defaultValues); // Log to verify values are being set
  }, [defaultValues, reset]);

  // Update profile mutation hook
  const [updateProfile] = useUpdateMYProfileMutation();

  // Handle form submission
  const onSubmit: SubmitHandler<typeof defaultValues> = async (data) => {
    console.log("Form submission started with data:", data); // Log the form data

    // Format the lastDonationDate as a string if it's a Date object
    const formattedData = {
      ...data,
      age: data.age ? Number(data.age) : undefined,
      lastDonationDate: data.lastDonationDate
        ? new Date(data.lastDonationDate).toISOString().split("T")[0] // Convert to 'YYYY-MM-DD' format
        : undefined,
    };

    try {
      const result = await updateProfile({ body: formattedData }).unwrap();
      console.log("Update successful with result:", result); // Log the result
      toast.success("Profile updated successfully!");
      setOpen(false); // Close the modal after successful update
    } catch (error) {
      console.error("Update failed with error:", error); // Log the error
      toast.error("Failed to update profile. Please try again.");
    }
  };

  // Handle modal closing
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="absolute inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto flex justify-center items-center min-h-screen">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md mx-4 md:mx-0 my-6">
        <h2 className="text-xl font-bold mb-4 text-center text-teal-500">
          Update Your Profile
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Phone Input */}
          <label className="block mb-4">
            Phone:
            <input
              {...register("phone")}
              type="text"
              className="border p-2 rounded w-full"
            />
          </label>

          {/* Location Input */}
          <label className="block mb-4">
            Location:
            <input
              {...register("location")}
              type="text"
              className="border p-2 rounded w-full"
            />
          </label>

          {/* Bio Input */}
          <label className="block mb-4">
            Bio:
            <input
              {...register("bio")}
              type="text"
              className="border p-2 rounded w-full"
            />
          </label>

          {/* Age Input */}
          <label className="block mb-4">
            Age:
            <input
              {...register("age")}
              type="number"
              className="border p-2 rounded w-full"
            />
          </label>

          {/* Last Donation Date Input */}
          <label className="block mb-4">
            Last Donation Date:
            <input
              {...register("lastDonationDate")}
              type="date"
              className="border p-2 rounded w-full"
            />
          </label>

          <div className="flex justify-end mt-4">
            {/* Close Button */}
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
              onClick={handleClose}
            >
              Close
            </button>
            {/* Submit Button */}
            <button
              type="submit"
              className="bg-teal-500 text-white px-4 py-2 rounded"
              disabled={isSubmitting} // Disable the button while submitting
            >
              {isSubmitting ? "Updating..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileUpdateModal;
