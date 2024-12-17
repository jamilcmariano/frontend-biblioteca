import { Author } from '../types/author';

export const getAuthorById = (authors: Author[], authorId: number): Author => {
  return (
    authors.find((author) => author.id === authorId) || {
      id: authorId,
      nombre: 'Autor Desconocido',
      nacionalidad: 'Desconocida',
    }
  );
};