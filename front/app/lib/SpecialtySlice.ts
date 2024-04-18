// src/features/users/usersSlice.js

'use client'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {CurentSpeciality,
} from '../types/types';

const initialState : CurentSpeciality = {
    specialty: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null 
};


export const fetchSpecialty = createAsyncThunk('specialty', async () => {
    const response = await axios.get('http://localhost:3001/api/speciality/all');
    return response.data; 
});


const specialtySlice = createSlice({
    name: 'specialty',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchSpecialty.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchSpecialty.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.error = null;
                state.specialty = action.payload;
            })
            .addCase(fetchSpecialty.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message||"somthing wrong";
            });
    }
});

export default specialtySlice.reducer;
