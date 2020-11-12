export const bonifTypeList = [
    { key: 'all', value: '전체' },
    { key: 'one', value: '한상' },
    { key: 'half', value: '반상' }
]

export const kimTypeList = [
    { key: 'all', value: '전체' },
    { key: 'kimbab', value: '김밥류' },
    { key: 'snack', value: '분식류' },
    { key: 'rise', value: '라이스류' }
]

export const phoneNumber = Object.freeze({
    bon: "010-0101-0101",
    kim: "010-2020-5151",
    china: "010-5151-1231"
})

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

export const addOrderEvent = 'addOrder'