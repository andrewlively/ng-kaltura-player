"use strict";

angular.module("Kaltura.directives", []).directive("kalturaPlayer", [function () {
  return {
    restrict: "E",
    template: "<div id=\"kaltura_player_{{ id }}\" style=\"width:{{ width }}; height:{{ height }}; background-color: black\"></div>",
    scope: { id: "@", video: "=", height: "@", width: "@", secure: "@secure" },
    controller: function controller($scope) {
      if (document.getElementById("kalturaLib") === null && !window.kWidget) {
        var secure = $scope.secure === "true";

        var s = document.createElement("script");
        s.src = "http" + (secure ? "s" : "") + "://cdnapi" + (secure ? "sec" : "") + ".kaltura.com/p/" + $scope.video.pid + "/sp/" + $scope.video.pid + "00/embedIframeJs/uiconf_id/" + $scope.video.uiconfid + "/partner_id/" + $scope.video.pid;
        s.id = "kalturaLib";
        s.async = false;
        document.head.appendChild(s);
      }

      var intervalID = setInterval(function () {
        if (typeof window.kWidget === "undefined") {
          return;
        }

        clearInterval(intervalID);

        var target = $scope.id ? "kaltura_player_" + $scope.id : "kaltura_player_";
        var flashvars = $scope.video.flashvars ? JSON.parse($scope.video.flashvars) : {};

        window.kWidget.embed({
          "targetId": target,
          "wid": "_" + $scope.video.pid,
          "uiconf_id": $scope.video.uiconfid,
          "flashvars": flashvars,
          "cache_st": Math.random(),
          "entry_id": $scope.video.entryid,
          "readyCallback": function readyCallback(playerID) {
            $scope.kdp = document.getElementById(playerID);
          }
        });
      }, 50);
    }
  };
}]);
