import { ValidationError } from 'yup';

interface Erros {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Erros {
  const validationErros: Erros = {};

  // eslint-disable-next-line prettier/prettier
  err.inner.forEach((error) => {
    validationErros[error.path] = error.message;
  });

  return validationErros;
}
