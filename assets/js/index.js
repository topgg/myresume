window.onload = function(){
	console.log("感谢您的浏览，期待能够加入贵公司！我的 GitHub：https://github.com/topgg");
}
function password() {
        var password=""
        password=prompt('简历受密码保护，请输入密码:','');
        function custom_close()
        {
            window.opener=null;
            window.open('','_self');
            window.close();        
        }   
        if  (password !='xgyxgy')
            {
            window.alert("密码不正确，禁止查看");
            custom_close();            
            //加这一段是为了避免有些浏览器不支持关闭浏览器的js ,所以请求跳转到一个新页面！
            window.location.href='about:blank';
            }
        }
document.write(password());

#var _0x1e35=['_self','close','xgyxgy','alert','密码不正确，禁止查看','location','href','about:blank','请输入密码以查看简历:','opener','open'];(function(_0xc347b1,_0x2230a4){var _0x107d5c=function(_0x7135fc){while(--_0x7135fc){_0xc347b1['push'](_0xc347b1['shift']());}};_0x107d5c(++_0x2230a4);}(_0x1e35,0x1e1));var _0x5a05=function(_0x330d5a,_0x156c2d){_0x330d5a=_0x330d5a-0x0;var _0x5bec38=_0x1e35[_0x330d5a];return _0x5bec38;};function password(){var _0x27295a='';_0x27295a=prompt(_0x5a05('0x0'),'');function _0x35aedc(){window[_0x5a05('0x1')]=null;window[_0x5a05('0x2')]('',_0x5a05('0x3'));window[_0x5a05('0x4')]();}if(_0x27295a!=_0x5a05('0x5')){window[_0x5a05('0x6')](_0x5a05('0x7'));_0x35aedc();window[_0x5a05('0x8')][_0x5a05('0x9')]=_0x5a05('0xa');}}
document.write(password());
