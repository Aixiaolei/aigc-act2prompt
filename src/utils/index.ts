

export const determineLanguageType = (language:string) => {
    switch (language) {
        case 'CN':
            return {
                copyBtnText:'复制',
                editBtnText:'编辑'
            }
        case 'EN':
            return {
                copyBtnText:'Copy',
                editBtnText:'Edit'
            }
        default:
            return {
                copyBtnText:'Copy'
            }
    }
}