export const bonifTypeList = [
    { key: 'all', value: '전체' },
    { key: 'one', value: '한상' },
    { key: 'half', value: '반상' }
]

export const bonifMenuList = [
    {
        id: 1,
        title: '타이틀1',
        price: '가격1',
        type: 'one'
    },
    {
        id: 2,
        title: '타이틀2',
        price: '가격3',
        type: 'one'
    },
    {
        id: 3,
        title: '타이틀3',
        price: '가격3',
        type: 'one'
    },
    {
        id: 4,
        title: '타이틀4',
        price: '가격4',
        type: 'half'
    },
    {
        id: 5,
        title: '타이틀5',
        price: '가격5',
        type: 'half'
    },
    {
        id: 6,
        title: '타이틀6',
        price: '가격6',
        type: 'half'
    }
]

export const myMixin = {
    created: function () {
        console.log('myMixin created')
    }
}