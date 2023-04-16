import React from "react";
import { Input } from "antd";

// Search
const { Search } = Input;
const onSearch = (value: string) => console.log(value);

const SearchMain: React.FC = () => {
  return (
    <div className="search w-[100%] mb-6">
      <Search
        placeholder="input search text"
        onSearch={onSearch}
        style={{ width: 200, borderRadius: "12px" }}
      />
    </div>
  );
};

export default SearchMain;
