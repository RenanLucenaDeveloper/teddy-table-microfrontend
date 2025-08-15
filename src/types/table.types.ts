export type Column<T> = {
  key: keyof T;
  title: string;
}

export type Row<T> = T & {
  id: string | number;
  render?: (value: T[keyof T]) => React.ReactNode;
}

export type DataTableProps<T> = {
  columns: Column<T>[];
  rows: Row<T>[];
  itemsPerPage: number;
  actualPage?: number;
  actionElements?: ActionElement<T>[]
}

export type ActionElement<T> = {
  element: (onClick: (event: React.MouseEvent<unknown>) => void) => React.ReactNode;
  action: (row: T) => unknown
}
