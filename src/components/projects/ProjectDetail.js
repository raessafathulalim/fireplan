import React from 'react'

const ProjectDetail = (props) => {
    const id = props.match.params.id

    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project title - {id}</span>
                    <p>Fugiat cillum cillum commodo irure labore et deserunt aute quis exercitation aliquip. Minim do id occaecat dolore in cupidatat reprehenderit duis dolor officia. Laborum aliqua et voluptate velit deserunt ut deserunt tempor pariatur anim dolore exercitation laboris.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Raessa F.</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail
