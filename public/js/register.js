var sent=0;
$("#button-addon2").on("click", function () {
	var phone = $("#phone").val();
	var _token = $("input[name='_token']").val();
	$.post("/Actions/SendSMSCaptcha", {
		_token: _token,
		phone: phone
	}, function (data) {sent=1;});
	$("#button-addon2").html("120秒后重新获取验证码");
	$("#button-addon2").attr("disabled", "disabled");
	var t = 119;
	var timeStr = '';
	var countDown = setInterval(function () {
		if (t == 0) {
			$("#button-addon2").html("发送验证码");
			$("#button-addon2").removeAttr("disabled", "disabled");
			sent=0;
			clearInterval(countDown);
			return 0;
		}
		timeStr = t + "秒后重新获取验证码";
		$("#button-addon2").html(timeStr);
		t--;
	}, 1000);
});

$("#phone").on("blur", function () {
	var phone = $("#phone").val();
	if (phone.length != 11) {
		$("#button-addon2").attr("disabled", "disabled");
	} else {
		if (sent==0){
			$("#button-addon2").removeAttr("disabled");
		}
	}
});
