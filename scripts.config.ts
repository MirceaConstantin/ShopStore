
import { DenonConfig } from "https://deno.land/x/denon@2.4.0/mod.ts";
import { config as env } from "https://deno.land/x/dotenv/mod.ts";


const config: DenonConfig = {
  // TODO: Config different commands for denon (development) and deno (production)
  scripts: {
    start: {
      cmd: "deno run app.ts",
      desc: "run my app.ts file",
      env: env(),
      unstable: true,
      allow: ["run", "write", "read", "plugin", "net", "env"]
    }
  },
};

export default config;
