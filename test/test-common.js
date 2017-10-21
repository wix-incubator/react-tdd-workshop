export const testBaseUrl = `http://localhost:3100`;

export const eventually = action => {
  return require('trier-promise')({
    action,
    timeout: 10000,
    interval: 200
  });
};
