import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { SEARCH_REQUEST, searchSuccess, searchFailure, searchReset } from '../actions/actions';

// Определим тип данных для результатов поиска
interface Skill {
    id: number;
    name: string;
}

// Обновим тип для функции fetchSearchResults
const fetchSearchResults = async (query: string): Promise<Skill[]> => {
    const response = await axios.get(`/api/search?q=${query}`);
    return response.data;
};

// Обновим тип для генератора саги
function* handleSearchRequest(action: { type: string, payload: string }) {
    try {
        // Если строка запроса пустая, сбрасываем данные
        if (action.payload.trim() === "") {
            yield put(searchReset());
            return;
        }

        // Получаем результаты поиска и передаем их в действие success
        const data: Skill[] = yield call(fetchSearchResults, action.payload);
        yield put(searchSuccess(data));
    } catch (error) {

        // В случае ошибки отправляем действие failure
        yield put(searchFailure('Failed to fetch data'));
    }
}

// Слушаем все запросы на поиск
export function* watchSearchRequests() {
    yield takeEvery(SEARCH_REQUEST, handleSearchRequest);
}
