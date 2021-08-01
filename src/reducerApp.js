import React from "react"

export const ContextApp = React.createContext()

export const initializeApp = {

    waiting: false,

    plan: {
        goal: {
            description: "MVP-0",
            name: "Визуализации витрины отчетности по вкладам и счетам в РМ ОЦ"
        },
        tasks: [{
            date: {
                start: "02.08.2021",
                end: "06.08.2021"
            },
            name: "Развернуть локально PL УПС",
            description: "(существующая ФП в РМ ОЦ) - Танко",
            status: "open"
        }, {
            date: {
                start: "02.08.2021",
                end: "06.08.2021"
            },
            name: "Развернуть локально BH УПС",
            description: "(существующая ФП в РМ ОЦ) - разработчик команды Бухнина",
            status: "open"
        }, {
            date: {
                start: "09.08.2021",
                end: "13.08.2021"
            },
            name: "Регистрация ФП в канале РМ ОЦ",
            description: "",
            status: "open"
        }, {
            date: {
                start: "09.08.2021",
                end: "03.09.2021"
            },
            name: "Собрать БТ",
            description: "Лакиза Дмитрий, Маркова Екатерина, Бухнин Максим, пользователи отчетности",
            status: "open"
        }, {
            date: {
                start: "09.08.2021",
                end: "03.09.2021"
            },
            name: "Изучить существующий(старый) отчет",
            description: "функциональность",
            status: "open"
        }, {
            date: {
                start: "23.08.2021",
                end: "17.09.2021"
            },
            name: "Разработать и согласовать экранные формы",
            description: "Утвердить макеты",
            status: "open"
        }, {
            date: {
                start: "11.09.2021",
                end: "19.11.2021"
            },
            name: "Адаптировать существующую функциональность",
            description: "перевести на ЕФС.Сотрудники - интеграция с сервисами",
            status: "open"
        }, {
            date: {
                start: "15.11.2021",
                end: "26.11.2021"
            },
            name: "Готовое решение поставить на ИФТ",
            description: "Готовить демо",
            status: "open"
        }]
    }
}

export const reducerApp = (state, action) => {
    switch (action.type) {
        case 'updateApp':
            return {
                ...state,
                ...action.payload
            }
        case 'resetCurrent':
            return {
                ...state,
                current: initializeApp.plan
            }
        default:
            return state
    }
}