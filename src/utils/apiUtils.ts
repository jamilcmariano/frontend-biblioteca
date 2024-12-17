export async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    throw new Error(
      errorData?.message || `HTTP error! status: ${response.status}`
    );
  }
  return response.json();
}