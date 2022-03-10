const generateId = () => {
  const random = Math.random().toString(36).substring(2);
  const dateNow = Date.now().toString(36);
  return random + dateNow;
};

export default generateId;
