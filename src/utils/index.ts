

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


export const setClipboard = (str:string, success = function(){}, error = function(){}) => {
    navigator.permissions.query({ name: "clipboard-write" as PermissionName }).then(result => {
        // 如果有权限，或者用户同意授予权限
        if (result.state === "granted" || result.state === "prompt") {
            // 将文本写入剪贴板
            navigator.clipboard.writeText(str)
                .then(() => {
                    success()
                })
                .catch(err => {
                    error()
                });
        }
    });
}