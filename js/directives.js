angular.module("AboutSectionDirective", []).directive("aboutSection", function(){
	return {
		restrict: "AE",
		templateUrl: "/templates/directives/about.html",
		replace:true,
		scope : {
			showAbout: "="
		}
	};
});