(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{292:function(e,t,a){"use strict";a.r(t);var i=a(1),n=Object(i.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"express-upload-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#express-upload-file","aria-hidden":"true"}},[e._v("#")]),e._v(" Express Upload file")]),e._v(" "),a("p",[e._v("A form is usually how a user is able to enter data into a web application. So far you've seen how simple data like text can be entered and submitted. Another common form of input is a file.")]),e._v(" "),a("p",[e._v("To support uploading files, the following actions needs to be taken:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Configure form")]),e._v(", a form needs to be configured so that it can submit a file")]),e._v(" "),a("li",[a("strong",[e._v("Add file input control")]),e._v(", an input control needs to be added to support selecting a file from the users file system.")]),e._v(" "),a("li",[a("strong",[e._v("Configure the Express app")]),e._v(", Express does support receiving a file through the use a third-party library.")])]),e._v(" "),a("h2",{attrs:{id:"configure-the-form"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-the-form","aria-hidden":"true"}},[e._v("#")]),e._v(" Configure the Form")]),e._v(" "),a("p",[e._v("The form element has an attribute "),a("code",[e._v("enctype")]),e._v(". This needs to be set to the value "),a("code",[e._v("multipart/form-data")]),e._v(". This will instruct the Browser to serialize a file so it can be transmitted to a backend. If this attribute is not set correctly the file will not be sent upon submitting the form.")]),e._v(" "),a("h2",{attrs:{id:"file-input-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#file-input-control","aria-hidden":"true"}},[e._v("#")]),e._v(" File input control")]),e._v(" "),a("p",[e._v("You need to an input element to your form. The input element has the following markup "),a("code",[e._v('<input type="file">')]),e._v(" and needs to be placed inside of the form tag element. This will render as input field and a button. When the button is clicked on the element, it will open a dialog window that let's the user choose a file from their file system. This control can be configured in various ways. For example, it can be configured to limit what file extensions to accept as files the user can upload. Some browsers also support the upload of multiple files or a directory of files.")]),e._v(" "),a("h2",{attrs:{id:"submitting-and-receiving-the-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#submitting-and-receiving-the-file","aria-hidden":"true"}},[e._v("#")]),e._v(" Submitting and receiving the file")]),e._v(" "),a("p",[e._v("Let's go through a file submitting scenario and explain the different steps that take place.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("The user interacts with the file input element and selects a file")])]),e._v(" "),a("li",[a("p",[e._v("The user presses the submit button and the form, with the file, is submitted")])]),e._v(" "),a("li",[a("p",[e._v("The file is transmitted as a stream of data. The file is sent as a header, body, and footer. Here's what a file transmission can look like submitting a simple text field and a text file.")]),e._v(" "),a("div",{staticClass:"language-output line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('file ------WebKitFormBoundaryR7uA4A5kM5HaftWi\nContent-Disposition: form-data; name="name"\n\nmy name\n------WebKitFormBoundaryR7uA4A5kM5HaftWi\nContent-Disposition: form-data; name="file"; filename="test.txt"\nContent-Type: text/plain\n\nHere is a simple file\n------WebKitFormBoundaryR7uA4A5kM5HaftWi--\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br")])]),a("p",[e._v("Above you can see how there are two sections of data, one section for your text field and its value:")]),e._v(" "),a("div",{staticClass:"language-output line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('file ------WebKitFormBoundaryR7uA4A5kM5HaftWi\nContent-Disposition: form-data; name="name"\n\nmy name\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("The other section is for the file itself:")]),e._v(" "),a("div",{staticClass:"language-output line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('------WebKitFormBoundaryR7uA4A5kM5HaftWi\nContent-Disposition: form-data; name="file"; filename="test.txt"\nContent-Type: text/plain\n\nHere is a simple file\n------WebKitFormBoundaryR7uA4A5kM5HaftWi--\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("p",[e._v("Note above how this contains a header section telling you what input field, an extra header attribute like "),a("code",[e._v("filename")]),e._v(" and lastly the entire file content.")])])]),e._v(" "),a("p",[e._v("Even though the above is readable and you could probably parse it - you don't want to deal with files this way. The Express framework deals with things on a higher level. You learned in the previous unit how Express can parse a submitted form for you. Express can be made to do the file parsing as well. This is not a built-in functionality however. You can add this capability by downloading a third-party library called "),a("code",[e._v("multer")]),e._v(". "),a("code",[e._v("multer")]),e._v(" deals with parsing the above so all you need to do is instruct "),a("code",[e._v("multer")]),e._v(" where to store the file and under what name.")])])},[],!1,null,null,null);t.default=n.exports}}]);