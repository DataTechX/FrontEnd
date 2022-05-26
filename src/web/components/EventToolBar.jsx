import React from "react";

import "./styles/EventToolbar.scss";

export default function EventToolBar(){
    return (
        <div className="card event-card">
            <div className="card-body">
                <ul className="event-icon-list">
                    <li>
                        <i className="bi bi-people-fill"/>
                        <h6>34</h6>
                        <span>สมัครสมาชิก</span>
                    </li>
                    <li>
                        <i className="bi bi-award-fill"/>
                        <h6>3</h6>
                        <span>รางวัล</span>
                    </li>
                    <li>
                        <i className="bi bi-suit-diamond-fill"/>
                        <h6>3</h6>
                        <span>สิทธิพิเศษ</span>
                    </li>
                </ul>
            </div>
            <div className="card-footer bg-transparent">
                <h6 className="text-center">ลงทะเบียนเข้าร่วมงาน</h6>
                <button className="btn btn-primary w-100">ลงทะเบียน</button>
            </div>
        </div>
    )
}