

describe("get all posts api", () => {
  it("should return all posts", () => {
    cy.request("GET", "http://localhost:3000/get-posts").then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.success).to.eq(true);
    });
  });
});

describe("add post api", () => {
  it("should add post", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3000/add-post",
      body: {
        title: "test post add",
        content: "test",
        userId: "69c8f2c9131a038debfca1ee",
      },
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.success).to.eq(true);
    });
  });
});

describe("get post by id api", () => {
  it("should return post", () => {
    cy.request(
      "GET",
      "http://localhost:3000/get-post-by-id/69c8f5cd2063cd80a9dac66a",
    ).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.success).to.eq(true);
    });
  });
});

describe("delete post by id api", () => {
  it("should delete post", () => {
    cy.request(
      "DELETE",
      "http://localhost:3000/delete-post-by-id/69c8f5cd2063cd80a9dac66a",
    ).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.success).to.eq(true);
    });
  });
});

describe("edit post api", () => {
  it("should edit post data", () => {
    cy.request({
      method: "PATCH",
      url: "http://localhost:3000/update-post-by-id/69c8f5e32063cd80a9dac671",
      body: {
        title: "test post edit",
        content: "test edit",
        userId: "69c8f2c9131a038debfca1ee",
      },
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.success).to.eq(true);
    });
  });
});