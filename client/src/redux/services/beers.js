import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const beersApiSlice = createApi({
  reducerPath: 'beers',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1' }),
  tagTypes: ['Beer'],
  endpoints: (builder) => ({
    getBeers: builder.query({
      query: () => '/beers',
      providesTags: ['Beer'],
    }),
    addNewBeer: builder.mutation({
      query: (newBeer) => ({
        url: '/beers',
        method: 'POST',
        body: newBeer,
      }),
      invalidatesTags: ['Beer'],
    }),
    deleteBeer: builder.mutation({
      query: (id) => ({
        url: `/beers/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Beer'],
    }),
    updateBeer: builder.mutation({
      query: ({ id, updatedBeer }) => ({
        url: `/beers/${id}`,
        method: 'PATCH',
        body: updatedBeer,
      }),
      invalidatesTags: ['Beer'],
    }),
  }),
})

export const { useGetBeersQuery, useAddNewBeerMutation, useDeleteBeerMutation, useUpdateBeerMutation } = beersApiSlice
