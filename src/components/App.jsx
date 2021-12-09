import React from 'react';
import Education from './Education';
import Language from './Language';
import Interets from './Interets';
import Projects from './Projects';
import Experience from './Experience';
import Skill from './Skill';
//import me from 'asset/images/me.jpg'


class App extends React.Component {
    state = {
        bilgi: {
            "name": "Elif Güler",
            "image": "data:image/jpeg;base64,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",
            "email": "00elifguler@gmail.com",
            "phone": "5454837091",
            "website": "https://github.com/gulerelif",
            "twitterlink": "http://twitter.com/altnokburcu",
            "twitter": "00elifguler",
            "Career": " Şu an Süleyman Demirel Üniversitesi Bilgisayar Mühendisliği bölümünde 3.sınıfım. Çeşitli web projelerinde görev almakla birlikte Sosyal Medya Yönetimi,Dijital Pazarlama gibi konularda çalışmalar yürütüyorum. ",
            "ProjectsDescription": "Github üzerinde bulunan projelerim.",
            "Education": [

                {
                    "baslik": "Computer Engineering",
                    "icerik": "Süleyman Demirel University",
                    "tarih": "2018 - 2022"
                }
            ],
            "Languages": [
                {
                    "dil": "Turkish",
                    "derece": "Native"
                },
                {
                    "dil": "English",
                    "derece": "Intermediate"
                }
            ],
            "Skills": [
                {
                    "skill": "Java",
                    "yuzde": "55%"
                },
                {
                    "skill": "JavaScript",
                    "yuzde": "70%"
                },
                {
                    "skill": "HTML5 & CSS3",
                    "yuzde": "70%"
                },
                {
                    "skill": "jQery",
                    "yuzde": "80%"
                },
                {
                    "skill": "React",
                    "yuzde": "50%"
                }
            ],
            "Interests": [
                { "hobi": "Travelling" },
                { "hobi": "Swimming" },
                { "hobi": "Biking" }
                
            ],
            "Experiences": [
                {
                    "baslik": "Bilgi İşlem",
                    "lokasyon": "Kepez Belediyesi, Antalya",
                    "tarih": "Haziran, 2021 ",
                    "aciklama": "Kepez Belediyesi bilgi işlem ofisinde donanım stajımı yaptım"
                },
            ],
            "Projects": [
                {
                    "projectName": "Haber Oku - HürriyetAPI",
                    "url": "https://github.com/gulerelif/elifguler1821012052",
                    "aciklama": "Android Studio'da Hurriyet API kullandığım projedir.Projenin içerisinde Hurriyet API kullanımına ulaşabilirsiniz."
                },

            ]




        }

    };
    render() {
        return (
            <div className="wrapper">
            <div className="sidebar-wrapper">
                <div className="profile-container">
                    <img className="profile" src={this.state.bilgi.image} alt=""
                    width="100px" height="100px"/>
                    <h1 className="name"> {this.state.bilgi.name} </h1>
                    <h3 className="tagline">Developer</h3>
                </div>
  
                <div className="contact-container container-block">
                    <ul className="list-unstyled contact-list">
                        <li className="email"><i className="fa fa-envelope"></i><a href={"mailto:" +  this.state.bilgi.email}>{this.state.bilgi.email}</a></li>
                        <li className="phone"><i className="fa fa-phone"></i><a href={this.state.bilgi.phone}>{this.state.bilgi.phone}</a></li>
                        <li className="website"><i className="fa fa-github"></i><a href={this.state.bilgi.website} target="_blank">{this.state.bilgi.website}</a></li>
                        <li className="twitter"><i className="fa fa-twitter"></i><a href={this.state.bilgi.twitterlink} target="_blank">{this.state.bilgi.twitter}</a></li>
                    </ul>
                </div>
               <div className="education-container container-block">
                    <h2 className="container-block-title">Education</h2>
                    {this.state.bilgi.Education.map((item, key)=><Education item={item} key={key}/>)}
                </div>
  
  
                <div className="languages-container container-block">
                    <h2 className="container-block-title">Languages</h2>
                    <ul className="list-unstyled interests-list">
                        {this.state.bilgi.Languages.map((item, key)=> <Language item={item} key={key}/>)}
                    </ul>
                </div>
  
                <div className="interests-container container-block">
                    <h2 className="container-block-title">Interests</h2>
                    <ul className="list-unstyled interests-list">
                        {this.state.bilgi.Interests.map((item,key) => <Interets item={item} key={key}/>)}
                    </ul>
                </div>
  
            </div>
  
            <div className="main-wrapper">
  
  
                <section className="section summary-section">
                    <h2 className="section-title"><i className="fa fa-user"></i>Career Profile</h2>
                    <div className="summary">
                        <p>{this.state.bilgi.Career}</p>
                    </div>
                </section>
  
                <section className="section experiences-section">
                    <h2 className="section-title"><i className="fa fa-briefcase"></i>Experiences</h2>
  
                  {this.state.bilgi.Experiences.map((item,key) => <Experience item={item} key={key} />)}
  
                </section>
  
  
                <section className="section projects-section">
                    <h2 className="section-title"><i className="fa fa-archive"></i>Projects</h2>
                    <div className="intro">
                        <p>{this.state.bilgi.ProjectDescription}</p>
                    </div>
                    {this.state.bilgi.Projects.map((item,key)=> <Projects item={item} key={key}/>)}
                </section>
  
                <section className="skills-section section">
                    <h2 className="section-title"><i className="fa fa-rocket"></i>Skills &amp; Proficiency</h2>
                    <div className="skillset">
                        {this.state.bilgi.Skills.map((item,key)=> <Skill item={item} key={key}/>)}
                    </div>
                </section>
  
            </div>
        </div>

        );
    }
}
export default App;