import { useState } from "react";
import { Button, HStack, IconButton, Text } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

interface PaginationProps {
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationRounded = ({ totalPages, onPageChange }: PaginationProps) => {
  const [page, setPage] = useState(1);

  const handleChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setPage(newPage);
    onPageChange(newPage);
  };

  const renderPageNumbers = () => {
    let pages = [];

    // Always show 1, 2, 3 (if available)
    for (let i = 1; i <= Math.min(3, totalPages); i++) {
      pages.push(i);
    }

    if (totalPages > 4) {
      pages.push("...");
      pages.push(totalPages); // Always show last page
    }

    return pages;
  };

  return (
    <HStack spacing={2} justify="center" mt={6} mb={6}>
      <IconButton
        aria-label="Previous page"
        icon={<ChevronLeftIcon />}
        onClick={() => handleChange(page - 1)}
        isDisabled={page === 1}
      />

      {renderPageNumbers().map((pageNumber, idx) =>
        pageNumber === "..." ? (
          <Text key={idx} px={3} fontWeight="bold">
            ...
          </Text>
        ) : (
          <Button
            key={idx}
            borderRadius="md"
            bg={page === pageNumber ? "white" : "gray.700"} // White active, dark gray inactive
            color={page === pageNumber ? "black" : "white"} // Black text on white, White text on gray
            variant="solid"
            _hover={{ bg: page === pageNumber ? "gray.200" : "gray.600" }} // Lighter hover effect
            onClick={() => handleChange(Number(pageNumber))}
          >
            {pageNumber}
          </Button>
        )
      )}

      <IconButton
        aria-label="Next page"
        icon={<ChevronRightIcon />}
        onClick={() => handleChange(page + 1)}
        isDisabled={page === totalPages}
      />
    </HStack>
  );
};

export default PaginationRounded;
