
export const addBooksProfile = (bookOBJ) =>({
    type: "ADD_BOOKS_PROFILE",
    payload: bookOBJ
})
export const ClearProfile = () =>({
    type: "CLEAR_PROFILE",
})
export const removeProfileItem = (id) =>({
    type: "REMOVE_PROFILE_ITEM",
    payload: id,
})

