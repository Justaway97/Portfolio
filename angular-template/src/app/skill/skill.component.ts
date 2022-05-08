import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../service/scroll.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  skills = [
    "", "", "", "JAVA", "PYTHON", "DJANGO", "REST API"
    , "HTML", "CSS", "TYPESCRIPT", "JAVASCCRIPT", "ANGULAR"
    , "SQL", "MACHINE LEARNING", "DEEP    LEARNING"
    , "GIT", "PHP", "C#", "GOLANG", "REDIS", "DOCKER", "", "", ""
  ]
  descriptions = [
    "",
    "",
    "",
    "My favourite back end programming language. I learn Java since 2017. I always use Java to in doing complex programming question from uhunt website. I like this programming language because it is very easy to learn with.",
    "My second favourite front end programming language. I get to know to Python is because of the data science course. I like this programming language because it contain a lot of library.",
    "My favourite Python backend framework. One of my senior in Malaysia introduce Django to me. Django can offer rapid development. I do not need to restart the server when I change anything in my code. It also have its own database interface, so that I no need to install other software for the interface.",
    "Widely used in almost all the website. One of the benefit from the REST API that I like the most is when one of the API is down, it will not affect the other function.",
    "Widely use in creating the front end of the website. During my university life, I don't really like HTML, but when I come to work, I am getting interested in HTML because it can combine with css and javascript to display stunning effect.",
    "Widely used in decorating the website. During my university life, I don't really like CSS because I feel it is annoying and the rules is very strict. But when I getting know with it, i feel it is very cool when I able to design the website with some stunning effect.",
    "My favourite front end programming language. I learn Typescript when I start to work. At first, I am struggling with it because of the syntax, but after few months I feel that typescript is very well structured and easy to understand.",
    "One of the front end programming language that I learn before. I prefer Typescript compare to Javascript.",
    "My favourite front end framework. I like the reuse feature and the structure of the code, everything is separated which make the code look cleaner.",
    "Query language to get the data from database.",
    "A sub-category of artificial intelligence. To me it is like a polynomials equation (although it does have its own formula like SVM). When you provide x, then it will give you a y value of the equation. x will be the features and y will be the prediction. A very interesting mathematical way of solving complex problem.",
    "A sub-category of machine learning, deep learning is similar to machine learning, computer also giving the y value based on the x value given through the equation. In deep learning, I will not be able to know what formula I am using, it will formed its own formula.",
    "A version control tools. I like this because it can trace back what we did before, and able to branch out from any branch to do development and merge back when we are done. We no need to wait for others in the development.",
    "A backend programming language that I learn during my university.",
    "A backend programming that I use to learn before when I play around with Unity. I just learn for fun HAHAHA",
    "A backend programming language that I currently using during work.",
    "A cache database. It can help the retrieval of data faster because we can cache the data in it as a map and send the data to the front end which query again.",
    "A container that is very useful in development. It can support automate deployment which is very useful. You can always roll back when you not satisfy with the changes with a minimum time",
    "",
    "",
    ""
  ]
  text = "I am a computer science graduate who major in data science. \
  I start to become a full stacks web developer since 2020 (\
    " + (new Date().getFullYear() - 2020).toString() + ")."

  hobby = [
    'play game',
    'learn latest technology',
    'learn complex logic',
    'build useful tools'
  ]

  url = '/assets/hat.png';
  selectedSkill = '';
  skillIndex = -1;

  constructor(private scrollService: ScrollService) { }

  ngOnInit(): void {
  }

  onClick(event: any, index: number) {
    if (event !== '') {
      this.skillIndex = index;
      this.scrollToId(event);
      this.selectedSkill = this.descriptions[index];
    }
  }

  scrollToId(id: any) {
    console.log('click ', id.toLowerCase().replace(/\s/g, ''));
    this.scrollService.scrollToCenterElementById(id.toLowerCase().replace(/\s/g, ''));
  }

  setId(id: string) {
    let newId = 'empty';
    if (id !== '') {
      newId = id.toLowerCase().replace(/\s/g, '');
      // console.log(id, '->', newId);
    }
    return newId;
  }
}
