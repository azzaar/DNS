import React from 'react'

function Icon() {
    return (
        <><div className="icon" /><div className="container">
            <div className="row">
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="sec1">
                        <i className="fal fa-dharmachakra fa-2x cog" />
                        <p>KUBERATES CONSULTING SERVICE
                        </p>
                    </div>
                </div>
                <div className="col-12  col-sm-6 col-lg-3">
                    <div className="sec2">
                        <i className="fab fa-aws fa-2x cog" />
                        AWS CONSULTING SERVICE
                    </div>
                </div>
                <div className="col-12  col-sm-6 col-lg-3">
                    <div className="sec2">
                        <i className="fas fa-cogs fa-2x cog" />
                        DEDICATED IT TEAM
                    </div>
                </div>
                <div className="col-12  col-sm-6 col-lg-3">
                    <div className="sec2">
                        <i className="fas fa-pencil-ruler fa-2x cog" />
                        MANAGE SERVICES PROVIDER
                    </div>
                </div>
            </div>
        </div></>
    )
}

export default Icon
