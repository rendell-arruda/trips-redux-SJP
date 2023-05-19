import { select, call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../assets/services/api';
import { addReserveSuccess, updateAmountReserve } from './actions';

function* addToReserve({ id }) {
  const tripExists = yield select(state =>
    state.reserve.find(trip => trip.id === id)
  );

  const myStock = yield call(api.get, `/stock/${id}`);
  const stockAmount = myStock.data.amount;

  const currentStock = tripExists ? tripExists.amount : 0;
  const amount = currentStock + 1;

  if (amount > stockAmount) {
    alert('Quantidade máxima atingida.');
    return;
  }

  if (tripExists) {
    //aumentar a reserva/amount

    yield put(updateAmountReserve(id, amount));
  } else {
    const response = yield call(api.get, `trips/${id}`);
    const data = {
      ...response.data,
      amount: 1
    };

    yield put(addReserveSuccess(data));
  }
}

export default all([takeLatest('ADD_RESERVE_REQUEST', addToReserve)]);
