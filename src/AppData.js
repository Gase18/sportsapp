export async function FetchData(){
  let result = await fetch("/LecStandings/resources/matches");

  //extra data
  if(result.ok)
  {
    const data = await result.json();
    return data;
  }
  throw new Error("Could not fetch data!");
}
  

export async function PostData(data){
  fetch("/LecStandings/resources/match", {
    method: "POST",
    headers: {
      'Authorization': BasicAuth,
  "Content-Type":"application/json"
  },
  body: JSON.stringify(data)
  })
}

let BasicAuth="";

export async function FetchProtectedData(authString,url,method){
  const res = await fetch(url, {
      method: method,
      headers: {
          'Authorization': authString
      }
  });

  if(res.status === 401){
      throw "Fel användarnamn/lösenord!"
  }
  BasicAuth = authString;
  const data = await res.json();
  return data;
}

export async function EditData(data){
  fetch("/LecStandings/resources/match", {
    method: "PUT",
    headers: {
      'Authorization': BasicAuth,
  "Content-Type":"application/json"
  },
  body: JSON.stringify(data)
  })
}

export async function DeleteData(id){
  fetch("/LecStandings/resources/match?id="+id, {
    method: "DELETE",
    headers: {
      'Authorization': BasicAuth,
  "Content-Type":"application/json"
  }
  })
}

