//crud
export const create = (data) => {

    return {type: "create",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }

}

export const del = (id) => {

    return {
        type: "del",
        id
    }

}
 
export const remove = () => {

    return {
        type: "remove"
    }
}

