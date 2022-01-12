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
    
    htmlメソッドは、要素の中身のHTMLを書き換えることが出来ます。textメソッドと違い、htmlメソッドの引数は、単なる文字列ではなくHTMLだということです。要素を<span>タグなどで囲う操作をtextメソッドで行うと、<span>タグもそのまま文字列としてブラウザに表示されますが、htmlメソッドなら<span>タグがHTMLタグと認識され、ブラウザには「こんばんは」とだけ表示されます。
    
  this
    $(this)はイベントの中で、そのイベントが起こった要素を取得することができます。$()の中でthisをクォーテーション（"や'）で囲まないことに注意。

    複数のli要素にclickイベントが設定されていた場合、クリックされた時に、実際にクリックされたli要素にだけ処理を行いたい場合があります。このようなときはthisを用いて、実際にイベントが起こった要素を取得しましょう。
    
  変数とメソッドチェーン
    同じjQueryオブジェクトを複数回使用する時は変数にしましょう。コードが見やすくなる上、jQueryの処理が高速化されます。 JavaScriptと同じく、jQueryで変数宣言にはvarを用いる。変数には文字列や数値、jQueryオブジェクトなどを格納することができるが、jQueryオブジェクトを格納する時は、わかりやすいように変数の頭に$を付けるのが慣例となっている。

    同じjQueryオブジェクトを複数回使用する時は、メソッドチェーンを使うことでも処理速度を高速化できる。 メソッドチェーンとは1つのjQueryオブジェクトに連続してメソッドが利用できる構文です。$('セレクタ').メソッド().メソッド()...のように書くことで、それぞれのメソッドが適用されます。

find,children
    findメソッドは、すべての子孫要素(自分よりも下の階層の要素すべて）の中から、指定したセレクタを持つ要素を取得したいときに用います。

    childrenメソッドは、指定したセレクタが持つ子要素（一階層だけ下）の中から指定したセレクタに合致した要素を取得したいときに用います。
    
hover機能
    hoverイベントとは、要素にマウスが乗った時、外れた時に指定した処理を行うイベントです。
    hoverイベントは、 $('セレクタ').hover(マウスをのせた時の処理, マウスをはずした時の処理);のように書きます。clickイベントと違い、引数を2つ書くことに注意しましょう。引数の間はコンマで区切る。
    */

$(function() {
  $('#hide-text').click(function(){
    $('#text').slideUp();
  });

//cssメソッド
  $('#change-css').click(function(){
    $('#text3').css('color','red');
    $('#text3').css('font-size','50px');
  });

//text,html
  $('#change-text').click(function(){
    $('#welcome').text('welcome jquery');
  });

  $('#change-html').click(function(){
    $('#welcome').html('<a href="#">go to jquery</a>');
  });

//this
  $('.list-item').click(function(){
    $(this).css('color','blue');
  });

//変数とメソッドチェーン
  $('.btn').click(function() {
    var $title = $('#title');

    $title.css('color', 'red');
    $title.html('こんばんは、〇〇さん');
    $title.fadeOut(1000);

    $('#text4').css('color','blue').html('<h3>jQueryをマスターしましょう！</h3>').fadeOut(1000);
  });

//find,childrenメソッド
  $('#find-method').click(function() {
    // findメソッドで、「#wrapper」内にあるすべての「a」要素を取得
    $('#wrapper').find('a').css('color','red');
  });

  $('#children-method').click(function() {
    // childrenメソッドで、「#wrapper」の一階層下にある「a」要素を取得
    $('#wrapper').children('a').fadeOut();
  });

//hover機能
  $('#language-wrapper').hover(
    function(){
      $('.language-text').fadeIn();
    },
    function(){
      $('.language-text').fadeOut();
    }
  );
});