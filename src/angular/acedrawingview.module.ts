import { NgModule } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";

import { DIRECTIVES } from "./acedrawingview.directives";

@NgModule({
  declarations: [DIRECTIVES],
  exports: [DIRECTIVES],
})
export class AcedrawingviewComponentModule {
  constructor() {
    console.log('AcedrawingviewComponentModule');
  }
}

console.log('before registerElement');
registerElement("Acedrawingview", () => {
  console.log('registerElement Acedrawingview');
  const c = require("../acedrawingview").Acedrawingview;
  console.log('c', c);
  return c;
});
registerElement("AceDrawingView", () => {
  console.log('registerElement Acedrawingview');
  const c = require("../acedrawingview").Acedrawingview;
  console.log('c', c);
  return c;
});
// registerElement("Acedrawingview", () => {
//   return ACEDrawingView;
// });
