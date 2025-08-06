import { mutation, query } from "./_generated/server";

export const getmany = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (identity == null) {
      throw new Error("unauthorized");
    }
    const users = await ctx.db.query("users").collect();
    return users;
  },
});

export const addUser = mutation({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (identity == null) {
      throw new Error("unauthorized");
    }
    const userId = await ctx.db.insert("users", {
      name: "Abhishek gusain",
    });
  },
});

export const removeUsers = mutation({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (identity == null) {
      throw new Error("unauthorized");
    }
    const allUsers = await ctx.db.query("users").collect();
    allUsers.map(async (user) => {
      await ctx.db.delete(user._id);
    });
  },
});
