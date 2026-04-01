import request from "supertest";
import app, { server } from "./index.js";
import mongoose from "mongoose";

describe("get all posts api", () => {
  it("should return all posts", async () => {
    const res = await request(app).get("/get-posts");
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
  });
  // it("should return empty array", async () => {
  //   const res = await request(app).get("/get-posts");
  //   expect(res.status).toBe(400);
  //   expect(res.body.success).toBe(false);
  // });
});

describe("get post by id api", () => {
  it("should return post id", async () => {
    const res = await request(app).get(
      "/get-post-by-id/69c8f5e32063cd80a9dac671",
    );
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
  });
  // it("should return post not found", async () => {
  //   const res = await request(app).get(
  //     "/get-post-by-id/69c3c73673cdd324ba096e02",
  //   );
  //   expect(res.status).toBe(400);
  //   expect(res.body.success).toBe(false);
  // });
});

describe("delete post api", () => {
  // it("should delete post", async () => {
  //   const res = await request(app).delete(
  //     "/delete-post-by-id/69c8f5e32063cd80a9dac671",
  //   );
  //   expect(res.status).toBe(200);
  //   expect(res.body.success).toBe(true);
  // });
  it("should return user id not found", async () => {
    const res = await request(app).delete(
      "/delete-post-by-id/69c3a9045fdc138a8b80873a",
    );
    expect(res.status).toBe(400);
    expect(res.body.success).toBe(false);
  });
});

// describe("edit post data api", () => {
//   it("should edit post data", async () => {
//     const res = await request(app)
//       .patch("/update-post-by-id/69c8f5e32063cd80a9dac671")
//       .send({ title: "benyamine", userId: "69c3aaa57c71e84bdc774c57" });
//     expect(res.status).toBe(200);
//     expect(res.body.success).toBe(true);
//   });
//   it("should return user id not found", async () => {
//     const res = await request(app)
//       .patch("/update-user-by-id/69c3c7fb2ffc27767772db5e")
//       .send({ title: "benyamine", userId: "69c3aaa57c71e84bdc774c55" });
//     expect(res.status).toBe(400);
//     expect(res.body.success).toBe(false);
//   });
// });
afterAll(async () => {
  await mongoose.connection.close();
  server.close();
});