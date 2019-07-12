const initState = {
    projects: [
        {id: '1', title:'Apapun ini namanya example aja 1', content: 'Fugiat deserunt et eu do quis qui do officia veniam ullamco voluptate dolor anim.'},
        {id: '2', title:'Apapun ini namanya example aja 2', content: 'Fugiat deserunt et eu do quis qui do officia veniam ullamco voluptate dolor anim.'},
        {id: '3', title:'Apapun ini namanya example aja 3', content: 'Fugiat deserunt et eu do quis qui do officia veniam ullamco voluptate dolor anim.'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
            return state
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err)
            return state
        default:
            return state
    }
}

export default projectReducer
