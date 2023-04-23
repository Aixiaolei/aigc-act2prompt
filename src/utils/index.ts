

export const determineLanguageType = (language:string) => {
    switch (language) {
        case 'CN':
            return {
                copyBtnText:'复制'
            }
        case 'EN':
            return {
                copyBtnText:'Copy'
            }
        default:
            return {
                copyBtnText:'Copy'
            }
    }
}