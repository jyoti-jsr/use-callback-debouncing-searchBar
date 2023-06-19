import React, { useState, useCallback, useEffect } from "react";
import debounce from "lodash.debounce";

export function FilterList({ names }) {
  const [query, setQuery] = useState("");

  let filteredNames = names;

  if (query !== "") {
    filteredNames = names.filter((name) => {
      return name.toLowerCase().includes(query.toLowerCase());
    });
  }

  const changeHandler = (event) => {
    setQuery(event.target.value);
    console.log(event.target.value);
  };

  const debouncedChangeHandler = useCallback(debounce(changeHandler, 3000), []);

  useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel();
    };
  }, []);

  return (
    <div>
      <input
        onChange={debouncedChangeHandler}
        type="text"
        placeholder="Type a query..."
      />
      {filteredNames.map((name) => (
        <div key={name}>{name}</div>
      ))}
      <div>{filteredNames.length === 0 && query !== "" && "No matches..."}</div>
    </div>
  );
}
