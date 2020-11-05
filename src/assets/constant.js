export const bonifTypeList = [
    { key: 'all', value: '전체' },
    { key: 'one', value: '한상' },
    { key: 'half', value: '반상' }
]

export const kimTypeList = [
    { key: 'all', value: '전체' },
    { key: 'one', value: '김밥류' },
    { key: 'half', value: '분식류' },
    { key: 'half', value: '라이스류' }
]

export const myMixin = {
    created: function () {
        console.log('myMixin created')
    }
}

export const restourantKind = Object.freeze({
    bon : "bon",
    kim : "kim",
    china : 'china'
})