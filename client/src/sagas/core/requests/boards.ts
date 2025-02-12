import { call, select } from 'redux-saga/effects';

import request from '../request';
import selectors from '../../../selectors';
import api from '../../../api';
import Paths from '../../../constants/Paths';

export function* fetchBoardByCurrentPath(): Generator<any, any, any> {
  const pathsMatch: ReturnType<typeof selectors.selectPathsMatch> =
    yield select(selectors.selectPathsMatch);

  let board;
  let card;
  let users;
  let projects;
  let boardMemberships;
  let labels;
  let lists;
  let cards;
  let cardMemberships;
  let cardLabels;
  let tasks;
  let attachments;

  if (pathsMatch) {
    let boardId;
    if (pathsMatch.pattern.path === Paths.BOARDS) {
      boardId = pathsMatch.params.id;
    } else if (pathsMatch.pattern.path === Paths.CARDS) {
      const { item } = yield call(request, api.getCard, pathsMatch.params.id);

      card = item;
      boardId = item.boardId;
    }

    if (boardId) {
      ({
        item: board,
        included: {
          users,
          projects,
          boardMemberships,
          labels,
          lists,
          cards,
          cardMemberships,
          cardLabels,
          tasks,
          attachments,
        },
      } = yield call(request, api.getBoard, boardId, true));
    }
  }

  return {
    board,
    card,
    users,
    boardMemberships,
    labels,
    lists,
    cards,
    cardMemberships,
    cardLabels,
    tasks,
    attachments,
    project: projects[0],
  };
}

export default {
  fetchBoardByCurrentPath,
};
