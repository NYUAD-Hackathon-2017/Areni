'use strict';

describe('Areni.version module', function() {
  beforeEach(module('Areni.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
