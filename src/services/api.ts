import { Author, Book } from "../types";

const API_BASE_URL = 'https://api-biblioteca-five.vercel.app'; // Replace with actual API URL

export const getAuthors = async () => {
  const response = await fetch(`${API_BASE_URL}/autores`);
  if (!response.ok) throw new Error('Failed to fetch authors');
  return response.json() as Promise<Author[]>;
};

export const getAllBooks = async () => {
  const response = await fetch(`${API_BASE_URL}/libros`);
  if (!response.ok) throw new Error('Failed to fetch books');
  return response.json() as Promise<Book[]>;
};

export const getAvailableBooks = async () => {
  const response = await fetch(`${API_BASE_URL}/libros/disponibles`);
  if (!response.ok) throw new Error('Failed to fetch available books');
  return response.json() as Promise<Book[]>;
};

export const getUnavailableBooks = async () => {
  const response = await fetch(`${API_BASE_URL}/libros/nodisponibles`);
  if (!response.ok) throw new Error('Failed to fetch unavailable books');
  return response.json() as Promise<Book[]>;
};