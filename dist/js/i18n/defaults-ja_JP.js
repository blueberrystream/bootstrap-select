/*!
 * Bootstrap-select v1.11.2 (http://silviomoreto.github.io/bootstrap-select)
 *
 * Copyright 2013-2016 bootstrap-select
 * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(["jquery"], function (a0) {
      return (factory(a0));
    });
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require("jquery"));
  } else {
    factory(root["jQuery"]);
  }
}(this, function (jQuery) {

(function ($) {
  $.fn.selectpicker.defaults = {
    noneSelectedText: '未選択',
    noneResultsText: '{0}にマッチする結果はありません',
    countSelectedText: '{0}件選択',
    maxOptionsText: function (numAll, numGroup) {
      return [
        '最大{n}件までです',
        '最大{n}グループまでです'
      ];
    },
    selectAllText: '全て選択',
    deselectAllText: '全て選択解除',
    multipleSeparator: ', '
  };
})(jQuery);


}));
