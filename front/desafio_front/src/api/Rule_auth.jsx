import API from "./Rule_API"

export const iniciarSesion = async (user)=>{
    let url = "/api/user/login";
    return await API.post(url, user)
    .then((response)=>{
        localStorage.setItem("token", response.data.token);
        return response.data;
    })
    .catch((error)=>{
        console.log(error);
        throw error.response.data.error || "Error procesando la solicitud"
    })
}

export const nweUser = async (user)=>{
    let url = "/api/user/new";
    return await API.post(url, user)
    .then((response)=>{
        localStorage.setItem("token", response.data.token);
        return response.data;
    })
    .catch((error)=>{
        console.log(error);
        throw error.response.data.error || "Error procesando la solicitud"
    })
}
export const addInmueble = async (user)=>{
    let url = "/api/inmueble/nuevo";
    return await API.post(url, user)
    // .then((response)=>{
    //     localStorage.setItem("token", response.data.token);
    //     return response.data;
    // })
    .catch((error)=>{
        console.log(error);
        throw error.response.data.error || "Error procesando la solicitud"
    })
}
