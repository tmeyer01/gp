"use client";

import { adventureData } from "@/app/adventures/adventureData";

import { useParams } from "next/navigation";

function Adventure() {
  const params = useParams();

  // const searchParams = useSearchParams();

  console.log(params);
  // console.log(searchParams);

  const id = params.id;

  // // Find the adventureData based on the id
  const currentAdventure = adventureData.find(
    (adventure) => adventure.path === id
  );

  if (!currentAdventure) {
    return <div>Error: Adventure not found</div>;
  }

  return (
    <>
      {/* <p>{currentAdventure.discription}</p> */}
      <p>{currentAdventure.discription}</p>
      <div>HELLO</div>
    </>
  );
}

export default Adventure;
