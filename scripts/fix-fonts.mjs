import fs from "fs";

let css = fs.readFileSync("app/globals.css", "utf8");
css = css.replaceAll(
  '--font-display: "Oswald", sans-serif;',
  '--font-display: var(--font-oswald), "Oswald", sans-serif;'
);
css = css.replaceAll(
  '--font-body: "Roboto", sans-serif;',
  '--font-body: var(--font-roboto), "Roboto", sans-serif;'
);
fs.writeFileSync("app/globals.css", css);
console.log(
  [...css.matchAll(/--font-(display|body):[^;]+;/g)]
    .slice(0, 4)
    .map((x) => x[0])
    .join("\n")
);
