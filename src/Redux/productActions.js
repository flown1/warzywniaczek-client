export const addProduct = (name) => {
    return {
      type: "ADD_PRODUCT",
      payload: name
    }
}