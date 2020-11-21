import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  HostListener,
  HostBinding,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appAppHighlight]",
})
export class AppHighlightDirective implements OnInit {
  @Input("hoverColor") cval;
  @HostBinding("style.color") txtcolor;

  constructor(private el: ElementRef, private render: Renderer2) {
    // console.log("appAppHighlight", this.appAppHighlight);
  }

  ngOnInit() {}
  @HostListener("mouseenter") mouseenter(e: Event) {
    // this.el.nativeElement.style.background = this.cval;
    this.render.setStyle(this.el.nativeElement, "background", this.cval);
    this.txtcolor = "white";
  }
  @HostListener("mouseleave") mouseleave(e: Event) {
    // this.el.nativeElement.style.background = "transparent";
    this.render.setStyle(this.el.nativeElement, "background", "transparent");
    this.txtcolor = "black";

    // this.
  }
}
