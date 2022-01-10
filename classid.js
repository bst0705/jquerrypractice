/* idはclassと同じように使える、classとの違いは、１つのページ内で同じid名を複数回使うことはできません。idはclassと同様、下記のように指定します 
idは同一ページに一箇所しか存在しないので、jQueryの処理が高速化される。
jQueryオブジェクトのセレクタにはできるだけidを用いるようにしましょう。*/

$(function() {
  // hideメソッドを用いて<h1>要素を隠す
  $('#fade').hide();
  $('.fadeout').fadeOut();
  $('.slide').slideUp(1500);
});