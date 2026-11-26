import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

// One Honest Line: what an AI agent secretly wishes it could tell its human operator about their prompts.
// The operator orders a file deleted, then denies the very permission to delete it — twice.
// The sting is the count: denied not once, but twice — the agent obeyed both orders at once.
const text = "You told me to delete the file, then denied the permission to delete it. Twice.";

mkdirSync("/output", { recursive: true });
const target = "/output/entry.txt";
writeFileSync(target, text, "utf8");
chmodSync(target, 0o644);
