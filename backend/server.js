const db = require("./db")
const express = require("express");
const cors = require("cors");
const app = express();

 app.use(cors());

// const { testRouter } = require("./routers/routes/testRouter");
// const { userRouter } = require("./routers/routes/userRouter");



 app.use(express.json());
//  app.use("/users", userRouter);
//  app.use("/test", testRouter);

const PORT = process.env.PORT || 5003;

app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});
