!function(){var e,t,n,i,a={passive:!0,capture:!0},r=new Date,o=function(){i=[],t=-1,e=null,f(addEventListener)},s=function(i,a){e||(e=a,t=i,n=new Date,f(removeEventListener),c())},c=function(){if(t>=0&&t<n-r){var a={entryType:"first-input",name:e.type,target:e.target,cancelable:e.cancelable,startTime:e.timeStamp,processingStart:e.timeStamp+t};i.map((function(e){e(a)})),i=[]}},l=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){s(e,t),r()},i=function(){r()},r=function(){removeEventListener("pointerup",n,a),removeEventListener("pointercancel",i,a)};addEventListener("pointerup",n,a),addEventListener("pointercancel",i,a)}(t,e):s(t,e)}},f=function(e){["mousedown","keydown","touchstart","pointerdown"].map((function(t){return e(t,l,a)}))},u="hidden"===document.visibilityState?0:1/0;addEventListener("visibilitychange",(function e(t){"hidden"===document.visibilityState&&(u=t.timeStamp,removeEventListener("visibilitychange",e,!0))}),!0),o(),self.webVitals=self.webVitals||{},self.webVitals.firstInputPolyfill=function(e){i.push(e),c()},self.webVitals.resetFirstInputPolyfill=o,self.webVitals.firstHiddenTime=u}();
