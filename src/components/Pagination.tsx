export default function Pagination({
  length,
  moviesPerPage,
  onPagination,
}: {
  length: number;
  moviesPerPage: number;
  onPagination: (pageNumber: number) => void;
}) {
  const paginationNumbers = [];

  for (let i = 1; i <= Math.ceil(length / moviesPerPage); i++) {
    paginationNumbers.push(i);
  }

  console.log(paginationNumbers);

  return (
    <div className="pagination">
      {paginationNumbers.map(pageNumber => (
        <button key={pageNumber} onClick={() => onPagination(pageNumber)}>
          {pageNumber}
        </button>
      ))}
    </div>
  );
}
