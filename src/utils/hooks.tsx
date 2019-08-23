import { useReducer, useEffect, useRef } from "react";
import { runSaga, stdChannel } from "redux-saga";
import { take, call, effectTypes } from "redux-saga/effects";

function* selectAsyncSaga(selector, args) {
  const { state } = yield take("REACT_STATE_READY");
  return selector(state, ...args);
}

// const flag = false
// const useForceUpdate = () => useReducer((state) => !state, flag)[1];

// export function useReducerAndSaga(reducer, state0, saga, sagaOptions) {
//   const [state, reactDispatch] = useReducer(reducer, state0);
//   const sagaEnv = useRef({ state: state0, pendingActions: [] });

//   function dispatch(action) {
//     console.log("react dispatch", action);
//     reactDispatch(action);
//     console.log("post react dispatch", action);
//     // dispatch to sagas is done in the commit phase
//     sagaEnv.current.pendingActions.push(action);
//   }

//   const useShareStore = () => {
//     const forceUpdate = useForceUpdate();
//     useEffect(() => {

//       const callback = () => forceUpdate();
//       sagaEnv.current.pendingActions.push(callback);
//       callback(); // in case it's already updated
//       const cleanup = () => {
//         const index = sagaEnv.current.pendingActions.indexOf(callback);
//         sagaEnv.current.pendingActions.splice(index, 1);
//       };
//       return cleanup;
//     }, []);

//     useEffect(() => {
//       console.log("update saga state");
//       // sync with react state, *should* be safe since we're in commit phase
//       sagaEnv.current.state = state;
//       const pendingActions = sagaEnv.current.pendingActions;
//       // flush any pending actions, since we're in commit phase, reducer
//       // should've handled all those actions
//       if (pendingActions.length > 0) {
//         sagaEnv.current.pendingActions = [];
//         console.log("flush saga actions");
//         pendingActions.forEach(action => sagaEnv.current.channel.put(action));
//         sagaEnv.current.channel.put({ type: "REACT_STATE_READY", state });
//       }
//     });

//     // This is a one-time effect that starts the root saga
//     useEffect(() => {
//       sagaEnv.current.channel = stdChannel();

//       const task = runSaga(
//         {
//           ...sagaOptions,
//           channel: sagaEnv.current.channel,
//           dispatch,
//           getState: () => {
//             /* overrided by effectMiddlewares below */
//           },
//           effectMiddlewares: [
//             runEffect => {
//               return effect => {
//                 if (effect.type === effectTypes.SELECT) {
//                   return runEffect(
//                     call(
//                       selectAsyncSaga,
//                       effect.payload.selector,
//                       effect.payload.args
//                     )
//                   );
//                 }
//                 return runEffect(effect);
//               };
//             }
//           ]
//         },
//         saga
//       );
//       return () => task.cancel();
//     }, []);

//     return [state, dispatch];
//   }
//   return useShareStore
// }

const createSharedState = (reducer, initialState, saga, sagaOptions) => {

  const useSharedState = () => {
    const [state, reactDispatch] = useReducer(reducer, initialState);
    const sagaEnv = useRef({ state: initialState, pendingActions: [] });
    const dispatch = (action) => {
      console.log("react dispatch", action);
      reactDispatch(action);
      console.log("post react dispatch", action);
      // dispatch to sagas is done in the commit phase
      sagaEnv.current.pendingActions.push(action);
    };
    useEffect(() => {
      console.log("update saga state");
      // sync with react state, *should* be safe since we're in commit phase
      sagaEnv.current.state = state;
      const pendingActions = sagaEnv.current.pendingActions;
      // flush any pending actions, since we're in commit phase, reducer
      // should've handled all those actions
      if (pendingActions.length > 0) {
        sagaEnv.current.pendingActions = [];
        console.log("flush saga actions");
        pendingActions.forEach(action => sagaEnv.current.channel.put(action));
        sagaEnv.current.channel.put({ type: "REACT_STATE_READY", state });
      }
    });

    // This is a one-time effect that starts the root saga
    useEffect(() => {
      sagaEnv.current.channel = stdChannel();

      const task = runSaga(
        {
          ...sagaOptions,
          channel: sagaEnv.current.channel,
          dispatch,
          getState: () => {
            /* overrided by effectMiddlewares below */
          },
          effectMiddlewares: [
            runEffect => {
              return effect => {
                if (effect.type === effectTypes.SELECT) {
                  return runEffect(
                    call(
                      selectAsyncSaga,
                      effect.payload.selector,
                      effect.payload.args
                    )
                  );
                }
                return runEffect(effect);
              };
            }
          ]
        },
        saga
      );
      return () => task.cancel();
    }, []);

    let hookStore = [state, dispatch];

    return hookStore;
  };
  return useSharedState;
};

export default createSharedState