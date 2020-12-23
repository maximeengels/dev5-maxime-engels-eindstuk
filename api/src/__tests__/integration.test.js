const supertest = require("supertest");
const app = require("./../server.js");

const request = supertest(app);

describe("GET /test endpoint", () => {
  test("check if server responds with 204", async (done) => {
    try {
      const response = await request.get("/test");
      expect(response.status).toBe(204);
      expect(response.body).toStrictEqual({});
      done();
    } catch (e) {
      if (e) console.log(e);
      done(e);
      done();
    }
  });
});

describe('POST /test endpoint', () => {
    test('check if server responds with 404', async (done) => {
        try {
            const response = await request.post('/test')
            expect(response.status).toBe(404)
            expect(response.body).toStrictEqual({})
            done()
        } catch (e) {
            if(e) console.log(e); done(e)
            done()
        }
    })
})