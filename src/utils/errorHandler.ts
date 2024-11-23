import { Response } from 'express';

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

  console.error('Error:', error);

  if (res) {
    res.status(500).json({
      success: false,
      message,
      error: errorMessage,
    });
  }

  return errorMessage;
};
