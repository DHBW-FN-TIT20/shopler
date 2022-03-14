import * as React from "react";

export default async function getCategories(token) {
    return await fetch(process.env.REACT_APP_API_ENDPOINT + "api/categories", {
        method: "GET",
        headers: {
            "Contenttype": "application/json",
            Authorization: `Bearer ${token}`
        }
    }).then(async response => {
        if (!response.ok) {
            console.log(response);
            return null;
        }
        const data = await response.json();
        return data.categories;
    }).catch(error => {
        console.log(error);
        return null;
    });
}
