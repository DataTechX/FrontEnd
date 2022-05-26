import React from "react";
import Header from "../components/Header";
import Section from "../components/Section";
import Footer from "../components/Footer";


export default function Rules(){
    return (
        <div>
            <Header/>
            <Section title={"กฎ"} bs_classes={"pb-3"}>

                <p style={style.paragraph}>ไม่มีอะไรเยอะหรอก</p>
                <ol>
                    <li>ไม่ทำตัวเกินมนุษย์ก็พอ</li>
                    <li>อย่าว่าตัวเองไม่เก่งหรือไม่ขยันเพราะคนเราเก่งเหมือนกันเสมอ</li>
                </ol>
            </Section>
            <Section title={"การละเมิด"} bs_classes={"pt-0 pb-5"}>
                <p style={style.paragraph}>ห้ามละเมิด</p>
                <ol>
                    <li>อย่าละเมิดข้อมูลส่วนบุคคลหากเขาไม่อยากจะพูด</li>
                    <li>อย่าเข้าไปยุ่งเรื่องระหว่างคน2คนนะไอโง่ เพราะเขาไม่รักมึง</li>
                </ol>
            </Section>
            <Footer/>
        </div>
    )
}

const style = {
    paragraph: {
        fontSize: 17,
        fontFamily: "Sofia Pro, san-serif",
    },
    span: {
        color: "#000",
        fontWeight: "bold"
    }
}