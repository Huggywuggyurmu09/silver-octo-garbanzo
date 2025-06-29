const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const kumaRepo = "https://github.com/louislam/uptime-kuma.git";
const kumaDir = path.join(__dirname, "uptime-kuma");
const PORT = 5748; // IMPORTANT: replace with the port u would like to host uptime kuma on
process.env.PORT = PORT.toString();

if (!fs.existsSync(kumaDir)) {
    console.log("[📩 1/5] Cloning Uptime Kuma...");
    execSync(`git clone ${kumaRepo}`, { stdio: "inherit" });
}
process.chdir(kumaDir);
console.log("[🔃 2/5] Resetting git repo...");
execSync("git reset --hard && git clean -fd", { stdio: "inherit" });
if (!fs.existsSync("node_modules")) {
    console.log("[⌛ 3/5] Installing dependencies...");
    execSync("npm install", { stdio: "inherit" });
}
console.log("[🏃‍♀️ 4/5] Running setup...");
execSync("npm run setup", { stdio: "inherit" });
console.log(`[✅ 5/5] Starting Uptime Kuma on port ${PORT}...`);
require(path.join(__dirname, "uptime-kuma", "server", "server.js"));
