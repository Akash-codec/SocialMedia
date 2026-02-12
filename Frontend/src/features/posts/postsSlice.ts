import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface Post {
  id: string;
  content: string;
  authorId: string;
  createdAt: string;
}

interface PostsState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

const initialState: PostsState = {
  posts: [],
  loading: false,
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    fetchPostsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchPostsSuccess: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
      state.loading = false;
    },
    fetchPostsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts.unshift(action.payload);
    },
  },
});

export const { fetchPostsStart, fetchPostsSuccess, fetchPostsFailure, addPost } = postsSlice.actions;
export default postsSlice.reducer;
