window.onload = function() {
	document.getElementById("headLink-1").onclick = function() {
		var sec1 = document.getElementById('sectionTab-1');
		var sec2 = document.getElementById('sectionTab-2');
		var sec3 = document.getElementById('sectionTab-3');
		sec1.style.display = "block";
		sec2.style.display = "none";
		sec3.style.display = "none";
	}
	document.getElementById("headLink-2").onclick = function() {
		var sec1 = document.getElementById('sectionTab-1');
		var sec2 = document.getElementById('sectionTab-2');
		var sec3 = document.getElementById('sectionTab-3');
		sec1.style.display = "none";
		sec2.style.display = "block";
		sec3.style.display = "none";
	}
	document.getElementById("headLink-3").onclick = function() {
		var sec1 = document.getElementById('sectionTab-1');
		var sec2 = document.getElementById('sectionTab-2');
		var sec3 = document.getElementById('sectionTab-3');
		sec1.style.display = "none";
		sec2.style.display = "none";
		sec3.style.display = "block";
	}
}
