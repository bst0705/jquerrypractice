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
  フォームに値が入力されているかどうかは、valで取得した値が空文字列「''」かどうかで判断することができます。またtextメソッドで空文字列を要素内に挿入することなども可能。*/

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
});