const { spawn } = require("child_process");
var readlineSync = require("readline-sync");

require("dotenv").config();
// console.log(process.env);

// const ls = spawn("ls", ["-lh", "/usr"]);

var command = readlineSync.question("Enter Command: ");
var flag = readlineSync.question("Enter flag: ");
// var option = readlineSync.question("Enter option: ");
var file = readlineSync.question("Enter file: ");
var child;
if (flag !== "") {
    child = spawn(command, [flag,file]);
  } else {
      child = spawn(command);
    }


   
      // child = spawn("ls", ['-a'],{cwd:'..'});
    child.stdout.on("data", (data) => {
  // if (command !== "exit") {
    console.log(`stdout: ${data}`);
  // } else return;
});

child.stderr.on("data", (data) => {
  console.error(`stderr: ${data}`);
});
child.on("error", (err) => {
  console.log(`error:${err.message}`);
});
child.on("exit", (code, signal) => {
  if (code) console.log(`child process exited with code ${code}`);
  if (signal) console.log(`process killed with signa:${signal}`);
  console.log("Done");
});
