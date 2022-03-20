$(document).ready(function () {
	(function ($) {
		'use strict';

		jQuery.validator.addMethod(
			'answercheck',
			function (value, element) {
				return this.optional(element) || /^\bcat\b$/.test(value);
			},
			'type the correct answer -_-',
		);

		// validate contactForm form
		$(function () {
			$('#contactForm').validate({
				rules: {
					name: {
						required: true,
						minlength: 2,
					},
					subject: {
						required: true,
						minlength: 4,
					},
					number: {
						required: true,
						minlength: 5,
					},
					email: {
						required: true,
						email: true,
					},
					message: {
						required: true,
						minlength: 20,
					},
				},
				messages: {
					name: {
						required: 'Please enter your name.',
						minlength: 'Your name must consist of at least 2 characters',
					},
					subject: {
						required: 'Looks like you forgot the subject.',
						minlength: 'Your subject must consist of at least 4 characters',
					},
					number: {
						required: 'Please enter your number.',
						minlength: 'Your Number must consist of at least 5 characters',
					},
					email: {
						required: 'Please enter your email address.',
					},
					message: {
						required:
							'Please enter your message. It should have at least 20 characters.',
						minlength: 'Your message must be at least 20 characters long.',
					},
				},
				submitHandler: function (form) {
					$(form).ajaxSubmit({
						type: 'POST',
						data: $(form).serialize(),
						url: 'contact_process.php',
						success: function () {
							$('#contactForm :input').attr('disabled', 'disabled');
							$('#contactForm').fadeTo('slow', 1, function () {
								$(this).find(':input').attr('disabled', 'disabled');
								$(this).find('label').css('cursor', 'default');
								$('#success').fadeIn();
								$('.modal').modal('hide');
								$('#success').modal('show');
							});
						},
						error: function () {
							$('#contactForm').fadeTo('slow', 1, function () {
								$('#error').fadeIn();
								$('.modal').modal('hide');
								$('#error').modal('show');
							});
						},
					});
				},
			});
		});
	})(jQuery);
});
