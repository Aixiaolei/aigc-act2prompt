import { makeObservable, observable, action, computed } from "mobx";
import type {Prompt} from '../assets/data/prompt'


class Todo {
    constructor() {
        makeObservable(this);
    }
    @observable modelOpen = false
    @observable modelData : (Prompt | null) = null

    @action changeModel(modelData: (Prompt | null)){
        
    }
}
const todoStore = new Todo();
export default todoStore;
