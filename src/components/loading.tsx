import React from 'react'

const Loading = () => {
    return (
            <div className="container-fluid">
            <div className="row center my-5 py-5">
                <div className="col-sm-12 col-md-4"></div>
                <div className="col-sm-12 col-md-4">
                <div className="loading">
                <h3 className="display-3 my-4">Quiz</h3>
                <h3 className="display-5 mb-4">Loading...</h3>
                </div>
                </div>
                <div className="col-sm-12 col-md-4"></div>
            </div>
            </div>
    );
}

export default Loading;