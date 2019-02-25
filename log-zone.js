var logZoneSpec = {
    onFork: (parentZoneDelegate, currentZone, targetZone, zoneSpec) => {
        console.log('OnFork: ', zoneSpec);
        return parentZoneDelegate.fork(targetZone, zoneSpec);
    },

    /**
     * Allows interception of the wrapping of the callback.
     *
     * @param parentZoneDelegate Delegate which performs the parent [ZoneSpec] operation.
     * @param currentZone The current [Zone] where the current interceptor has been declared.
     * @param targetZone The [Zone] which originally received the request.
     * @param delegate The argument passed into the `wrap` method.
     * @param source The argument passed into the `wrap` method.
     */
    onIntercept: (parentZoneDelegate, currentZone, targetZone, delegate, source) => {
        console.log('OnIntercept: ', source);
        return parentZoneDelegate.intercept(targetZone, delegate, source);
    },

    /**
     * Allows interception of the callback invocation.
     *
     * @param parentZoneDelegate Delegate which performs the parent [ZoneSpec] operation.
     * @param currentZone The current [Zone] where the current interceptor has been declared.
     * @param targetZone The [Zone] which originally received the request.
     * @param delegate The argument passed into the `run` method.
     * @param applyThis The argument passed into the `run` method.
     * @param applyArgs The argument passed into the `run` method.
     * @param source The argument passed into the `run` method.
    onInvoke: (parentZoneDelegate, currentZone, targetZone, delegate, applyThis, applyArgs, source) => {
        console.log('OnInvoke: ', );
        return parentZoneDelegate.invokeTask(targetZone, delegate, applyThis, applyArgs);
    },
     */

    /**
     * Allows interception of the error handling.
     *
     * @param parentZoneDelegate Delegate which performs the parent [ZoneSpec] operation.
     * @param currentZone The current [Zone] where the current interceptor has been declared.
     * @param targetZone The [Zone] which originally received the request.
     * @param error The argument passed into the `handleError` method.
     */
    onHandleError: (parentZoneDelegate, currentZone, targetZone, error) => {
        console.log('OnHandleError: ', error);
        return parentZoneDelegate.handleError(targetZone, error);
    },

    /**
     * Allows interception of task scheduling.
     *
     * @param parentZoneDelegate Delegate which performs the parent [ZoneSpec] operation.
     * @param currentZone The current [Zone] where the current interceptor has been declared.
     * @param targetZone The [Zone] which originally received the request.
     * @param task The argument passed into the `scheduleTask` method.
     */
    onScheduleTask: (parentZoneDelegate, currentZone, targetZone, task) => {
        console.log('OnScheduleTask: ', task);
        return parentZoneDelegate.scheduleTask(targetZone, task);
    },

    onInvokeTask: (parentZoneDelegate, currentZone, targetZone, task, applyThis, applyArgs) => {
        console.log('OnInvokeTask', task);
        return parentZoneDelegate.invokeTask(targetZone, task, applyThis, applyArgs);
    },

    /**
     * Allows interception of task cancellation.
     *
     * @param parentZoneDelegate Delegate which performs the parent [ZoneSpec] operation.
     * @param currentZone The current [Zone] where the current interceptor has been declared.
     * @param targetZone The [Zone] which originally received the request.
     * @param task The argument passed into the `cancelTask` method.
     */
    onCancelTask: (parentZoneDelegate, currentZone, targetZone, task) => {
        console.log('OnCancelTask', task);
        return parentZoneDelegate.cancelTask(targetZone, task);
    },

    /**
     * Notifies of changes to the task queue empty status.
     *
     * @param parentZoneDelegate Delegate which performs the parent [ZoneSpec] operation.
     * @param currentZone The current [Zone] where the current interceptor has been declared.
     * @param targetZone The [Zone] which originally received the request.
     * @param hasTaskState
     */
    onHasTask: (parentZoneDelegate, currentZone, targetZone, hasTaskState) => {
        console.log('OnHasTask', hasTaskState);
        parentZoneDelegate.hasTask(targetZone, hasTaskState);
    }
};

