import React from "react";
import ActionMenu from "./ActionMenu";
import ClientInfoDisplay from "./ClientDisplay";
import SearchBar from "./SearchBar";

const ClientInfo = () => {
  return (
    <div>
      <SearchBar />
      <ActionMenu />
      <ClientInfoDisplay />
    </div>
  );
};

export default ClientInfo;
