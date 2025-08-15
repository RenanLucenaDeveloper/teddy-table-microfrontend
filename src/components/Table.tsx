import React from "react";
import type { DataTableProps } from "../types/table.types";
import NoResults from "./NoResults";


export function Table <T>(props: DataTableProps<T>) { 
  return <>
    { props.rows.length ?
      <TableContent {...props}/>
      :
      <NoResults/> 
    }
  </>
}

function TableContent <T>({ columns, rows, actionElements, itemsPerPage, actualPage = 1 }: DataTableProps<T>) {
  const range = itemsPerPage * actualPage
  const rowsInRange = rows.slice(range - itemsPerPage, range)
  
  return (
    <ul>
      { rowsInRange.map((row) => (
        <li key={ row.id }>
          { columns.map((column) => (
            <p key={ column.title }>
              { column.title } | { String(row[column.key]) }
            </p>
          ))}

          { actionElements && (
            <div className="flex items-center justify-center gap-3">
              { actionElements.map(({ element, action }, index) => (
                <React.Fragment key={ index }>
                  { element(() => action(row)) }
                </React.Fragment>
              ))}
            </div>
          )}
        </li>
      ))}
    </ul>
  )
}
