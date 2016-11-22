/*
 * Translated default messages for bootstrap-select.
 * Locale: JA (Japanese)
 * Region: JP (Japan)
 */
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
