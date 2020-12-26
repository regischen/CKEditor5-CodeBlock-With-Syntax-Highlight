import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

const HLJSES = ['hljs-built_in', 'hljs-string', 'hljs-number', 'hljs-keyword', 'hljs-literal', 'hljs-function']
export default class SyntaxEditing extends Plugin {
  static get pluginName() {
    return 'SyntaxEditing';
  }

  init() {
    const { editor } = this
    editor.model.schema.extend('$text', { allowAttributes: 'hljs' })
    editor.conversion.for('upcast').elementToAttribute({
      view: {
        name: 'span',
        classes: 'hljs'
      },
      model: 'hljs'
    })

    editor.conversion.for('dataDowncast').attributeToElement({
      model: {
        name: '$text',
        key: "hljs",
        value: HLJSES
      },
      view: {
        name: 'span',
        classes: 'hljs'
      },
    })

    editor.conversion.for('editingDowncast').attributeToElement({
      model: {
        name: '$text',
        key: "hljs",
        value: HLJSES
      },
      view: (modelAttributeValue, conversionApi) => {
        const { writer } = conversionApi;
        return writer.createAttributeElement('span', {
          class: modelAttributeValue
        });
      },
    });



  }
}
