import { makeAutoObservable } from 'mobx';
import type { Prompt } from '../assets/data/prompt'

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