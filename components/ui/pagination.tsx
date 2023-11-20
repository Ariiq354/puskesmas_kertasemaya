import { Button } from "@/components/ui/button";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

interface Props {
  handlePreviousPage: () => void;
  handleNextPage: () => void;
  handleCurrentPage: (page: number) => void;
  pageRange: (string | number)[];
  currentPage: number;
  className: string;
}

export default function Pagination({
  handleCurrentPage,
  handleNextPage,
  handlePreviousPage,
  pageRange,
  currentPage,
  className,
}: Props) {
  return (
    <>
      <Button
        variant={"ghost"}
        className={className}
        onClick={() => {
          handlePreviousPage();
        }}
        disabled={currentPage === 1}
      >
        <BsChevronLeft />
      </Button>

      {pageRange.map((item, id) =>
        typeof item == "number" ? (
          <Button
            variant={"ghost"}
            className={className}
            key={id}
            disabled={currentPage === item}
            onClick={() => {
              handleCurrentPage(item as number);
            }}
          >
            {item}
          </Button>
        ) : (
          <div className={className} key={id}>
            {item}
          </div>
        )
      )}
      <Button
        variant={"ghost"}
        className={className}
        onClick={() => {
          handleNextPage();
        }}
        disabled={currentPage === pageRange[pageRange.length - 1]}
      >
        <BsChevronRight />
      </Button>
    </>
  );
}
