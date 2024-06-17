export default function Pagination({
  length,
  currentPage,
  moviesPerPage,
  onPagination,
}: {
  length: number;
  currentPage: number;
  moviesPerPage: number;
  onPagination: (pageNumber: number) => void;
}) {
  const paginationNumbers = [];

  for (let i = 1; i <= Math.ceil(length / moviesPerPage); i++) {
    paginationNumbers.push(i);
  }

  return (
    <div className="pagination">
      {paginationNumbers.map(pageNumber => (
        <button
          key={pageNumber}
          onClick={() => onPagination(pageNumber)}
          className={currentPage === pageNumber ? ' active' : ''}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
}
