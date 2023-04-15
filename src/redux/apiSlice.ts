import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';


interface ApiResponse {
    content: {
        count: number,
        items: Item[],
        parents: null | string
    };
    status: number;
    message: string | null;
}

export interface Item {
    "id": string,
    "faqid": number,
    "faquid": string,
    "language": number,
    "groupID": number,
    "title": string,
    "description": string,
    "priority": number
}

export const fetchData: any = createAsyncThunk(
    'api/fetchData',
    async () => {
        const response = await fetch('https://api-dev.hesetazegi.com/FAQ/List');
        return response.json();
    }
);

interface ApiState {
    data: ApiResponse | null,
    loading: boolean,
    error: string | null,
}

const initialState: ApiState = {
    data: null,
    loading: false,
    error: null,
};

export const apiSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message ?? 'An error occurred';
        });
    },
});

export const selectApi = (state: RootState) => state.api.data;
export const selectApiLoading = (state: RootState) => state.api.loading;
export const selectApiError = (state: RootState) => state.api.error;

export default apiSlice.reducer;
