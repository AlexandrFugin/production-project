import {fetchProfileData} from "./fetchProfileData";
import {userActions} from "entities/User";
import {TestAsyncThunk} from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import {Country} from "entities/Country";
import {Currency} from "entities/Currency";

const data = {
  username: 'admin',
  age: 22,
  country: Country.Kazakhstan,
  lastname: 'Nazarbaev',
  first: 'Nurik',
  city: 'Astana',
  currency: Currency.EUR,
}

describe("loginByUsername.test", () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({data}));

    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data)
  });

  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({status: 403}));
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
  });

})