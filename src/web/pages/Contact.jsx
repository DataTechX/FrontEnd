import React, {useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactSections from "../sections/ContactSections";

export default function Contact(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('Report-User')
    const [message, setMessage] = useState('')

    const [formData, setFormData] = useState({
        name: name,
        email: email,
        subject: subject,
        message: message,
        ReportUser: {
            reportedUserName: '',
            tag: ''
        },
        IssueReport: '',
        Sponsorship: '',
        Partnership: {
            name: '',
            topic: '',
            invitation: ''
        },
        AppealInfraction: {
            InfractedUsername: '',
            tag: '',
            InfractionApplied: ''

        },
        DataDeletion: {
            userID: ''
        },
        Other: '',
    })

    return (
        <div>
            <Header/>
            <section>
                <div className="container box-sizing-border-box">
                    <div className="row">
                        <div className="col-lg-4">
                            <h4 className="comment-title">ChiBa Zone</h4>
                            <p>เหงาๆก็มานั่งติดต่อ555+</p>
                            <div className="row">
                                <div className="col-md-4">
                                    <ul className="contact-info-list">
                                        <li>
                                            <div className="cf-left">E-mail</div>
                                            <div className="cf-right">chibazone@gmail.com</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="contact-form-warp">
                                <h4 className="comment-title">ติดต่อเรา</h4>
                                <form className="comment-form">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input className="form-control" type="text" placeholder="ชื่อ" name="name" required value={name} onChange={(e)=>{setName(e.target.value)}}/>
                                        </div>
                                        <div className="col-md-6">
                                            <input className="form-control" type="email" placeholder="เมล"
                                                   pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" name="email"
                                                   required value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                                        </div>
                                        <div className="col-lg-12 mt-3">


                                            <div className="form-group mb-3">
                                                <label htmlFor="seeAnotherField">เรื่องที่ติดต่อ</label><br/>
                                                <select
                                                    className="form-control"
                                                    id="subject" 
                                                    name="subject" 
                                                    required 
                                                    value={formData.subject}
                                                    onChange={(e)=>setFormData({...formData, subject: e.target.value})}
                                                >
                                                    <option value="none" selected disabled hidden> --เลือกดิ--</option>
                                                    <option value="Report-User">รายงานผู้ใช้</option>
                                                    <option value="Issue-Report">รายงานปัญหา</option>
                                                    <option value="Sponsorship">ติดต่อสปอนเซอร์</option>
                                                    <option value="Partnership">ติดต่อพันธมิตร</option>
                                                    <option value="Appeal-Infraction">อุทธรณ์การละเมิด</option>
                                                    <option value="Data-Deletion">ติดต่อลบข้อมูล</option>
                                                    <option value="Other">อื่นๆ</option>
                                                </select>
                                            </div>

                                            <ContactSections selectedOption={formData.subject} formData={formData} setFormData={setFormData}/>

                                            <br/>
                                            <textarea placeholder="ข้อความ" className="form-control" name="message" value={message} onChange={(e)=>setMessage(e.target.value)}/>
                                            <br/>
                                            <button className="btn btn-outline-secondary" type="submit">ยืนยัน | ส่ง</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}