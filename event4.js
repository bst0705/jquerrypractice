/*
htmlメソッド, cssメソッド
  jQueryで値をセットするメソッドは大抵ゲットにも使うことができます。
  htmlメソッドとcssメソッドも、ゲットとして使うことができる。

HTMLの属性
  HTMLのタグにはclassやid、srcといったものを指定でき、これらを属性と呼びます。

  HTMLの属性はattrメソッドを用いて「ゲット」と「セット」ができます。例えば、attr('id', 'title')のように第一引数に属性名、第二引数にその属性値を指定することで属性をセットすることができます。そして、第二引数を指定しない場合は、その属性の値を取得できます。*/

$(function() {
  var title = $('#title').text();
  var id = $('.section-content').find('p').attr('id');
  var href = $('#link').attr('href');

  $('#title-text').text(title);
  $('#content-id').text(id);
  $('#link-href').text(href);
});