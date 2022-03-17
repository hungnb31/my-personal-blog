import { join } from "path";

// TODO: need to update production host
export const host =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "http://localhost:3000";

export const apiHost = `${host}/api`;

export const postFullPath = join(process.cwd(), "_posts");
