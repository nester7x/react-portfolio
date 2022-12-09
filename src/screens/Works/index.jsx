import React from "react";

import Item from "./components/Item";

import socMediaImg from "../../assets/Images/social-network.png";
import todoListImg from "../../assets/Images/todo-list.jpg";
import indicorpImg from "../../assets/Images/Indicorp.jpg";
import * as S from "./styles";

function Works() {
  const myWorks = [
    {
      date: "2022",
      name: "Social Network",
      gitHubLink: "https://github.com/nester7x/todo-react",
      siteLink: "https://tourmaline-pony-44363b.netlify.app/",
      image: socMediaImg,
    },
    {
      date: "2022",
      name: "Todo List",
      gitHubLink: "https://github.com/nester7x/todo-list",
      siteLink: "http://test.nesterenych.in.net/",
      image: todoListImg,
    },
    {
      date: "2021",
      name: "Indicorp",
      gitHubLink: "https://github.com/nester7x/Indicorp_project",
      siteLink: "https://google.com",
      image: indicorpImg,
    },
  ];

  return (
    <S.Wrapper>
      {myWorks.map((item) => (
        <Item
          date={item.date}
          name={item.name}
          gitHubLink={item.gitHubLink}
          siteLink={item.siteLink}
          image={item.image}
        />
      ))}
    </S.Wrapper>
  );
}

export default Works;
