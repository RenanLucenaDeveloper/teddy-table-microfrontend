import { generateButtonsArray } from "../utils/generate-buttons-array.util";

type PaginatorProps = {
  setActualPage: React.Dispatch<React.SetStateAction<number>>;
  actualPage: number;
  rowsLength: number;
  itemsPerPage: number;
}

const Paginator = ({ rowsLength, itemsPerPage, actualPage, setActualPage } : PaginatorProps) => {
  const buttonsArray = generateButtonsArray(rowsLength / itemsPerPage)

  if(rowsLength > itemsPerPage) return (
    <div className="flex items-center justify-center gap-2">
      { buttonsArray.map((page) => (
        <button 
          className={`
            ${actualPage === page ? 'active' : ''}  
          `}
          key={page} 
          onClick={() => setActualPage(page)}
          >
          { page }
        </button>
      ))}
    </div>
  )

  return <></>
}

export default Paginator
