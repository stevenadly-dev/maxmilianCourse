import { Pipe, PipeTransform } from "@angular/core";
@Pipe({ name: "shorten" })
export class shorten implements PipeTransform {
  transform(value: string, nickname: string, size: number) {
    return value.substring(0, size) + "..." + nickname;
  }
}
