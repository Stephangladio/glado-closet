import Cookies from "js-cookie";

export const authToken = Cookies.get("token");

export const getCookie = (key) => {
    if (!key || typeof key !== "string") {
        throw new Error("Enter a valid cookie key");
    }

    return Cookies.get(key);
};

export const setCookie = (key, value, expires = 1) => {
    Cookies.set(key, value, { expires });
};
