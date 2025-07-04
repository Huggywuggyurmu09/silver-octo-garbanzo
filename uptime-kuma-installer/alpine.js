// u can run this using harbor on pterodactyl or any alpine distro
// MAKE sure to run `apk add --no-cache git nodejs npm python3 make g++ bash` first.
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const kumaRepo = "https://github.com/louislam/uptime-kuma.git";
const kumaDir = path.join(__dirname, "uptime-kuma");
const PORT = 5748;
process.env.PORT = PORT.toString();

console.log("[💾 1/6] Installing packages...");
execSync(`apk update`, { stdio: "inherit" });

if (!fs.existsSync(kumaDir)) {
    console.log("[📩 2/6] Cloning Uptime Kuma...");
    execSync(`git clone ${kumaRepo}`, { stdio: "inherit" });
}
process.chdir(kumaDir);
console.log("[🔃 3/6] Resetting git repo...");
execSync("git reset --hard && git clean -fd", { stdio: "inherit" });

if (!fs.existsSync("node_modules")) {
    console.log("[⌛ 4/6] Installing dependencies...");
    execSync("npm install", { stdio: "inherit" });
}

console.log("[🏃‍♀️ 5/6] Running setup...");
execSync("npm run setup", { stdio: "inherit" });

console.log(`[✅ 6/6] Starting Uptime Kuma on port ${PORT}...`);
require(path.join(__dirname, "uptime-kuma", "server", "server.js"));
