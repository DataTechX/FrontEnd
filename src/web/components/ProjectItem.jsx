import React from "react";
import "./styles/ProjectItem.scss";


/*Credits
* Design for this component was inspired from the python discord website
* https://www.pythondiscord.com/
* Repository: https://github.com/python-discord/site
* Recreated with bootstrap
*/

export default function ProjectItem({ data, loading }) {
    return (
            <div className="card pt-md-3 px-md-2 pb--3 w-100">
                    <div>
                        <a className="stretched-link" href="https://github.com/JKTheRipperTH/Discord.Net-Basic"><h5 className="card-header bg-transparent">
                            <i className="fab fa-github"/> Discord.Net-Basic</h5></a>
                        <div className="card-body">
                            <p className="card-text text-dark"> ไม่รู้จะอธิบายอะไร</p>
                        </div>
                        <div className="card-footer bg-transparent mb--3">
                            <ul className="list-inline">
                            <li className="list-inline-item"><i className="fa fa-circle cs"/> 5000</li>
                            <li className="list-inline-item"><i className="fa fa-star"/> 250</li>
                            <li className="list-inline-item"><i className="fa fa-code-fork"/> 105000</li>
                            <li className="list-inline-item"><i className="fa fa-history"/> 30000</li>
                            </ul>
                        </div>
                    </div>
                    :
                    
                    {/* <div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-5">
                                    <div className="inner-card animate-pulse"/>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-12">
                                    <div className="inner-card animate-pulse"/>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer bg-transparent mb--3">
                            <div className="row mt-3">
                                <div className="col-3">
                                    <div className="inner-card animate-pulse"/>
                                </div>
                                <div className="col-3">
                                    <div className="inner-card animate-pulse"/>
                                </div>
                                <div className="col-3">
                                    <div className="inner-card animate-pulse"/>
                                </div>
                                <div className="col-3">
                                    <div className="inner-card animate-pulse"/>
                                </div>
                            </div>
                        </div>
                    </div> */}
            </div>


    )
}
