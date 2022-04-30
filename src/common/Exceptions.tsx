export class CustomError extends Error {
  type: boolean;
  remarks: string;
  constructor(message: string, type: boolean, remarks: string) {
    super(message);
    this.type = type;
    this.remarks = remarks;
    // Set the prototype explicitly.
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  get() {
    return { message: this.message, type: this.type, remarks: this.remarks };
  }
}
