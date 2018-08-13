$(function(){
	$(function(){
		setInterval(function(){
			$.ajax({
				url:'https://back----.herokuapp.com/',
				type:'GET',
			}).done( (data) => {
				// Ajaxリクエストが成功した時発動
				$("#now").text(data.Date)
				console.log(data);
			}).fail( (data) => {
				// Ajaxリクエストが失敗した時発動
				$('#now').html(data);
				console.log(data);
			}).always( (data) => {
				// Ajaxリクエストが成功・失敗どちらでも発動
			});
			console.log("A")
		},3000);
		//なにかしらの処理
	});
})
