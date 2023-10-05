export const searchData = (data) => {
    return {
        type: 'SEARCH_DATA',
        payload: data
    }
}

export const search = () => {
    return {
        type: 'SEARCH'
    }
}

export const addToCart = (data) => {
    return {
        type: 'ADD_TO_CART',
        payload: data
    }
}

export const addToWishList = (data) => {
    return {
        type: 'ADD_TO_WISHLIST',
        payload: data
    }
}

export const removeFromCart = (productId) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: productId
    }
}

export const setCart = (data) => {
    return {
        type: 'SET_CART',
        payload: data
    }
}