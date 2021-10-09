export const loginAxios = async (data)=>{
    const {email, password} = data;
    let token = ''
    if(email === 'hola' && password ==='hola'){
        token = `${email}123${password}`;
        window.localStorage.setItem("token", token);
    }else{
        token = ''
    }

    return token
}