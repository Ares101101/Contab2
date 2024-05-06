import { Component } from "react";

class Account extends Component {
    Layauts : Layout[]
    currentIndex: number | null;
    constructor(
        Layauts : Layout[]=[
        {on:true, index:0, account:[true, false, false, false, false, false, false]},
        {on:false, index:1, account:[true, false, false, false, false, false, false]},
        {on:false, index:2, account:[true, false, false, false, false, false, false]},
        {on:false, index:3, account:[true, false, false, false, false, false, false]}
    ])
    {
        super([
            {on:true, index:0, account:[true, false, false, false, false, false, false]},
            {on:false, index:1, account:[true, false, false, false, false, false, false]},
            {on:false, index:2, account:[true, false, false, false, false, false, false]},
            {on:false, index:3, account:[true, false, false, false, false, false, false]}
        ]);
        this.Layauts =Layauts,
        this.currentIndex = null, 
        this.updateCurrentIndex()
    }
    private updateCurrentIndex(): void {
        const page = this.Layauts.map((l) => {
            if (l.on) {
                return l.index;
            } else {
                return null;
            }
        }).filter((value) => value !== null);

        this.currentIndex = page.length > 0 ? page[0] : null;
        console.log( this.currentIndex)
    }

    accountOn(i: number, e: number){
        const newLayout = this.Layauts.map((l) => ({
            ...l,
            on: l.index === i,
            account: l.account.map((_, index) => index === e)
        }));
       
        this.Layauts = newLayout;
        console.log(this.Layauts)
        this.updateCurrentIndex()
    }

    traerIndexAccount():number|null{
        console.log(this.currentIndex)
        return this.currentIndex
    }
}

class Layout{
    on: boolean;
    index: number;
    account: boolean[];

    constructor(
    on: boolean,
    index: number,
    account: boolean[],

    )
        {
            this.on = on,
            this.index= index,
            this.account= account
        }
}

const account = new Account()
export default account

/*const account = new Account(new Nodo(new Layout(true,0,[true, false, false, false, false, false, false]), new Nodo(new Layout(false,1,[false, false, false, false, false, false, false]), new Nodo(new Layout(false,2,[false, false, false, false, false, false, false]), new Nodo(new Layout(false,3,[false, false, false, false, false, false, false]) ) ) ) ) )

export default account

    head:Nodo
    constructor(head:Nodo) {
        this.head = head
        this.modificarLayoutPage = this.modificarLayoutPage.bind(this)
    }

    traerLayoutPageOn(){
        let LayoutPage:number[] = [0,0]
        let current = this.head;
        if (current.value.on) {
            LayoutPage[0] = current.value.index
            const page = current.value.pages.findIndex((value) => value === true);
            LayoutPage[1]= page
        }
        while (current.next !== null) {
            current = current.next;
            if (current.value.on) {
                LayoutPage[0] = current.value.index
                const page = current.value.pages.findIndex((value) => value === true);
                LayoutPage[1]= page
            }
        }
        
        return LayoutPage
    }

    modificarLayoutPage(i: number, e: number) {
        if (this.head == null) {
            return "head no iniciado";
        } else {
            let current = this.head;
            if (current.value.index === i) {
                current.value.on = true

                current.value.pages = current.value.pages.map((_, index) => index === e);
                
            }
            while (current.next !== null) {
                current = current.next;
                if (current.value.index === i) {
                    current.value.pages = current.value.pages.map((_, index) => index === e);
                }
            }
            console.log(current)
            console.log(this.head)
        }
        
    }
*/