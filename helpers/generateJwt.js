import jsonwebtoken from "jsonwebtoken";

const generateJwt = (id) => {
  return jsonwebtoken.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export default generateJwt;
