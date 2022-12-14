export default function formatDate(created_at) {
    const splitCreatedAt = created_at.split('T');
    const splitDate = splitCreatedAt[0].split('-');
    const date = `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`;
    return date;
}