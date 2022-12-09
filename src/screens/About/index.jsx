import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";

import SkillItem from "./components/SkillItem";
import myPhoto from "../../assets/Images/my_photo.jpg";

import * as S from "./styles";

function About() {
  const mySkills = [
    {
      technology: "HTML5",
      skillPoint: 90,
    },
    {
      technology: "CSS3 / SCSS / SASS",
      skillPoint: 90,
    },
    {
      technology: "JavaScript",
      skillPoint: 85,
    },
    {
      technology: "React",
      skillPoint: 40,
    },
    {
      technology: "English",
      skillPoint: 60,
    },
    {
      technology: "Git / GitHub",
      skillPoint: 65,
    },
    {
      technology: "Webpack",
      skillPoint: 30,
    },
    {
      technology: "Figma",
      skillPoint: 90,
    },
  ];

  return (
    <S.Wrapper>
      <S.Info>
        <S.ImgWrapper>
          <S.Img
            className="about__img"
            src={myPhoto}
            alt="description"
            width="310"
            height="342"
          />
        </S.ImgWrapper>

        <S.SelfInfo className="about__self_info">
          <S.Title>
            My name is <br /> <span>Andrii Nesterenko</span>
          </S.Title>

          <S.AboutMe>
            I have a good knowledge of HTML/CSS developing(PSDtoHTML),
            experience with cross-browser / adaptive layout and SVG / CSS
            -animations, mobile first method, basic knowledge of JavaScript and
            JQuery, Intermediate English. I have experience with SCSS / SASS
            preprocessors, BEM methodology, GULP, Git / GitHub, Figma,
            Bootstrap.
          </S.AboutMe>

          <S.AboutMe>
            I&apos;m very outgoing person, so communication with people is my
            cup of tea. As for my interests, I like learn something new by
            myself, but always asking if something goes wrong. I want to get
            into good company for making awesome projects with team.
          </S.AboutMe>

          <S.SocList className="soc_list about__soc_list">
            <S.ListItem className="soc_list__item">
              <S.Link
                className="soc_list__link about__link"
                href="https://www.linkedin.com/in/andrii-nesterenko-640784211/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon style={{ color: "#60f5ff" }} />
              </S.Link>
            </S.ListItem>
            <S.ListItem className="soc_list__item">
              <S.Link
                className="soc_list__link about__link"
                href="https://t.me/nesterenych"
                target="_blank"
                rel="noreferrer"
              >
                <TelegramIcon style={{ color: "#60f5ff" }} />
              </S.Link>
            </S.ListItem>
          </S.SocList>
        </S.SelfInfo>
      </S.Info>

      <S.SkillsTitle>My skills:</S.SkillsTitle>

      <S.SkillsList>
        {mySkills.map((item) => (
          <SkillItem
            technology={item.technology}
            skillPoint={item.skillPoint}
          />
        ))}
      </S.SkillsList>
    </S.Wrapper>
  );
}

export default About;
