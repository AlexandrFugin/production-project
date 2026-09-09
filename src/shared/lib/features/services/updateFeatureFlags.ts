import { FeatureFlags } from '@/shared/types/featureFlags';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { updateFeatureFlagsMutation } from '../api/featureFlagsApi';
import { getAllFeatureFlags, setFeatureFlags } from '../lib/getSetFeatures';

interface UpdateFeatureFlagsOptions {
  userId: string;
  newFeatures: Partial<FeatureFlags>;
}

export const updateFeatureFlag = createAsyncThunk<
  void,
  UpdateFeatureFlagsOptions,
  ThunkConfig<string>
>('user/saveJsonSettings', async ({ userId, newFeatures }, thunkApi) => {
  const { rejectWithValue, dispatch } = thunkApi;

  const allFeatures = {
    ...getAllFeatureFlags(),
    ...newFeatures,
  };

  try {
    await dispatch(
      updateFeatureFlagsMutation({
        userId,
        features: allFeatures,
      }),
    );
    setFeatureFlags(allFeatures);
    return undefined;
  } catch (e) {
    console.log(e);
    return rejectWithValue('');
  }
});
