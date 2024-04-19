import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { RootState } from './store';
import { CurrentUserState, Appointment,AppointmentStatus, PaymentStatus  , Doctor,User} from '../types/types';

const appointment: Appointment = {
  id: 1,
  appointmentTime: new Date('2024-05-01'),
  status:AppointmentStatus.Pending ,
  paymentStatus: PaymentStatus.Paid,
  appointmentDepartment: 'Cardiology',
  doctorId: 1,
  doctor: {
    id: 1,
    specialityId: 1
  },
  userId: 12,
  user: {
    id: 12,
    firstName: 'John',
    lastName: 'Doe',
    password:"1",
    email: 'johndoe@example.com',
    phoneNumber: '1234567890',
    imageUrl: 'https://example.com/avatar.jpg'
  }
};
const initialState: CurrentUserState = {
  loading: false,
  user: {
    id: 12,
    firstName: 'John',
    lastName: 'Doe',
    password: '$2b$10$pda5M0rWXf/UmFB617M2du3sDmf/vvEOnX0kE1CrtJPxx2ew4Iaom',
    email: 'q@gmail.com',
    phoneNumber: '+1234567890',
    imageUrl: 'https://example.com/avatar.jpg',
    appointments:[
appointment
    ]
  },
  error: null
};

export const fetchCurrentUser = createAsyncThunk(
  'currentUser/fetchCurrentUser',
  async (token:string) => {
    const response = await axios.get('http://localhost:3001/api/auth/getuser',{headers:{Authorization:token}}); 
    return response.data;
  }
);
export const updateCurrentUser = createAsyncThunk(
  'currentUser/updateCurrentUser',
  async ({ token, userData }: { token: string; userData: any }) => {
    const response = await axios.put(
      'http://localhost:3001/api/auth/updateuser',
      userData,
      { headers: { Authorization: token } }
    );
    return response.data;
  }
);

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.user = null;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
        state.user = null;
      })
   .addCase(updateCurrentUser.pending, (state) => {
    state.loading = true;
    state.error = null;
  })
  .addCase(updateCurrentUser.fulfilled, (state, action) => {
    state.loading = false;
    state.error = null;
    // Update user data in state
    if (state.user) {
      state.user = { ...state.user, ...action.payload };
    }
  })
  .addCase(updateCurrentUser.rejected, (state, action) => {
    state.loading = false;
    state.error = action.error.message || 'Failed to update user';
  });
},
});


export default currentUserSlice.reducer;
