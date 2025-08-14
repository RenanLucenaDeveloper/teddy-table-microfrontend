import React from "react";
import type { DataTableProps } from "../types/table.types";
import NoResults from "./NoResults";


export function Table <T>({ columns, rows, actionElements }: DataTableProps<T>) { 
  return <>
    { rows.length ?
      <TableContent columns={columns} rows={rows} actionElements={actionElements}/>
      :
      <NoResults/> 
    }
  </>
}

function TableContent <T>({ columns, rows, actionElements }: DataTableProps<T>) {
  return (
    <ul>
      { rows.map((row) => (
        <li key={ row.id }>
          { columns.map((column) => (
            <p key={ column.title }>
              { column.title } | { String(row[column.key]) }
            </p>
          ))}

          { actionElements && (
            <div className="flex items-center justify-center">
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