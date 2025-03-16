import { Button, HStack, IconButton, Text } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

interface PaginationProps {
  totalCount: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const PaginationRounded = ({
  totalCount,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalCount / 20);
  if (totalPages < 1) return null; // No pagination if there are no pages

  const handleChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    onPageChange(newPage);
    window.scrollTo({ top: 0 }); // Scroll to top on page change
  };

  const renderPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages === 1) {
      return [1]; // Case: Only 1 page
    }

    if (currentPage <= 3) {
      for (let i = 1; i <= Math.min(5, totalPages); i++) pages.push(i);
      if (totalPages > 5) pages.push("...", totalPages);
    } else if (currentPage > 3 && currentPage < totalPages - 3) {
      pages.push(1, "...");
      pages.push(currentPage - 1, currentPage, currentPage + 1);
      pages.push("...", totalPages);
    } else {
      pages.push(1, "...");
      for (let i = totalPages - 5; i <= totalPages; i++) pages.push(i);
    }

    return pages;
  };

  return (
    <HStack spacing={2} justify="center" mt={6} mb={6}>
      {/* Previous Button */}
      <IconButton
        aria-label="Previous page"
        icon={<ChevronLeftIcon />}
        onClick={() => handleChange(currentPage - 1)}
        isDisabled={currentPage === 1}
      />

      {/* Page Numbers */}
      {renderPageNumbers().map((page, idx) =>
        page === "..." ? (
          <Text key={idx} px={3} fontWeight="bold">
            ...
          </Text>
        ) : (
          <Button
            key={idx}
            borderRadius="md"
            bg={currentPage === page ? "white" : "gray.700"}
            color={currentPage === page ? "black" : "white"}
            _hover={{ bg: currentPage === page ? "gray.200" : "gray.600" }}
            onClick={() => handleChange(Number(page))}
          >
            {page}
          </Button>
        )
      )}

      {/* Next Button */}
      <IconButton
        aria-label="Next page"
        icon={<ChevronRightIcon />}
        onClick={() => handleChange(currentPage + 1)}
        isDisabled={currentPage === totalPages}
      />
    </HStack>
  );
};

export default PaginationRounded;
