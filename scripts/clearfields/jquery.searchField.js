
jQuery.fn.searchField = function(mark){
	return this.each(function() {
		var mark = mark || this.title;
		
		if (!mark)
			return;
			
		var target = this;
		var original = $(this);
		if (this.type == "password") {
			target = $("<input />")
				.insertBefore(this)
				.css("display", $(this).css("display"))
				.attr("size", this.size)
				.attr("title", this.title)
				.attr("class", this.className)
				.addClass("watermark")[0];
			if (!this.value) {
				$(this).hide();
			} else {
				$(target).hide();
			}
		}
		
		if(!target.value || mark == this.value) {
			$(target).addClass("watermark");
		}
		
		// setup initial value
		if (!this.value || target != this) {
			target.value = mark;
		}
		
		$(target).focus(function() {
				if (target != original[0]) {
				$(this).hide();
				original.show().focus();
			} else if (this.value == mark) {
				this.value = '';
				$(this).removeClass("watermark");
				$(this).addClass("fieldText");
			}
		});
		$(this).blur(function() {
			if (!this.value.length) {
				if (target != original[0]) {
					$(target).show();
					original.hide();
				} else {
					this.value = mark;
					$(this).addClass("watermark")
					$(this).removeClass("fieldText")
				} 
			}
		});
		
		// make sure that when the form is submitted, the watermark is
		// replaced with the empty string, which is usually the expected behavior.
       $(this).parents("form:first").submit(function(){
           if ($(target).hasClass("watermark")) {
               $(target).attr("value", "");
               $(target).removeClass("watermark");
           }
       });
	});
};