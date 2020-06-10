import React from 'react'
import PropTypes from 'prop-types'
import RepoItem from './'

const RepoItem = ({repo}) => {
    return (
        <div>
            <h3><a href={repo.html_url}></a></h3>
        </div>
    )
}

RepoItem.propTypes = {
 repo: PropTypes.object.isRequired,
}

export default RepoItem