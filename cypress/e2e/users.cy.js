describe("get all users api", () => {
  it("should return all users", () => {
    cy.request("GET", "http://localhost:3000/get-users").then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.success).to.eq(true);
    });
  });
});

describe("add user api", () => {
  it("should add user", () => {
    cy.request({
      method:'POST',
      url:'http://localhost:3000/add-user',
      body:{name:'youssef',email:`youssefb${Date.now()}@gmail.com`,password:'1234567'}
    }).then((res)=>{
      expect(res.status).to.eq(200);
      expect(res.body.success).to.eq(true);
    });
  });
});

describe("get user by id api", () => {
  it("should return user", () => {
    cy.request(
      "GET",
      "http://localhost:3000/get-user-by-id/69c3aaa57c71e84bdc774c57",
    ).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.success).to.eq(true);
    });
  });
});

describe("delete user by id api", () => {
  it("should delete user", () => {
    cy.request(
      "DELETE",
      "http://localhost:3000/delete-user-by-id/69c3aaa57c71e84bdc774c57",
    ).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.success).to.eq(true);
    });
  });
});

describe("edit user api", () => {
  it("should edit user data", () => {
    cy.request({
      method: "PATCH",
      url: "http://localhost:3000/update-user-by-id/69c8f2c9131a038debfca1ee",
      body: {
        name: "test youssef",
        email: `yousseftest${Date.now()}@gmail.com`,
        password: "1234567test",
      },
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.success).to.eq(true);
    });
  });
});