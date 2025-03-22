const initState = {
  themeId: 1,
};

type stateType = typeof initState;

export const themeReducer = (
  state: stateType = initState,
  action: { type: string; id: number }
): stateType => {
  switch (action.type) {
    case 'SET_THEME_ID':
      return { themeId: action.id };
    default:
      return state;
  }
};

export const changeThemeId = (id: number): { type: string; id: number } => ({
  type: 'SET_THEME_ID',
  id,
});
