import fs from "fs";
import path from "path";

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) walk(p);
    else if (p.endsWith(".tsx")) {
      let c = fs.readFileSync(p, "utf8");
      const n = c
        .replace(/\bdatetime=/g, "dateTime=")
        .replace(/\btabindex=/g, "tabIndex=")
        .replace(/\bcolspan=/g, "colSpan=")
        .replace(/\browspan=/g, "rowSpan=")
        .replace(/\bautocomplete=/g, "autoComplete=")
        .replace(/\bautocapitalize=/g, "autoCapitalize=")
        .replace(/\bframeborder=/g, "frameBorder=");
      if (n !== c) {
        fs.writeFileSync(p, n);
        console.log("fixed", p);
      }
    }
  }
}

walk("app");
