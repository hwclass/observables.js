observables.js

An small object tracing and logging library.

### Usage

#### You can have a plain JS object watched
<pre lang="javascript">
<code>
var testObj = {};
observables.trace([testObj]);
/*when the changing occurs like below:*/
test.firstProp = "Changed property."
/*console is logged with the current object is changed and its new value.*/
console => prop:a was add and is now 1
</code>
</pre>

#### You can have a plain JS object not to be watched
<pre lang="javascript">
<code>
observables.leave([testObj]);
/*console is logged with the current object is leaved alone.*/
console => [object Object] is now unobservable.
</code>
</pre>

#### You can have a plain JS object frozen (so, not to let it change its value)
<pre lang="javascript">
<code>
observables.freeze([testObj]);
/*console is logged with the current object is freezed.*/
console => [object Object] is now unchangable.
</code>
</pre>

#### You can have objects observed, unobserved and frozen
<pre lang="javascript">
<code>
observables.trace([testObj1, testObj2, testObj3]);
observables.leave([testObj1, testObj2, testObj3]);
observables.freeze([testObj1, testObj2, testObj3]);
</code>
</pre>
