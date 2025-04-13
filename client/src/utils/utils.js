export const detectDeviceType = () => {
  const device = /Mobile|Android|iPhone|iPad/i.test(navigator.userAgent)
    ? "Mobile"
    : "Desktop";

  return device;
};
