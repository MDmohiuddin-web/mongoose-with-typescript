export interface IUser {
  id: number;
  role: string;
  password: string;
  name: {
    firstName: string;
    lastName: string;
  };
  DateOfBirth?: string;
  gender: "male" | "female";
  email: string;
  contactNumber: string;
  address: {
    presentAddress: string;
    permanentAddress: string;
  };
}





