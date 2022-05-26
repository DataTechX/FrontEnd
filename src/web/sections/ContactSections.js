import React from 'react'

function ContactSections({ selectedOption, formData, setFormData }) {

    switch (selectedOption) {
        case 'none':
            return <></>
        case 'Report-User':
            return (
                <div id="user" className="row">
                    <div className="col-md-6">
                        <label>ชื่อที่ต้องการติดต่อ และ ข้อความ:</label>
                        <input 
                            className="form-control"
                            type="text"
                            placeholder="ประยุทธ์" 
                            name="username" 
                            value={formData.ReportUser.reportedUsername} 
                            onChange={(e)=>setFormData({...formData, ReportUser: {
                                reportedUsername: e.target.value,
                                tag: formData.ReportUser.tag
                            }})}
                        />
                    </div>
                    <div className="col-md-6">
                        <label>Tag:</label>
                        <input 
                            className="form-control" 
                            type="text" 
                            name="tag" 
                            placeholder="#9999"
                            pattern="[#]{1}[1-9]{4}"
                            value={formData.ReportUser.tag} 
                            onChange={(e)=>setFormData({...formData, ReportUser: { 
                                tag: e.target.value,
                                reportedUsername: formData.ReportUser.reportedUsername
                            }})}
                        />
                    </div>
                </div>
            )
        case 'Issue-Report':
            return (
                <div id="issue" className="row">
                    <div className="col-md-12">
                        <label>เข้าเรื่อง: </label>
                        <input 
                            className="form-control" 
                            type="text" 
                            name="issue"
                            value={formData.IssueReport} 
                            onChange={(e)=>setFormData({...formData, IssueReport: e.target.value})}
                        />
                    </div>
                </div>
            )
        case 'Sponsorship':
            return (
                <div id="sponsor">
                    <label>อยากได้อะไรเป็นสปอนเซอร์:</label><br/>
                    <select 
                        name="sponsor-type" 
                        className="form-control"
                        value={formData.Sponsorship}
                        onChange={(e)=>{setFormData({...formData, Sponsorship: e.target.value})}}
                    >
                        <option value="none" selected disabled hidden>--เลือกดิ--</option>
                        <option value="Coding-Event">โค้ดแจม</option>
                        <option value="CTF-Event">CTF-อีเวร์</option>
                        <option value="Team-Events">ทีม-อีเวร?</option>
                        <option value="Project">โปรเจค</option>
                    </select>
                </div>
            )
        case 'Partnership':
            return (
                <div id="partner" className="row">
                    <div className="col-md-6">
                        <label>ชื่อเซิฟเวอร์:</label>
                        <input 
                            className="form-control" 
                            type="text" 
                            placeholder="ChibaZone" 
                            name="server-name" 
                            value={formData.Partnership.name}
                            onChange={(e)=>{setFormData({...formData, Partnership: {
                                name: e.target.value,
                                topic: formData.Partnership.topic,
                                invitation: formData.Partnership.invitation,
                            }})}}
                        />
                    </div>
                    <div className="col-md-6">
                        <label>หัวข้อเซิร์ฟเวอร์</label>
                        <input 
                            className="form-control" 
                            type="text" 
                            placeholder="Fun with Coding" 
                            name="server-topic"
                            value={formData.Partnership.topic}
                            onChange={(e)=>{setFormData({...formData, Partnership: {
                                name: formData.Partnership.name,
                                topic: e.target.value,
                                invitation: formData.Partnership.invitation,
                            }})}}
                        />
                    </div>
                    <div className="col-md-6">
                        <label>ลิงค์คำเชิญ</label>
                        <input 
                            className="form-control" 
                            type="text" 
                            placeholder="https://discord.gg/"
                            name="server-invite"
                            value={formData.Partnership.invitation}
                            onChange={(e)=>{setFormData({...formData, Partnership: {
                                name: formData.Partnership.name,
                                topic: formData.Partnership.topic,
                                invitation: e.target.value,
                            }})}}
                        />
                    </div>
                </div>
            )
        case 'Appeal-Infraction':
            return (
                <div id="user" className="row">
                    <div className="col-md-6">
                        <label>ชื่อผู้ใช้:</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="ประยุทธ์"
                            name="username"
                            value={formData.AppealInfraction.InfractedUsername}
                            onChange={(e)=>setFormData({...formData, AppealInfraction: {
                                    InfractedUsername: e.target.value,
                                    tag: formData.AppealInfraction.tag
                                }})}
                        />
                    </div>
                    <div className="col-md-6">
                        <label>แท็ก:</label>
                        <input
                            className="form-control"
                            type="text"
                            name="tag"
                            placeholder="#9999"
                            pattern="[#]{1}[1-9]{4}"
                            value={formData.AppealInfraction.tag}
                            onChange={(e)=>setFormData({...formData, AppealInfraction: {
                                    tag: e.target.value,
                                    InfractedUsername: formData.AppealInfraction.InfractedUsername
                                }})}
                        />
                    </div>
                    <div className="col-md-12 mt-3">
                        <label>การละเมิด:</label>
                        <select
                            className="form-control"
                            name="tag"
                            placeholder="แบนถาวร"
                            value={formData.AppealInfraction.InfractionApplied}
                            onChange={(e)=>setFormData({...formData, AppealInfraction: {
                                    tag: formData.AppealInfraction.tag,
                                    InfractedUsername: formData.AppealInfraction.InfractedUsername,
                                    InfractionApplied:  e.target.value
                                }})}>
                            <option value="none" selected disabled hidden>--เลือกดิ--</option>
                            <option value="Short Mute">ปิดเสียง</option>
                            <option value="Long Mute">ปิดเสียง</option>
                            <option value="Temporary Ban">แบนชั่วคราว</option>
                            <option value="Permanent Ban">แบนถาวร</option>
                        </select>
                    </div>
                </div>
            )
        case 'Data-Deletion':
            return (
                <div id="user" className="row">
                    <div className="col-md-6">
                        <label>ID ผู้ใช้:</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="ประยุทธ์"
                            name="username"
                            value={formData.DataDeletion.userID}
                            onChange={(e)=>setFormData({...formData, DataDeletion: {
                                    userID: e.target.value,
                                }})}
                        />
                    </div>
                </div>
            )
        case 'Other':
            return (
                <div id="other"><br/>
                    <label>ใส่หัวเรื่อง:</label>
                    <input 
                        className="form-control" 
                        type="text" 
                        placeholder="หัวเรื่อง" 
                        name="othersub" 
                        value={formData.other} 
                        onChange={(e)=>{setFormData({...formData, other: e.target.value})}}
                    />
                </div>
            )
    }
}

export default ContactSections
