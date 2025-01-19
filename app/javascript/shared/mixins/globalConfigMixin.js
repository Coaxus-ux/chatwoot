export const useInstallationName = (str, installationName) => {
  if (str && installationName) {
    return str.replace(/Canencio Chat/g, installationName);
  }
  return str;
};

export default {
  methods: {
    useInstallationName,
  },
};
