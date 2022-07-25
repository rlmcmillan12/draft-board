import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const draftsApiSlice = createApi({
  reducerPath: 'drafts',
  baseQuery: fetchBaseQuery({ baseUrl: 'api/v1' }),
  tagTypes: ['Draft'],
  endpoints: (builder) => ({
    getDrafts: builder.query({
      query: () => '/drafts',
      providesTags: ['Draft'],
    }),
    updateDraft: builder.mutation({
      query: ({ id, updateDraft }) => ({
        url: `/drafts/${id}`,
        method: 'PATCH',
        body: updateDraft,
      }),
      invalidatesTags: ['Draft'],
    }),
  }),
})

export const { useGetDraftsQuery, useUpdateDraftMutation } = draftsApiSlice
