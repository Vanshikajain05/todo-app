import { takeEvery } from "redux-saga/effects";
//Effects are just plain objects
function* workerSaga() {
  console.log("added");
}

function* mySaga() {
  yield takeEvery("ADD-TODO", workerSaga);
}
export default mySaga;
