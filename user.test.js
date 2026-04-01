import request from "supertest";
import app, { server } from "./index.js";
import mongoose from "mongoose";

describe("get all users api", () => {
  // it("should return all users", async () => {
  //   const res = await request(app).get("/get-users");
  //   expect(res.status).toBe(200);
  //   expect(res.body.success).toBe(true);
  // });
  it("should return empty array", async () => {
    const res = await request(app).get("/get-users");
    expect(res.status).toBe(400);
    expect(res.body.success).toBe(false);
  });
});

//jbdjsbjfdfdfgfg

describe("add user api", () => {
  it("should add user", async () => {
    const res = await request(app).post("/add-user").send({
      name: "youssef",
      email: "youssef@gmail.com",
      password: "123456",
    });
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
  });
  // it("should return exists email", async () => {
  //   const res = await request(app).post("/add-user").send({
  //     name: "youssef",
  //     email: "youssef@gmail.com",
  //     password: "123456",
  //   });
  //   expect(res.status).toBe(400);
  //   expect(res.body.success).toBe(false);
  // });
});

describe("get user by id", () => {
  // it("should return user id", async () => {
  //   const res = await request(app).get(
  //     "/get-user-by-id/69c8f2c9131a038debfca1ee",
  //   );
  //   expect(res.status).toBe(200);
  //   expect(res.body.success).toBe(true);
  // });
  it("should return user id not found", async () => {
    const res = await request(app).get(
      "/get-user-by-id/69c3a9045fdc138a8b80873b",
    );
    expect(res.status).toBe(400);
    expect(res.body.success).toBe(false);
  });
});

describe("edit user data api", () => {
  // it("should edit user data", async () => {
  //   const res = await request(app)
  //     .patch("/update-user-by-id/69c8f2c9131a038debfca1ee")
  //     .send({ name: "benyamine" });
  //   expect(res.status).toBe(200);
  //   expect(res.body.success).toBe(true);
  // });
  it("should return user id not found", async () => {
    const res = await request(app)
      .patch("/update-user-by-id/69c3a9045fdc138a8b80873b")
      .send({ name: "benyamine" });
    expect(res.status).toBe(400);
    expect(res.body.success).toBe(false);
  });
});

describe("delete user api", () => {
  // it("should delete user", async () => {
  //   const res = await request(app).delete(
  //     "/delete-user-by-id/69c3a9045fdc138a8b80873a",
  //   );
  //   expect(res.status).toBe(200);
  //   expect(res.body.success).toBe(true);
  // });
    it("should return user id not found", async () => {
      const res = await request(app).delete(
        "/delete-user-by-id/69c3a9045fdc138a8b80873a",
      );
      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
    });
});

afterAll(async () => {
  await mongoose.connection.close();
  server.close();
});
