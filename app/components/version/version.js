'use strict';

angular.module('Areni.version', [
  'Areni.version.interpolate-filter',
  'Areni.version.version-directive'
])

.value('version', '0.1');
