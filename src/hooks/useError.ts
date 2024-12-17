import { useState, useCallback } from 'react';

export const useError = () => {
  const [error, setError] = useState<string | null>(null);

  const handleError = useCallback((err: unknown) => {
    if (err instanceof Error) {
      setError(err.message);
    } else if (typeof err === 'string') {
      setError(err);
    } else {
      setError('An unexpected error occurred');
    }
  }, []);

  return { error, handleError, clearError: () => setError(null) };
};