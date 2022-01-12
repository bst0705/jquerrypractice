/*要素の表示アニメーション
CSSにはdisplayプロパティというものがあり「display: none;」とすると要素を隠すことができます

隠れた要素を表示するメソッドとして、showメソッドがあります。表示したい要素に対し、$('セレクタ').show();と指定することで隠れた要素を表示できます。
hideメソッドと合わせてセットで覚える。

fadeOutの反対としてfadeInメソッド、slideUpメソッドの反対としてslideDownメソッドがあります。どちらもアニメーション付きで隠れた要素を表示することができます。
 */

$(function(){
  $('#fade').show();
  $('.fadeout').fadeIn('slow');
  $('.slide').slideUp(1500);
})