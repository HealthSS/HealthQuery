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
describe("It handles bad requests", () => {
  test("It should respond with 404", done => {
    request(app)
      .get("/brokenlink")
      .then(res => {
        expect(res.statusCode).toBe(404);
        done();
      });
  });
});
describe("It should handle GET requests to coroni", () => {
  test("It should respond with 200", done => {
    request(app)
      .get("/coroni")
      .then(res => {
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBe(8);
        for (let el of res.body) {
          expect(el).toHaveProperty("confirmed");
          expect(el).toHaveProperty("active");
          expect(el).toHaveProperty("deaths");
          expect(el).toHaveProperty("recovered");
          expect(el).toHaveProperty("city");
          expect(el).toHaveProperty("id");
        }
        done();
      });
  });
});
describe("It should handle POST requests to /reportCoroni", ()=>{
  test("It should create new districts and confirmed cases", (done)=>{
    request(app)
    .post("/")
  })
});

// for (let el of res.body) {
//   expect(el).toHaveProperty("confirmed");
//   expect(el).toHaveProperty("active");
//   expect(el).toHaveProperty("deaths");
//   expect(el).toHaveProperty("recovered");
//   expect(el).toHaveProperty("city");
//   expect(el).toHaveProperty("id");
// }
