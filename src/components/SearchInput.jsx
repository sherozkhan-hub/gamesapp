import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = ({ onSearch }) => {
  const ref = useRef(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement>
          {" "}
          <BsSearch />{" "}
        </InputLeftElement>
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
