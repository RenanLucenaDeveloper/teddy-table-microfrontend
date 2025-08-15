import { useEffect, useMemo, useState } from "react";
import { Table } from "./components/Table";
import type { ActionElement, Column } from "./types/table.types";
import databaseMock from "./utils/mock.util";
import type { fromBackend } from "./types/from-backend.type";
import Paginator from "./components/Paginator";

// ---------------------------------------------------------
// This component is only a usage example of Table component
// ---------------------------------------------------------

const columns: Column<fromBackend>[] = [
  { title: 'Nome', key: 'name' },
  { title: 'Telefone', key: 'phone' },
]

let database: fromBackend[] = databaseMock

function App() {
  const [users, setUsers] = useState<fromBackend[] | undefined>()
  const [actualPage, setActualPage] = useState<number>(1)
  const actionButtons: ActionElement<fromBackend>[] = useMemo(() => ([
    {
      element: (onClick) => <button onClick={onClick}>Botão de excluir</button>,
      action: removeItem,
    }
  ]),[])


  function removeItem(userToRemove: fromBackend) {
    database = database.filter((user) => userToRemove.id !== user.id)
    setUsers(database)
  }

  useEffect(() => { setUsers(database) }, [])

  return <>
    { users && <>
      <Table 
        columns={columns} rows={users} 
        itemsPerPage={ 16 } actualPage={ actualPage }
        actionElements={ actionButtons }
        />

      <Paginator 
        actualPage={actualPage} setActualPage={setActualPage} 
        rowsLength={ users.length } itemsPerPage={ 16 }
        />
    </>}
  </>
}

export default App

// ---------------------------------------------------------
// This component is only a usage example of Table component
// ---------------------------------------------------------