export const EnumTutorialWriterActions = {
  SELECTION_SELECT: 'SELECTION_SELECT',
  SELECTION_ADD: 'SELECTION_ADD',
  SELECTION_REMOVE: 'SELECTION_REMOVE',

  FILE_NEW_INVOCATION: 'FILE_NEW_INVOCATION',
  FILE_NEW: 'FILE_NEW',
  FILE_NEW_SUCCESS: 'FILE_NEW_SUCCESS',
  FILE_NEW_FAILURE: 'FILE_NEW_FAILURE',

  FILE_OPEN_INVOCATION: 'FILE_OPEN_INVOCATION',
  FILE_OPEN: 'FILE_OPEN',
  FILE_OPEN_SUCCESS: 'FILE_OPEN_SUCCESS',
  FILE_OPEN_FAILURE: 'FILE_OPEN_FAILURE',

  FILE_RENAME_INVOCATION: 'FILE_RENAME_INVOCATION',
  FILE_RENAME: 'FILE_RENAME',
  FILE_RENAME_SUCCESS: 'FILE_RENAME_SUCCESS',
  FILE_RENAME_FAILURE: 'FILE_RENAME_FAILURE',

  FILE_DELETE_INVOCATION: 'FILE_DELETE_INVOCATION',
  FILE_DELETE: 'FILE_DELETE',
  FILE_DELETE_SUCCESS: 'FILE_DELETE_SUCCESS',
  FILE_DELETE_FAILURE: 'FILE_DELETE_FAILURE',

  FILE_SAVE_INVOCATION: 'FILE_SAVE_INVOCATION',
  FILE_SAVE: 'FILE_SAVE',
  FILE_SAVE_SUCCESS: 'FILE_SAVE_SUCCESS',
  FILE_SAVE_FAILURE: 'FILE_SAVE_FAILURE',

  LAYOUT_SELECT: 'LAYOUT_SELECT',
  LAYOUT_PREVIEW: 'LAYOUT_PREVIEW',
  LAYOUT_APPLY: 'LAYOUT_APPLY'
}

export function selectionSelect (id) {
  return { type: EnumTutorialWriterActions.SELECTION_SELECT, id: id }
}

export function selectionAdd (id) {
  return { type: EnumTutorialWriterActions.SELECTION_ADD, id: id }
}

export function selectionRemove (id) {
  return { type: EnumTutorialWriterActions.SELECTION_REMOVE, id: id }
}
