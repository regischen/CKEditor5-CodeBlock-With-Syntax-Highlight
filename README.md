# CKEditor 5 code block with real-time syntax highlight

This package implements real-time syntax highlight basesd on the code block feature of CKEditor 5 and third party libary Highlight.js

![Effect](https://raw.githubusercontent.com/regischen/CKEditor5-CodeBlock-With-Syntax-Highlight/main/assets/show.gif)

## Usage

```
npm i ckeditor5-codeblock-with-syntax-highlight --save
```

```
import CodeBlock from 'ckeditor5-codeblock-with-syntax-highlight/src/codeblock'
(Note: comment original import.)
// import CodeBlock from '@ckeditor5/ckeditor5-code-block/src/codeblock'
```

```
plugins: [..., CodeBlock]
```

```
toolbar: [..., 'codeBlock']
```

**If you find value in this package, please consider give a star.
So I will be more motivated to improve this package.**

**Any suggestions and issues are welcome!**

## License

Licensed under the terms of [GNU General Public License Version 2 or later](http://www.gnu.org/licenses/gpl.html). For full details about the license, please check the `LICENSE.md` file or [https://ckeditor.com/legal/ckeditor-oss-license](https://ckeditor.com/legal/ckeditor-oss-license).
