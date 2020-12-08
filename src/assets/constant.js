export const bonifTypeList = [
    { key: 'all', value: '전체' },
    { key: 'one', value: '잘 차린, 한상' },
    { key: 'half', value: '잘 차린, 반상' },
    { key: 'korean', value: '잘 차린, 한정식'},
    { key: 'small', value: '잘 차린, 소반상'},
    { key: 'banchan', value: '잘 차린, 일품반찬'},
    { key: 'other', value: '기타'},
    { key: 'winter', value: '겨울 방구석 미식회'}
]

export const kimTypeList = [
    { key: 'all', value: '전체' },
    { key: 'kimbab', value: '김밥류' },
    { key: 'snack', value: '분식류' },
    { key: 'rice', value: '라이스류' }
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