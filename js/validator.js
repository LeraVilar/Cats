document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('mainform');
	form.addEventListener('submit', formSend);


	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);
		if (error === 0) {
			alert ('УСПЕХ!')

		}	
		
		
	}

	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('_email')) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
					alert ('Адрес некорректный')
				}}
			else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}

		}
		return error;
	}

	function formAddError(input) {
		
		input.classList.add('_error')
	}
	function formRemoveError(input) {
		
		input.classList.remove('_error')
	}

	function emailTest(input) {
		return !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input.value);
	}

});