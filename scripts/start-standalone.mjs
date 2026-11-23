import { cpSync, existsSync } from "node:fs";
import process from "node:process";
import { URL } from "node:url";

const root = new URL("../", import.meta.url);
const standalone = new URL(".next/standalone/", root);
const publicAssets = new URL("public/", root);

// Next.js traces the server but leaves browser assets outside standalone.
cpSync(new URL(".next/static/", root), new URL(".next/static/", standalone), {
  recursive: true,
});
if (existsSync(publicAssets)) {
  cpSync(publicAssets, new URL("public/", standalone), { recursive: true });
}

process.env.HOSTNAME ??= "127.0.0.1";
await import(new URL("server.js", standalone).href);
