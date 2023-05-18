import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../assets/services/api';
import { addReserveSuccess } from './actions';

function* addToReserve(id) {
  const response = yield call(api.get, `trips/${id}`);

  yield put(addReserveSuccess(response.data));
}

export default all([takeLatest('ADD_RESERVE_REQUEST', addToReserve)]);
