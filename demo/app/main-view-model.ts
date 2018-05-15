import { Observable } from 'tns-core-modules/data/observable';
import { Acedrawingview } from 'nativescript-acedrawingview';

export class HelloWorldModel extends Observable {
  public message: string;
  private acedrawingview: Acedrawingview;

  constructor() {
    super();

    this.acedrawingview = new Acedrawingview();
    this.message = this.acedrawingview.message;
  }
}
