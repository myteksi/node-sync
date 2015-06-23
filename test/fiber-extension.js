
/**
 * Tests for extension methods for Fiber
 */

var Sync = require('..'),
    assert = require('assert');

var runTest = module.exports = function(callback)
{
    var e;

    try {
        var x = 0;
        var fiber = Sync.Fibers(function() {
            x++;
        });

        fiber.run();
        assert.equal(x, 1);

        fiber.destroy();
        fiber.run();
        assert.equal(x, 1);
        assert.equal(fiber.isDestroyed, true);
    } catch (e) {
        console.error(e.stack);
    }

    if (callback) {
        callback(e);
    }
}

if (!module.parent) {
    runTest(function(){
        console.log('%s done', __filename);
    });
}
