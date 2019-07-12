import React, { Component } from 'react'
import ProjectSummary from './ProjectSummary';

class ProjectList extends Component {
    render() {
        return (
            <div className="project-list section">
                {this.props.projects && this.props.projects.map(project => {
                    return(
                        <ProjectSummary project={project} key={project.id} />
                    )
                })}
            </div>
        )
    }
}

export default ProjectList
