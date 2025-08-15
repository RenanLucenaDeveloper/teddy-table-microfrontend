export function generateButtonsArray(length: number): number[] {
    const buttonsArray = Array.from({ length: length }, (_, index) => index + 1)
    
    if(length % 1 !== 0) buttonsArray.push(buttonsArray.length + 1)

    return buttonsArray
}