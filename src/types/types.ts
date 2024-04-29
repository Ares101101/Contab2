export interface Layout {
    on: boolean;
    index: number;
    pages: boolean[];
}
export interface LayoutOnFunction {
    (i: number, e: number): void;
}
  
export class Settings {
    static layauts : Layout[] = [
        {on:true, index:0, pages:[true, false, false, false, false, false, false]},
        {on:false, index:1, pages:[true, false, false, false, false, false, false]},
        {on:false, index:2, pages:[true, false, false, false, false, false, false]},
        {on:false, index:3, pages:[true, false, false, false, false, false, false]}
    ]
    static navs :boolean[]=[
        false,
        false,
        false,
        false,
        false
    ]
}