import {
  Directive,
  TemplateRef,
  ViewContainerRef,
  ElementRef,
} from "@angular/core";

@Directive({
  selector: "[appAppToGreen]",
})
export class AppToGreenDirective {
  constructor(private elRef: ElementRef) {
    this.elRef.nativeElement.style.color = "green";
  }
}
