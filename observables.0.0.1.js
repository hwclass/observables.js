var observables = (function (obj) {

	function handlerEventAfterChange (changedPropList) {
		for (var count=0, len=changedPropList.length; count < len; count++) {
			var message = '';
			if (changedPropList[count].type === 'add') {
				message = 'added';
			} else if (changedPropList[count].type === 'update') {
				message = 'updated';
			}
			console.log(changedPropList[count].name, changedPropList[count].oldValue, message);
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
		console.log(obj + ' is unchangable.');
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
