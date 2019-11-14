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
  