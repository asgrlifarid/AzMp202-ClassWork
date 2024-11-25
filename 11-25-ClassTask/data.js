export const BASE_URL="http://localhost:3000"
// export let endpoint;
export async function getAllData(endpoint){
    const res=await axios(`${BASE_URL}/${endpoint}`);
    return res.data
}
export async function getDataById(endpoint,id){
    const res=await axios(`${BASE_URL}/${endpoint}/${id}`);
    return res.data
}