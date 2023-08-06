export class ApiResponse<T> {
  data: T;
  error: any = null;

  constructor(data: any, error?: any) {
    this.data = data;
    if (error) {
      this.error = error;
    }
  }
}
