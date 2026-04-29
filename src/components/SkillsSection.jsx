
import SkillsArr from "../Skills"
export default function SkillsSection(){

    const skills=SkillsArr.map(skill=>{
      return(
        <li className="skills-item" key={skill.id}>
              <div className="title-wrapper">
                <h5 className="h5">{skill.title}</h5>
                <data value="70"></data>
              </div>
        </li>
      )
    })
  
    return (

        <section className="skill">

          <div class="title-wrapper">
            <div class="icon-box">
              <ion-icon name="book-outline"></ion-icon>
            </div>

            <h3 class="h3 skills-title"> My Skills</h3>
          </div>

          <ul className="skills-list content-card white-highlight">

            {skills}

          </ul>

        </section>
    )
}