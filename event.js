/*イベント
    イベントを用いると、ある処理を行うタイミングを設定できます。WEBページ内で、ユーザーによってクリックなどの操作が行われた時、あらかじめイベント内に指定した処理を実行します。
    イベントの構文は、$('セレクタ').イベント名(function(){ });のように書く。
    
    clickイベントを用いると、「セレクタがクリックされた時に処理をする」ことができます。
    例えば、ボタンをクリックしたときに関連する文章を表示する等
    
  cssメソッド
    CSSメソッドは、CSSを変更できるメソッドです。1つ目の引数にCSSのプロパティを、2つ目の引数にプロパティの値をいれます。
    cssメソッドで要素の文字の色を変更したいときは、$('セレクタ').css('color', 'red');のように記述します。
    
    cssメソッドでdisplayプロパティの値を変更することもできます。$('セレクタ').css('display', 'none');はhideメソッドと全く同じです。このようにhideメソッドやshowメソッドは、実はdisplayプロパティの値を変更しているだけだということを覚えておきましょう。
    
  textメソッドとhtmlメソッド
    textメソッドを用いることでHTMLそのものを変更することも出来ます。textメソッドは、$('セレクタ').text('書き換える文字列');のように記述します。
    
    htmlメソッドは、要素の中身のHTMLを書き換えることが出来ます。textメソッドと違い、htmlメソッドの引数は、単なる文字列ではなくHTMLだということです。要素を<span>タグなどで囲う操作をtextメソッドで行うと、<span>タグもそのまま文字列としてブラウザに表示されますが、htmlメソッドなら<span>タグがHTMLタグと認識され、ブラウザには「こんばんは」とだけ表示されます。*/

$(function() {
  $('#hide-text').click(function(){
    $('#text').slideUp();
  });

  $('#change-css').click(function(){
    $('#text3').css('color','red');
    $('#text3').css('font-size','50px');
  });

  $('#change-text').click(function(){
    $('#welcome').text('welcome jquerry');
  });

  $('#change-html').click(function(){
    $('#welcome').html('<a href="#">go to jquerry</a>');
  });
});