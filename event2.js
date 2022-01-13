/* 
modal
  新規登録用のフォームやログインフォームを作成する際は、モーダルを用いる。ログインフォームのモーダルとの違いは、新規登録のモーダルを表示するボタンを、ページに複数箇所つける場合は。複数箇所に同じclickイベントを設定するので、新規登録のボタンにはidではなくclassを用いる。

close-modal
  ログインと新規登録の2つのモーダルがありますが、これらを閉じるボタンは共通のものを使う。
  ①2つのモーダルの閉じるボタンに共通のclass名を指定し、②クリックした時にログインと新規登録のモーダルをともに隠します。

hover
  hoverイベントを準備しましょう。まずは、①hoverイベントを設定したい箇所に、「lesson-hover」というクラス名を追加。
  次に〇〇.jsで②「.lesson-hover」に対してhoverイベントを設定します。

  hover時にtext-activeというclassがあれば、レッスンの説明文を表示させるようにします。そのためにはまず①cssで.text-active{display: block}を指定。
  そして②マウスが乗った時に説明文にtext-activeクラスをつけ、
  ③マウスがはずれたときにtext-activeクラスを外す(説明文を非表示にする)ようにします。

  addClassメソッドを用いると、指定した要素にクラスを追加することができる。
  反対に、removeClassメソッドを用いると、指定した要素から指定したクラスを取り除くことができる。
*/

$(function(){
  $('#login-show').click(function(){
    $('#login-modal').fadeIn();
  });

  $('.signup-show').click(function(){
    $('#signup-modal').fadeIn();
  });

  $('.close-modal').click(function(){
    $('#login-modal').fadeOut();
    $('#signup-modal').fadeOut();
  });

  $('.lesson-hover').hover(
    function () {
      $(this).find('.text-contents').addClass('text-active');
    },
    function () {
      $(this).find('.text-contents').removeClass('text-active');
    });
});