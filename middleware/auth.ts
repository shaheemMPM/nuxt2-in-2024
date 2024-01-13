import type { Context } from "@nuxt/types";

export default function (ctx: Context) {
  console.log("first passed by auth middleware");
  ctx.redirect("/");
}
