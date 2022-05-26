import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectSection from "../sections/ProjectSection";
import Section from "../components/Section";

function Index() {
    return (
        <div>
            <Header>
                <div className="container d-flex flex-column justify-content-center align-items-center text-center">
                    <p className="font-cuttt mt-4">ChiBa Zone</p>
                    <p className="font-css m-3">"เด้า เด้า เด้า เด้า"</p>
                    <a className="btn btn-outline-success m-2" href="https://discord.gg/">เข้าร่วมเซิฟเวอร์ดิส<i className="bi bi-arrow-right-short"/></a>
                    <div className="spacer m-5"/>
                </div>
            </Header>
            <Section no_border={true} bs_classes={"mb--5"}>
                <div className={"row"}>
                    <div className="col-lg-10 col-sm-12">
                        <h1 className="text-uppercase">พวกเราคือใคร?</h1><br/>
                        <p className="fs-5">เด็กที่กำลังนั่งศึกษาและหลงไหลกับคำว่า โปรแกรมเมอร์ไปวันๆ<br/>
                            แม่งโครตจะเหงาจัดอะเอาจริงๆๆ
                        </p>
                    </div>
                </div>
            </Section>
            <ProjectSection/>
            <Footer/>
        </div>
    );
}

export default Index;