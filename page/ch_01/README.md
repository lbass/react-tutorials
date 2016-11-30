# Hello World
ReactDOM은 화면에 렌더링을 위한 객체입니다. UI를 그려주는 객체입니다.
이름이 비슷한 React.DOM 이라는 객체도 존재하는데 이 객체는 DOM요소를 제공합니다. (ex: span, div ...)
ReactDOM 과 React.DOM은 성격이 다른 객체라는 것을 인식하여야 합니다.
DOM 속성을 컨트롤할때 class와 for는 예약어로 사용할 수가 없습니다.
이는 각각 ClassName과 htmlFor를 사용하도록 하고 있습니다.
style은 자바스크립트 객체를 사용하여야 합니다. 아래 예를 확인 합니다.
 - font-family(X) -> fontFamily(O)
CSS 프로퍼티를 사용할 때에는 자바스크립트 API이름을 사용하여야 한다는 사실을 인지합니다.

예)
<pre>
<code>
{
  className: "pretty",  //className 사용
  htmlFor: "me",
  style: {
    background: "black",  //css객체 이름을 사용하지 않고 javascript API를 사용
    color: "white",
    fontFamily: "Verdana"
  }
}
</code>
</pre>
