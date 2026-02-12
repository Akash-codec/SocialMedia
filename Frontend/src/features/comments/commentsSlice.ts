import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface Comment {
  id: string;
  postId: string;
  content: string;
  authorId: string;
  createdAt: string;
}

interface CommentsState {
  comments: { [postId: string]: Comment[] }; // Normalize comments by postId
  loading: boolean;
  error: string | null;
}

const initialState: CommentsState = {
  comments: {},
  loading: false,
  error: null,
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    fetchCommentsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchCommentsSuccess: (state, action: PayloadAction<{ postId: string; comments: Comment[] }>) => {
      state.comments[action.payload.postId] = action.payload.comments;
      state.loading = false;
    },
    fetchCommentsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    addComment: (state, action: PayloadAction<Comment>) => {
      const { postId } = action.payload;
      if (!state.comments[postId]) {
        state.comments[postId] = [];
      }
      state.comments[postId].push(action.payload);
    },
  },
});

export const { fetchCommentsStart, fetchCommentsSuccess, fetchCommentsFailure, addComment } = commentsSlice.actions;
export default commentsSlice.reducer;
