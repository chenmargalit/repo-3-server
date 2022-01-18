export class ApiError {
  statusCode;
  msg;

  constructor(statusCode, msg) {
    this.statusCode = statusCode;
    this.msg = msg;
  }

  static badRequest(msg) {
    return new ApiError(400, msg);
  }

  static unAuthorized(msg) {
    return new ApiError(403, msg);
  }
}
