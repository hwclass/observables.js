observables.js
==============

An small object tracing and logging library.

<i>This tiny library can be used with Harmony polyfills that supports Object.observe method. (etc. use Chrome Canary)</i>

##usage

###1- If you want a plain JS object to be watched, push the original object after initializing:
==============
<pre lang="javascript">
	<code>
		'''var testObj = {};
		observables.trace([testObj]);
		/*when the changing occurs like below:*/
		test.firstProp = 'Changed property.'
		/*console is logged with the current object is changed and its new value.*/
		console => prop:a was add and is now 1'''
	</code>
</pre>

###2 - If you want a plain JS object not to be watched, push the object again like this:
==============
<pre lang="javascript">
	<code>
		'''observables.leave([testObj]);
		/*console is logged with the current object is leaved alone.*/
		[object Object] is now unobservable.'''
	</code>
</pre>

###3 - If you want a plain JS object to be freeze (so, not to let it change its value), push the object like this:
==============
<pre lang="javascript">
	<code>
		'''observables.freeze([testObj]);
		/*console is logged with the current object is freezed.*/
		[object Object] is now unchangable.'''
	</code>
</pre>

###4 - If you want, you can observe, unobserve and freeze more than an object:
==============
<pre lang="javascript">
	<code>
		'''observables.trace([testObj1, testObj2, testObj3]);
		observables.leave([testObj1, testObj2, testObj3]);
		observables.freeze([testObj1, testObj2, testObj3]);'''
	</code>
</pre>