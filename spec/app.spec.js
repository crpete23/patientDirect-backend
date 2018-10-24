var AuthFactory,
  httpBackend;

beforeEach(inject(function($httpBackend, $rootScope, $controller, _AuthFactory_) {
  httpBackend = $httpBackend;
  AuthFactory = _AuthFactory_;

}));

describe("Auth", () => {
  it("logs in correctly", () => {
    const url = "http://localhost:3200";
    const dataObj = JSON.stringify({"email": "crpete23@gmail.com", "password": "password"})

    httpBackend.expect('POST', url + '/api/users', dataObj).respond({})

    AuthFactory.signIn(dataObj).success(function(response) {
      console.log(response);
      // outputs Object {}
      // when in reality it should
      // output the response to POST
      // eg: { "login": { "user": "Test_User", "time": 54935934593 }, "outputHead": { "token": asjfjj234kfAd } }
    });

    httpBackend.flush();

    expect(true).toBe(true);
  })
})
