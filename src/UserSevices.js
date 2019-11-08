export async function FetchUsers(){
  let result = await fetch("https://jsonplaceholder.typicode.com/users");

  //extra data
  if(result.ok)
  {
    const data = await result.json();
    return data;
  }
  throw new Error("Could not fetch data!");
}
  