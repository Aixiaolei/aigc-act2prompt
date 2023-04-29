import { makeObservable, observable, action, computed } from "mobx";
import type {Prompt} from '../assets/data/prompt'


class Store {
    constructor() {
        makeObservable(this);
    }
    @observable drawerOpen = true
    @observable drawerData : (Prompt | null) = null

    @action 
    openDrawer = (modelData: (Prompt | null))=>{  
        this.drawerOpen = true
    }
    @action 
    drawerClose = () => {
        this.drawerOpen = false
    }
    @action
    copy = () => {

    }


    
}
export default new Store()
