import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const itemsApi = createApi({
  reducerPath: 'itemsApi',
  baseQuery: fetchBaseQuery({
    // Base URL for the API we're fetching
    baseUrl: 'https://run.mocky.io/v3/',
  }),
  endpoints: (builder) => ({
    getItems: builder.query({
      // Specific path we want to fetch from API
      query: () => '7f02819f-8254-410a-b8af-ab98572bd26b',
    }),
  }),
});

export const { useGetItemsQuery } = itemsApi;
