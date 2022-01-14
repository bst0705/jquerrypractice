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

アコーディオン機能
  クリックするとその答えなどがスライドして表示/非表示される機能

  ①スライド部分はCSSで非表示にします。
  ②クリックする部分には同一のclass名を付与。
  ③それらのclickイベントを作ります。クリックした時に、
  対応する答えを隠すのか表示するのかを判断するため、
  openというclassを用います。答えの表示中はopenをつけ、非表示中は外します。

  hasClassメソッドは、引数に指定したクラスを、オブジェクトが持っているか判定するときに使用します。オブジェクトがそのクラスを持っていればtrue、持っていなければfalseを返します。

  答えの表示・非表示はif文を用いて行います。質問をクリックした時に、$('.answer')がすでにopenクラスを持っていれば、（質問の答えが現在表示されていると判断できるので）openクラスを外し、答えを隠します。openクラスがない場合はその逆です。
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

  $('.faq-list-item').click(function () {
    let $answer = $(this).find('.answer');
    if ($answer.hasClass('open')){
      $answer.removeClass('open');
    }
    else{
      $answer.addClass('open');
    }
    })
});