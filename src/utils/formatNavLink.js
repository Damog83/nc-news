export default function startWithUpperCase(text){
    const formattedText = text[0].toUpperCase() + text.slice(1)

    return formattedText;
}