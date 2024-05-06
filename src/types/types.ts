export interface Layout {
    on: boolean;
    index: number;
    account: boolean[];
}
export interface LayoutOnFunction {
    (i: number, e: number): void;
}
  
export class Settings {
    static layauts : Layout[] = [
        {on:true, index:0, account:[true, false, false, false, false, false, false]},
        {on:false, index:1, account:[true, false, false, false, false, false, false]},
        {on:false, index:2, account:[true, false, false, false, false, false, false]},
        {on:false, index:3, account:[true, false, false, false, false, false, false]}
    ]
    static navs :boolean[]=[
        false,
        false,
        false,
        false,
        false
    ]
}