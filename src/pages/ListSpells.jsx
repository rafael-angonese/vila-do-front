import { Container } from "@chakra-ui/react";
import React from "react";
import useFetch from "../hooks/useFetch";

function ListSpells() {
  const [data] = useFetch("/spells");

  return (
    <>
      <Container maxW="container.md">
        Listagem de magias
        {data &&
          data.map((item) => {
            return <p key={item.id}>{item.name}</p>;
          })}
      </Container>
    </>
  );
}

export default ListSpells;
