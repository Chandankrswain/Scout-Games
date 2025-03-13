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

    // Always show first 3 pages
    for (let i = 1; i <= 3 && i <= totalPages; i++) {
      pages.push(i);
    }

    if (totalPages > 4) {
      pages.push("...");
      pages.push(totalPages); // Show last page
    }

    return pages;
  };

  return (
    <HStack spacing={2} justify="center" mt={6}>
      <IconButton
        aria-label="Previous page"
        icon={<ChevronLeftIcon />}
        onClick={() => handleChange(page - 1)}
        isDisabled={page === 1}
      >
        Previous Page
      </IconButton>

      {renderPageNumbers().map((pageNumber, idx) =>
        pageNumber === "..." ? (
          <Text key={idx} px={3} fontWeight="bold">
            ...
          </Text>
        ) : (
          <Button
            key={idx}
            borderRadius="full"
            colorScheme={page === pageNumber ? "purple" : "gray"}
            variant={page === pageNumber ? "solid" : "outline"}
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
