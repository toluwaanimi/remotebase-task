import { HStack, Image, Box } from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";
import logo from "../../assets/images/logo.png"
import SearchInput from "../SearchBar/SearchBar.tsx";
import ColorModeSwitch from "../ColorModeSwitch/ColorModeSwitch.tsx";

// Define the type of props received by the Navbar component
interface NavbarProps {
    onSearch: (searchTerm: string) => void; // Function to handle search
}

// Define the Navbar component
const Navbar = ({ onSearch }: NavbarProps) => {
    // Define a function to handle the search input
    const handleSearch = (searchTerm: string) => {
        onSearch(searchTerm); // Call the onSearch function passed as prop
    };

    return (
        <HStack
            padding={{ base: "10px", md: "20px" }} // Set padding based on screen size
            spacing={3} // Set spacing between child elements
            align="center" // Align child elements vertically
            borderBottom="1px solid" // Set border bottom with solid line
            borderColor="gray.200" // Set border color
        >
            <Image src={logo} boxSize="60px" alt="Logo" />
            <Box flex="1">
                <SearchInput onSearch={handleSearch} />
            </Box>
            <Box>
                <ColorModeSwitch />
            </Box>
            <Box display={{ base: "none", md: "block" }}>
                <FiChevronDown size={24} />
            </Box>
        </HStack>
    );
};

export default Navbar; // Export the Navbar component
