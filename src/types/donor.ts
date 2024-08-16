export interface UserProfile {
  id?: string;
  bio?: string;
  age?: number;
  lastDonationDate?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Donor {
  id: string;
  name?: string;
  email?: string;
  bloodType?: string;
  location?: string;
  availability?: boolean;
  createdAt?: string;
  updatedAt?: string;
  userProfile?: UserProfile;
  contactDetails?: {
    phone?: string;
    address?: string;
  };
}

export interface DonorId {
  params: {
    donorId: string;
  };
}
export interface User {
  id?: string;
  phone?: string;
  location?: string;
  bio?: string;
  age?: number;
  lastDonationDate: string;
  createdAt?: string;
  updatedAt?: string;
}

export enum RequestStatus {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
}
// Define the Donation type if needed
export interface Donation {
  id: string;
  dateOfDonation: string; // Or Date type if you prefer
  hospitalName: string;
  hospitalAddress: string;
  reason: string;
  requestStatus: RequestStatus;
}

export interface DonorStats {
  totalRequests: number; // Total number of requests made by the donor
  totalPendingRequests: number; // Total number of requests by the donor with pending status
  totalApprovedRequests: number; // Total number of requests by the donor with approved status
  totalRejectedRequests: number; // Total number of requests by the donor with rejected status
  totalDonations: number; // Total number of donations made by the donor (derived from `lastDonationDate`)
  donations: Donation[]; // List of donation records with full date range (if needed)
}

export interface AdminStats {
  totalUsers: number;
  totalDonors: number;
  totalRequesters: number;
  totalAvailableDonors: number;
  totalActiveUsers: number;
  totalDeactivatedUsers: number;
  totalUnAvailableDonors: number;
}
