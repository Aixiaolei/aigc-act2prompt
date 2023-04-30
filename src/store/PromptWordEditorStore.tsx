import { makeAutoObservable } from 'mobx';

class PromptWordEditorStore {
  editorSwitch: boolean = false;
  editorDesc: string = ''

  

  constructor() {
    makeAutoObservable(this);
  }

  openEditor = (editorDesc ='') =>{
    this.editorSwitch = true
    this.editorDesc = editorDesc
  }

  closeEditor = () =>{
    this.editorSwitch = false
  }

}

export default new PromptWordEditorStore();