import { Observable } from 'tns-core-modules/data/observable';
import * as app from 'tns-core-modules/application';
import * as dialogs from 'tns-core-modules/ui/dialogs';
import { Acedrawingview as AcedrawingviewDefinition } from "./acedrawingview";
import { View, Style, Property, CssProperty, isIOS } from "tns-core-modules/ui/core/view";

// backgroundImage: UIImage
//
export const textProperty = new Property<AcedrawingviewBase, string>({ name: "text", defaultValue: "", affectsLayout: isIOS });
export const backgroundImageProperty = new Property<AcedrawingviewBase, UIImage>({ name: "backgroundImage", defaultValue: null, affectsLayout: isIOS });

export const customDrawToolProperty = new Property<AcedrawingviewBase, any>({name: 'customDrawTool', defaultValue: null});
export const delegateProperty = new Property<AcedrawingviewBase, any>({name: 'delegate', defaultValue: null});
export const draggableTextCloseImageProperty = new Property<AcedrawingviewBase, any>({name: 'draggableTextCloseImage', defaultValue: null});
export const draggableTextFontNameProperty = new Property<AcedrawingviewBase, any>({name: 'draggableTextFontName', defaultValue: null});
export const draggableTextRotateImageProperty = new Property<AcedrawingviewBase, any>({name: 'draggableTextRotateImage', defaultValue: null});
export const drawModeProperty = new Property<AcedrawingviewBase, any>({name: 'drawMode', defaultValue: null});
export const drawToolProperty = new Property<AcedrawingviewBase, any>({name: 'drawTool', defaultValue: null});
export const edgeSnapThresholdProperty = new Property<AcedrawingviewBase, any>({name: 'edgeSnapThreshold', defaultValue: null});
export const imageProperty = new Property<AcedrawingviewBase, any>({name: 'image', defaultValue: null});
export const lineAlphaProperty = new Property<AcedrawingviewBase, any>({name: 'lineAlpha', defaultValue: null});
export const lineColorProperty = new Property<AcedrawingviewBase, any>({name: 'lineColor', defaultValue: null});
export const lineWidthProperty = new Property<AcedrawingviewBase, any>({name: 'lineWidth', defaultValue: null});
export const undoStepsProperty = new Property<AcedrawingviewBase, any>({name: 'undoSteps', defaultValue: null});
export const prev_imageProperty = new Property<AcedrawingviewBase, any>({name: 'prev_image', defaultValue: null});

// using myOpacity instead of opacity as it will override the one defined in `tns-core-modules`
export const myOpacityProperty = new CssProperty<Style, number>({
  name: "myOpacity", cssName: "my-opacity", defaultValue: 1, valueConverter: (v) => {
    const x = parseFloat(v);
    if (x < 0 || x > 1) {
      throw new Error(`opacity accepts values in the range [0, 1]. Value: ${v}`);
    }

    return x;
  }
});
export abstract class AcedrawingviewBase extends View implements AcedrawingviewDefinition {
  public static tapEvent = "tap";
  text: string;
  message: string = 'La durp!';

  // Exposing myOpacity style property through MyButton.
  // This is all optional. If not exposed users will have to set it
  // through style: <control:MyButton style.myOpacity='0.4' />.
  get myOpacity(): number {
    return this.style.myOpacity;
  }
  set myOpacity(value: number) {
    this.style.myOpacity = value;
  }

  greet(): string {
    return 'Hello';
  }

}

// Augmenting Style definition so it includes our myOpacity property
declare module "tns-core-modules/ui/styling/style" {
  interface Style {
    myOpacity: number;
  }
}

// Defines 'text' property on MyButtonBase class.
textProperty.register(AcedrawingviewBase);
backgroundImageProperty.register(AcedrawingviewBase);
customDrawToolProperty.register(AcedrawingviewBase);
delegateProperty.register(AcedrawingviewBase);
draggableTextCloseImageProperty.register(AcedrawingviewBase);
draggableTextFontNameProperty.register(AcedrawingviewBase);
draggableTextRotateImageProperty.register(AcedrawingviewBase);
drawModeProperty.register(AcedrawingviewBase);
drawToolProperty.register(AcedrawingviewBase);
edgeSnapThresholdProperty.register(AcedrawingviewBase);
imageProperty.register(AcedrawingviewBase);
lineAlphaProperty.register(AcedrawingviewBase);
lineColorProperty.register(AcedrawingviewBase);
lineWidthProperty.register(AcedrawingviewBase);
undoStepsProperty.register(AcedrawingviewBase);
prev_imageProperty.register(AcedrawingviewBase);
// Defines 'myOpacity' property on Style class.
myOpacityProperty.register(Style);

// If set to true - nativeView will be kept in memory and reused when some other instance
// of type MyButtonBase needs nativeView. Set to true only if you are sure that you can reset the
// nativeView to its initial state. When true will improve application performance.
// Acedrawingview.prototype.recycleNativeView = false;
