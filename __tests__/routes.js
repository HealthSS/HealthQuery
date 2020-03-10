const request = require("supertest");
const app = require("../server/app.js");
test("test to see if jest is working", () => {
  expect(2).toBe(2);
});
describe("Test the root path", () => {
  test("It should respond to the get method", done => {
    request(app)
      .get("/")
      .then(res => {
        expect(res.statusCode).toBe(200);
        done();
      });
  });
});
describe("Test that it handles bad requests", () => {
  test("It should respond with 404", done => {});
});
