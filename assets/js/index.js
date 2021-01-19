window.onload = function(){
	console.log("感谢您的浏览，期待能够加入贵公司！我的 GitHub：https://github.com/topgg");
}

function password() {
var testV = 1;
var pass1 = prompt('Please input the password!','');
while (testV < 3) {
if (!pass1)
history.go(-1);
if (pass1 == "xugaoyang") {
break;
}
testV+=1;
var pass1 =
prompt(' 密码错误');
}
if (pass1!="password" & testV ==3)
history.go(-1);
return " ";
}
document.write(password());
