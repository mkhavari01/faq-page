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

export const fetchPosts: any = createAsyncThunk(
    'api/fetchPosts',
    async () => {
        const response = await fetch('https://api-dev.hesetazegi.com/FAQ/List');
        return response.json();
    }
);

interface PostsState {
    data: ApiResponse | null,
    loading: boolean,
    error: string | null,
}

const initialState: PostsState = {
    data: null,
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
