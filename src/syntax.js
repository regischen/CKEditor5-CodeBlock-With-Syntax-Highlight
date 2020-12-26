import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import SyntaxEditing from './syntaxEditing.js'

export default class Syntax extends Plugin {
  static get requires() {
    return [SyntaxEditing]
  }

  init() {
    console.log('SyntaxPlugin#init() got called')
  }
}
