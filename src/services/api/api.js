import fetch from 'axios';

export const useFetch = async ({ method, url, params, timeout }) => {
  const response = await fetch({ method, url, params, timeout });

  const { data } = response;

  return { data };
};
