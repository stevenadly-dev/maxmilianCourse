import { ElementRef, HostListener, HostBinding } from "@angular/core";
import { Directive } from "@angular/core";

@Directive({
  selector: "[appDropdown]",
})
export class DropdownDirective {
  constructor(private el: ElementRef) {}
  @HostBinding("class.open") isActive = false;

  @HostListener("click") toggle() {
    this.isActive = !this.isActive;
  }
}
