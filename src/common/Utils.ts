export default class Utils {
  static formatDate(_date: string): string {
    const date = new Date(_date);

    return `${date.getFullYear()}년 ${date.getMonth()}월 ${date.getDate()}일`;
  }
}
