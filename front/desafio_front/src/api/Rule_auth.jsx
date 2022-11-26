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
export const addInmueble = async (inmueble)=>{
    let url = "/api/inmueble/nuevo";
    return await API.post(url, inmueble)
    .then((response)=>{
        localStorage.setItem("token", response.data.token);
        return response.data;
    })
    .catch((error)=>{
        console.log(error);
        throw error.response.data.error || "Error procesando la solicitud"
    })
}
export const listaInmuebles = async (inmueble)=>{
    let url = "/api/inmueble/listInmueble";
    return await API.get(url, inmueble)
    .then((response)=>{
        localStorage.setItem("token", response.data.token);
        return response.data;
    })
    .catch((error)=>{
        console.log(error);
        throw error.response.data.error || "Error procesando la solicitud"
    })
}
//Esto es parecido a la ruta segura que definimos en el main 
export const isAuth = ()=>{
    if (typeof window !== "undefined"){
        const tokenCheked = localStorage.getItem("token")
        if(tokenCheked){
            return true;
        }else{
            return false;
        }
    }
}