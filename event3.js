/* 
jQueryオブジェクトは、配列の「ような」構造をしており、セレクタに合致した要素が配列のように入っています（実際には配列とは異なるものです）
配列の要素には0から順にインデックス番号というものが割り振られています。jQueryオブジェクトも同様。

eqメソッドを用いると、jQueryオブジェクトの中から、eqの引数の数字と同じインデックス番号の要素を取得できます。（インデックス番号が0から始まることに注意）
例( $('li').eq(2).css('display','none'); )。

スライド機能の作成
  スライド機能の実装の仕方
    「.slide」要素は「display: none;」を用いて基本的に表示されないようにし、activeクラスがついた「.slide」要素だけが表示されるようにする。
    このactiveクラスをjQueryによって付け替えることによって、表示されるスライドを変更していきます。

  indexメソッド
    指定した要素のインデックス番号を取得できる。

  変数の$
    変数の頭に$を付けるのはjQueryオブジェクトが格納されていることをわかりやすくするためです。文字列や数値を格納する時は$を付けない。

  prevとnext
    prevメソッドは、jQueryオブジェクトの兄弟要素（同じ階層の要素）の中から1つ前の要素を、nextメソッドは1つ後ろの要素を取得することができます

  ボタンの表示/非表示
    最初のスライドが表示されている時は「前へ」ボタン、最後のスライドが表示されている時は、「次へ」ボタンを隠す。

    ボタンの表示を切り替えるために、条件分岐を行う。

  length
    lengthを用いると、jQueryオブジェクトの要素の個数を取得できる。
    これを活用し、スライドの枚数が変わっても、関数の内容を書き換えなくて済むようにできる。
*/
$(function() {
  const toggleChangeBtn = ()=> {
    var slideIndex = $('.slide').index($('.active'));
    $('.change-btn').show();
    if (slideIndex == 0) {
      $('.prev-btn').hide();
    }
    //インデックス番号は0から(last-slide = スライド数 - 1)
    else if (slideIndex == $('.slide').length - 1) {
      $('.next-btn').hide();
    }
  }

  $('.index-btn').click(function() {
    $('.active').removeClass('active');
    var clickedIndex = $('.index-btn').index($(this));
    $('.slide').eq(clickedIndex).addClass('active');
    toggleChangeBtn();
  });

  $('.change-btn').click(function() {
    var $displaySlide = $('.active');
    $displaySlide.removeClass('active');
    if ($(this).hasClass('next-btn')) {
      $displaySlide.next().addClass('active');
    } else {
      $displaySlide.prev().addClass('active');
    }
    toggleChangeBtn();
  });
});

