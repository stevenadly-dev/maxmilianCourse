import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name: "newPipe",
})
export class newPipe implements PipeTransform {
  transform(value: any) {
    return value + "  new";
  }
}
