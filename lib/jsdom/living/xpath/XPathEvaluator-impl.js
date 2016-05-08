"use strict";

const XPathExpression = require("../generated/XPathExpression");

class XPathEvaluatorImpl {
  createExpression(expression, resolver) {
    return XPathExpression.create([expression, resolver]);
  }

  evaluate(expression, contextNode, resolver, type, result) {
    var expr = XPathExpression.create([expression, resolver]);
    return expr.evaluate(contextNode, type, result);
  }
}

module.exports = {
  implementation: XPathEvaluatorImpl
};
