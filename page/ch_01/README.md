# Hello World
1. ReactDOM은 화면에 렌더링을 위한 객체다.
2. React.DOM DOM요소를 제공한다. (ex: span, div ...)
 - ReactDOM 과 React.DOM는 다르다.
3. DOM 속성 중 class와 for는 예약어로 사용할 수가 없으니 각각 ClassName과 htmlFor를 사용한다.
4. style은 자바스크립트 객체를 사용하여야 한다.
 - font-family(X) -> fontFamily(O)
 - CSS 프로퍼티를 사용할때에 자바스크립트 API이름을 사용해야 한다.

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
