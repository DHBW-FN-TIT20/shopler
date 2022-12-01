/**
 * gets categories from database
 * 
 * @param {string} token : user token for authentication
 * @returns : json array categories names with id 
 */
export default async function getCategories(token) {
  return await fetch(process.env.REACT_APP_API_ENDPOINT + "api/categories", {
    method: "GET",
    headers: {
      ContentType: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then(async (response) => {
      if (!response.ok) {
        return null;
      }
      const data = await response.json();
      return data.categories;
    })
    .catch((error) => {
      return null;
    });
}
