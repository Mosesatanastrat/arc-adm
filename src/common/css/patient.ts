export const patientBox = (bgColor?: string) => {
  return {
    textAlign: "center",
    p: 0.5,
    borderTop: "1px solid",
    borderLeft: "1px solid",
    borderColor: "divider",
    ...(bgColor && { backgroundColor: bgColor }),
  };
};
