import { useEffect, useMemo, useState } from "react";
import { Table } from "./components/Table";
import type { ActionElement, Column } from "./types/table.types";

// ---------------------------------------------------------
// This component is only a usage example of Table component
// ---------------------------------------------------------

type fromBackend = {
  name: string;
  phone: string;
  id: string;
}

const columns: Column<fromBackend>[] = [
  { title: 'Nome', key: 'name' },
  { title: 'Telefone', key: 'phone' },
]

let database: fromBackend[] = [
  {
    name: 'Nome teste 1',
    phone: '11909876543',
    id: 'id_teste_1',
  },
  {
    name: 'Nome teste 2',
    phone: '11909876545',
    id: 'id_teste_2',
  },
]

function App() {
  const [users, setUsers] = useState<fromBackend[] | undefined>()
  const actionButtons: ActionElement<fromBackend>[] = useMemo(() => {
    return [
      {
        element: (onClick) => (
          <button onClick={onClick}>Botão de excluir</button>
        ),
        action: removeItem,
      }
    ]
  }, [])

  useEffect(() => { fetchData() }, [])

  function fetchData() {
    setUsers(database)
  }

  function removeItem(userToRemove: fromBackend) {
    database = database.filter((user) => {
      return userToRemove.id !== user.id
    })
    fetchData()
  }

  return <>
    { users && (
      <Table columns={columns} rows={users} actionElements={ actionButtons }/> 
    )}
  </>
}

export default App

// ---------------------------------------------------------
// This component is only a usage example of Table component
// ---------------------------------------------------------