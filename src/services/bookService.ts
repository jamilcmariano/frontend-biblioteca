import { Book } from '../types';
import { API_CONFIG } from '../config/constants';
import { handleResponse } from '../utils/apiUtils';

export const getAllBooks = async (): Promise<Book[]> => {
  try {
    const response = await fetch(`${API_CONFIG.BASE_URL}/libros`, {
      headers: API_CONFIG.HEADERS,
      mode: 'cors',
    });
    return handleResponse<Book[]>(response);
  } catch (error) {
    throw new Error('Failed to fetch books. Please try again later.');
  }
};

export const getAvailableBooks = async (): Promise<Book[]> => {
  try {
    const response = await fetch(`${API_CONFIG.BASE_URL}/libros/disponibles`, {
      headers: API_CONFIG.HEADERS,
      mode: 'cors',
    });
    return handleResponse<Book[]>(response);
  } catch (error) {
    throw new Error('Failed to fetch available books. Please try again later.');
  }
};

export const getUnavailableBooks = async (): Promise<Book[]> => {
  try {
    const response = await fetch(`${API_CONFIG.BASE_URL}/libros/nodisponibles`, {
      headers: API_CONFIG.HEADERS,
      mode: 'cors',
    });
    return handleResponse<Book[]>(response);
  } catch (error) {
    throw new Error('Failed to fetch unavailable books. Please try again later.');
  }
};