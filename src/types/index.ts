export interface Author {
  id: number;
  nombre: string;
  nacionalidad: string;
}

export interface Book {
  id: number;
  titulo: string;
  autorId: number;
  disponible: boolean;
}