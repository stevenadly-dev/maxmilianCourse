import {
  Component,
  OnInit,
  ViewChild,
  AfterContentInit,
  AfterViewInit,
  ElementRef,
} from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent implements OnInit, AfterViewInit {
  @ViewChild("myh1") myh1: ElementRef;
  isFalse: boolean = false;
  letter: string = "d";
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.myh1.nativeElement.style.color = "red";
  }
}
