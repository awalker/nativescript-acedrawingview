import { Directive } from "@angular/core";

@Directive({
  selector: "Acedrawingview"
})
export class AcedrawingviewDirective {
  constructor() {
    console.log('AcedrawingviewDirective');
  }
}
@Directive({
  selector: "AceDrawingView"
})
export class AceDrawingViewDirective {
  constructor() {
    console.log('AcedrawingviewDirective');
  }
}

export const DIRECTIVES = [AcedrawingviewDirective, AceDrawingViewDirective];
