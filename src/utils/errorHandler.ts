// src/utils/errorUtils.ts

export const handleError = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;  // Returns the error message from the instance of Error
  } else {
    return 'Unknown error occurred';  // Default message for unknown errors
  }
};
