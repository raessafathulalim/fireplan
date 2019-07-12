export const createProject  = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // TODO: Make action async
        const firestore = getFirestore()

        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Ray',
            authorLastName: 'Harazuki',
            authorId: 123,
            createdAt: new Date()
        }).then(() => {
            dispatch({
                type: 'CREATE_PROJECT',
                project
            })
        }).catch((err) => {
            dispatch({
                type: 'CREATE_PROJECT_ERROR',
                err
            })
        })
    }
}