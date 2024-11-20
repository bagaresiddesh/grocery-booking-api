import { Response } from 'express';

/**
 * Handles errors consistently across the application.
 *
 * @param error - The error object or message
 * @param res - Express Response object (optional)
 * @param message - Custom error message (optional, defaults to "An error occurred")
 * @returns The error message string
 */
export const handleError = (
  error: unknown,
  res?: Response,
  message: string = 'An error occurred'
): string => {
  let errorMessage = 'Unknown error';

  if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  }

  console.error('Error:', error); // Log the error for debugging

  if (res) {
    res.status(500).json({
      success: false,
      message,
      error: errorMessage,
    });
  }

  return errorMessage;
};
