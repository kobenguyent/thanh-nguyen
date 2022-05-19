export const endpoint = {
    pet: {
        findByStatus: (status:string) => `/pet/findByStatus?status=${status}`,
        findByTags: (tags:string) => `/pet/findByTags?tags=${tags}`,
        findById: (id:string) => `/pet/${id}`,
    }
}
