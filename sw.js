'use strict';
importScripts('sw-toolbox.js'); toolbox.precache(['эх.html','эх5.css']); toolbox.router.get('/*', toolbox.networkFirst, { networkTimeoutSeconds: 5});