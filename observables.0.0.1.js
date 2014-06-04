var observables = (function (obj) {

	function handlerEventAfterChange (changedPropList) {
		for (var count=0, len=changedPropList.length; count < len; count++) {
			console.table('prop:' + changedPropList[count].name + " was " + changedPropList[count].type + " and is now " + changedPropList[count].object[changedPropList[count].name]);
		}
	}

	function observeTheObject (obj) {
		Object.observe(obj, handlerEventAfterChange);
	}

	function unObserveTheObject (obj) {
		Object.unobserve(obj, handlerEventAfterChange);
		console.log(obj + ' is now unobservable.');
	}

	function lockTheObject (obj) {
		Object.freeze(obj);
		consoole.log(obj + ' is freezed.');
	}

	function delegateObservableStatus (objs, state) {
		for (var count=0, len=objs.length; count < len; count++) {
			if (typeof objs[count] !== 'undefined' && typeof objs[count] !== 'null') { 
				if (state === 'trace') {
					observeTheObject(objs[count]);
				} else if (state === 'leave') {
					unObserveTheObject(objs[count]);
				} else if (state === 'freeze') {
					lockTheObject(objs[count]);
				}
			} else {
				console.log(objs[count].name + 'is undefined.');
			}
		}
	}

	return {
		trace : function (objs) {
			delegateObservableStatus(objs, 'trace');
		},
		leave : function (objs) {
			delegateObservableStatus(objs, 'leave');
		},
		freeze : function (objs) {
			delegateObservableStatus(objs, 'freeze');
		}

	};

}());