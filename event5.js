/*
inputタグの入力値
  inputタグを用いると一行の入力欄を作ることができ、
  inputタグに入力されている値は、valメソッドで取得できる
  
submitイベント
  フォームが送信されたときのイベントとして、submitイベントがある。
  submitイベントを用いると、送信ボタンがクリックされたときだけでなく、
  「Enter」キーでフォームが送信された場合もイベントが発生。

セレクトボックスの入力値
  selectタグを用いると選択肢式のセレクトボックスを作ることができます。
  selectタグとoptionタグからなり、各optionタグが選択肢になります。
  selectタグはvalメソッドによって、選択中の値（optionタグのvalue属性の値）を取得できます。
  
フォームの入力チェック
  フォームが送信されたときに、フォームに値が入力されているかどうかをチェックする機能を実装します。
  valメソッドでフォームの値を取得し、フォームに値が入力されていなければ、エラーを出します。
  
  中身の無い文字列のことを「空文字列」と言います。空文字列は通常「''」（シングルクォーテーション２つ）で表記する。
  フォームに値が入力されているかどうかは、valで取得した値が空文字列「''」かどうかで判断することができます。またtextメソッドで空文字列を要素内に挿入することなども可能。
  
フォームの自動入力
  入力欄に自動で値を入力できるようにしてみましょう。
  valメソッドは値を取得することもできますが、反対に引数に値を指定することで、
  フォームに値をセットすることもできます。
  まずはinputタグへの値のセットをする。
  
セレクトボックスの自動入力
  セレクトボックスも自動で選択されるようにしましょう。
  selectタグもvalメソッドを用いて自動で選択させることができます。
  先ほどのinputタグとの違いは、selectタグの場合選択肢が限定されているということです。
  optionタグのvalue属性に合致する値をvalメソッドの引数に指定しましょう。
  
カスタムデータ属性
  属性は自分でつくることもできます。これをカスタムデータ属性といい、
  「data-」から始まる属性名を自由に設定できます。data属性は、何らかの情報をHTML内に指定しておくのに便利なため、jQueryではよく用いられる。
  ( (attr)で属性を取得できる )

  今回は、選択ボタンにdata-optionという属性を設定し、
  それぞれのdata-option属性にはselectタグの選択肢（option）の
  value属性に対応する値を指定しておきます。
  こうすることで、緑色の選択ボタンを押して自動的にセレクトボックスが選択されるようになる。
  
animateメソッド
  アニメーションをつけるにはanimateメソッドを用います。$('セレクタ').animate({'プロパティ':'値'})のように、引数は連想配列で指定します。
  2つ目の引数でアニメーションの時間を設定することができます。
  時間はミリ秒で指定するか、'slow'や'fast'といった文字列で指定することができます。
  
ページ内リンク
  <a>タグは他のページへのリンクだけでなく、ページ内のリンクを作ることもできる。
  リンクの飛び先にidを指定し、<a>タグのhref属性に"#id名"とすると、<a>タグをクリックするとそのidの要素が表示されている場所まで移動するようになります。
  
scrollTopメソッド
  ページ内リンクはjQueryでも実装できる。jQueryで実装するとリンク先への移動にアニメーションをつけたりすることが可能になります。
  scrollTopメソッドは、$('html, body').scrollTop(値); のように指定し、
  ページ最上部から値pxの位置に移動することができます。
  scrollTopは通常$('html, body')に対して用いるので、セットで覚えておく。
  
スクロールにアニメーションをつける
  animateメソッドでは、CSSの値だけでなく、scrollTopなどの値も変更できる。
  $('html, body').animate({'scrollTop': 0}, 時間); のように指定する。
  
ナビゲーションをつくる(ページ内リンク)
  押したボタンに応じて任意の場所まで自動でスクロールするようにする*/

$(function() {
 $('#form').submit(function(){

  let selectValue = $('#select-form').val();
  let textValue = $('#text-form').val();

  //textValueが空の場合エラーメッセージ表示、記入されると非表示
  if( textValue == '' ){
    $('#error-message').text('理由を記入してください');
  }
  else{
    $('#error-message').text('');
  }

  $('#output-text').text(textValue);
  $('#output-select').text(selectValue);
   return false;
 });

 $('.option-btn').click(function(){
  let optionText = $(this).text();
  let clickedOption = $(this).attr('data-option');

  $('#text-form').val(optionText + "が好きな理由は");
  $('#select-form').val(clickedOption);
 });

 $('.social-icon').hover(
  function(){
    $(this).animate({
      'font-size':'30px'
      },'fast');
    },
  function(){
    $(this).animate({
      'font-size':'24px'
      },'slow');
  });

 $('#top-btn').click(function(){
   $('html,body').animate({
    'scrollTop':0
   },500)
 });

 $('header').find('a').click(function(){
  var id = $(this).attr('href');
  var position = $(id).offset().top;
  $('html, body').animate({
    'scrollTop': position
  },500)
});
});