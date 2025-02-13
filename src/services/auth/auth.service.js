"use server";

export const loginService = async (userInfo) => {
    const res = await fetch(`${process.env.API_URL}auth/login`, {
        method: 'POST',
        headers: {
            'accept': '*/*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo)
    });
    const data = await res.json();
    console.log("login: ", data);
    return data;
}

export const registerService = async (userInfo) => {
    const res1 = await fetch(`${process.env.API_URL}auth/register`, {
        method: 'POST',
        headers: {
            'accept': '*/*',
            'Content-Type': 'application/json'

        },
        body: JSON.stringify(userInfo)
    });
    const data = await res1.json();
    console.log("register: ", data);
    return data;

}

