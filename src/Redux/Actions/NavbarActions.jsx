export const CHANGE_SELECTED_ITEM ="CHANGE_SELECTED_ITEM";

export function isSelected(path) {
    return {
        type :CHANGE_SELECTED_ITEM,
        payload: path
    }
}
