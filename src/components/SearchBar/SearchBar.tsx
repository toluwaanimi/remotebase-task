import { Input, InputGroup, InputLeftElement, Button } from "@chakra-ui/react";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
    onSearch: (searchTerm: string) => void; // Function to handle search
}

const SearchInput: React.FC<Props> = ({ onSearch }: Props) => {
    const [searchTerm, setSearchTerm] = useState<string>(""); // State to store the search term

    const handleSearch = (event: FormEvent) => {
        event.preventDefault(); // Prevent form submission
        onSearch(searchTerm); // Call the onSearch function passed as prop with the search term
    };

    return (
        <form onSubmit={handleSearch}>
            <InputGroup>
                <InputLeftElement children={<BsSearch />} />
                <Input
                    value={searchTerm} // Set the value of the input field to the search term
                    borderRadius={20} // Set border radius of the input
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)} // Update the search term state when the input value changes
                    placeholder="Search tracks..." // Placeholder text for the input field
                    variant="filled" // Use filled variant for the input field
                />
                <Button
                    type="submit" // Set the button type to submit
                    ms="2" // Set margin-start to create space between the input and button
                    borderRadius={10} // Set border radius of the button
                    colorScheme="teal" // Set color scheme of the button
                >
                    Search
                </Button>
            </InputGroup>
        </form>
    );
};

export default SearchInput; // Export the SearchInput component
