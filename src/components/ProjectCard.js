import React from 'react';
import './ProjectCard.css';

export const ProjectCard = (props) => {
    return (
        <div className="project">
            <div>
                <img src={props.image} alt={props.altText}>
                </img>
            </div>
            <div className="description">
                <h3>
                    {props.header}
                </h3>
                <p>
                    {props.details}
                </p>
            </div>
        </div>
    );
};