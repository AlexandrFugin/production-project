import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {Comment} from "entities/Comment";

export const fetchCommentsByArticleId = createAsyncThunk<Comment[], string | undefined, ThunkConfig<string>>(
  'articleDetails/fetchCommentsByArticleId',
  async (articleID, thunkAPI) => {
    const {extra, rejectWithValue} = thunkAPI;

    if (!articleID) {
      return rejectWithValue('error');
    }

    try {
      const response = await extra.api.get<Comment[]>(`/comments`, {
        params: {
          articleID,
          _expand: 'user'
        }
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error');
    }

  }
)