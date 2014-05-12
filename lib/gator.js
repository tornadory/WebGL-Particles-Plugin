// Generated by CoffeeScript 1.7.1
(function() {
  window.Gator = (function() {
    var params;

    params = ['MAX_VARYING_VECTORS', 'MAX_VERTEX_ATTRIBS', 'MAX_VERTEX_UNIFORM_VECTORS'];

    function Gator() {
      this.canvas = document.createElement("canvas");
      this.ctx_webgl = this.canvas.getContext("webgl");
      this.populate();
    }

    Gator.prototype.populate = function() {
      var ctx, k, param, v, _i, _len, _ref, _results;
      ctx = this.ctx_webgl;
      this.report = {};
      for (_i = 0, _len = params.length; _i < _len; _i++) {
        param = params[_i];
        this.report[param] = ctx.getParameter(ctx[param]);
      }
      _ref = this.report;
      _results = [];
      for (k in _ref) {
        v = _ref[k];
        _results.push(console.log(k, v));
      }
      return _results;
    };

    return Gator;

  })();

}).call(this);

//# sourceMappingURL=gator.map