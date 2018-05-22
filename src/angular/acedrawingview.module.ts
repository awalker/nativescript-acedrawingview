import { NgModule } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";

import { DIRECTIVES } from "./acedrawingview.directives";

@NgModule({
  declarations: [DIRECTIVES],
  exports: [DIRECTIVES],
})
export class AcedrawingviewComponentModule { }

registerElement("AceDrawingView", () => require("../").Acedrawingview);
