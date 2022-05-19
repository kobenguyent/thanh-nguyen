import data from "../../data";

export function byId({ id }) {
    return `#${data.packageName}:id/${id}`
}
