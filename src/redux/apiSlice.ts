import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export const fetchPosts: any = createAsyncThunk(
    'api/fetchPosts',
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        return response.json();
    }
);

interface PostsState {
    data: any[],
    loading: boolean,
    error: string | null,
}

const initialState: PostsState = {
    data: [],
    loading: false,
    error: null,
};

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message ?? 'An error occurred';
        });
    },
});

export const selectPosts = (state: RootState) => state.posts.data;
export const selectPostsLoading = (state: RootState) => state.posts.loading;
export const selectPostsError = (state: RootState) => state.posts.error;

export default postsSlice.reducer;
