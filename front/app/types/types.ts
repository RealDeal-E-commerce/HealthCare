export interface User {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    userType: UserType;
    speciality: string;
    phoneNumber: string;
    imageUrl: string;
    appointments: Appointment[];
    ratingsComments: RatingsComment[];
    blogs: Blog[];
}
 export interface SignUpState {
  loading: boolean;
  error: string | null;
  success: boolean;
}
 export interface SignInState {
  loading: boolean;
  error: string | null;
  success: boolean;
}



export enum UserType {
  Patient = 'Patient',
  Doctor = 'Doctor',
}
  
  export interface Appointment {
    id: number;
    appointmentTime: Date;
    status: AppointmentStatus;
    paymentStatus: PaymentStatus;
    appointmentDepartment: string;
    doctorId: number;
    doctor: Doctor;
    userId: number;
    user: User;
  }
  export enum PaymentStatus {
    Paid = 'Paid',
    Unpaid = 'Unpaid',
  }
  export enum AppointmentStatus {
    Pending = 'Pending',
    Accepted = 'Accepted',
    Rejected = 'Rejected',
  }
  
  export interface Doctor {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    phoneNumber: string;
    imageUrl: string;
    speciality: string;
    appointments: Appointment[];
}
  
export interface Message {
    id: number;
    content: string;
}
  
  export interface RatingsComment {
    id: number;
    rating: number;
    review: string;
    imageSrc: string;
    name: string;
    userId: number;
    user: User;
  }
  
  export interface Admin {
    id: number;
    username: string;
    email: string;
    password: string;
  }
  
  export interface Payment {
    id: number;
    amount: number;
    paymentDate: Date;
}
  
  export interface Blog {
    id: number;
    title: string;
    text: string;
    imageUrl: string;
    authorId: number;
    author: User;
    comments: Comment[];
}

  
  export interface Comment {
    id: number;
    author: string;
    comment: string;
    timestamp: Date;
    blogId: number;
    blog: Blog;
  }
  
  export interface Product {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    category: string;
  }
  
  
  