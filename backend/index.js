require("dotenv").config();

const app = require("./src/db/app");
const http = require("http");
const connectDB =
require("./src/config/db");

// const logger = require("./src/logs/logger.js");
connectDB();
server = http.createServer(app);
const PORT =process.env.PORT || 5001;
server.on("clientError", (err, socket) => {
    console.error("Client error:", err.message);

    if (!socket.destroyed) {
        socket.destroy();
    }
});
server.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
// app.listen(PORT, () => {
//     // logger.info(
//     //     `Server running on ${PORT}`
//     // );
//     console.log(
//         `Server running on ${PORT}`
//     );
// });
