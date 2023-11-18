// 	ECMAScript 2022 // EC13 used 
/*JavsScript  code linked with index.html 
that reflects the JS with HTML and CSS in the Output/Browser Pannel 
*/
function run()
//run() function takes no argumnet/parm  and dont return any values 
{
    let html_code = document.getElementById('html-code').value;
    let css_code = document.getElementById('css-code').value;
    let js_code = document.getElementById('js-code').value;
    let output = document.getElementById('output');
    //Get the values of Element by using theri id from index.html/textarea
    
    output.contentDocument.body.innerHTML = html_code + "<style>"+css_code+"</style>";
    //replace / Reflect the HTML and CSS in the Body (Mainly Output section)of the document
    output.contentWindow.eval(js_code);
   //Eval() function execute the js written in the textarea having id (js-code)




}
