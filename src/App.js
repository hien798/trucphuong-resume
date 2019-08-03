import React from 'react'
import './App.css'
import Header from './Header/Header'
import BasicInfo from './BasicInfo/BasicInfo'
import Background from './Background/Background'
import bku from './img/bku.png'
import dai from './img/daiichi.png'
import wee from './img/weebpal.jpg'

const App = () => {
  const headerData = {
    name: {first: 'Thị Trúc Phương', last: 'Trần'},
    career: 'Software Engineer'
  }
  const basicData = {
    social: [
      {name: 'github', link: 'https://github.com/hien798'},
      {name: 'linkedin', link: 'https://www.linkedin.com/in/hien798/'},
      {name: 'facebook', link: 'https://www.facebook.com/TrucPhuong1909'},
      {name: 'instagram', link: 'https://www.instagram.com/trucphuong.tp/'}
    ],
    contact: [
      {name: 'mail', contact: 'trucphuongBK19@gmail.com'},
      {name: 'phone', contact: '(+84) 972 302397'}
    ],
    information: [
      {title: 'Birthday', value: '19 Sep 1997'},
      {title: 'Gender', value: 'female'},
      {title: 'Experiences', value: '1 years'}
    ],
    objective: 'I am seeking a full-time position in the field of IT Business analyst, where I can apply my knowledge and skills for continuous improvement. In addition, I am a member of Communist Party of Vietnam and I really hope to work in a State Enterprises.',
    language: [
      {title: 'Vietnamese', value: 'native'},
      {title: 'English', value: 'good'}
    ]
  }
  const background = [
    {
      title: 'EDUCATION',
      list: [{
        title: 'Ho Chi Minh University of Technology',
        subtitle: 'Computer Science',
        daterange: 'Sep 2015 - Jun 2019',
        description: ['GPA: 6.71/10'],
        logo: bku
      }]
    }, {
      title: 'WORK EXPERIENCE',
      list: [{
        title: 'DAI-ICHI LIFE VIETNAM',
        subtitle: 'ITBA - BUSINESS ANALYST INTERN',
        daterange: '2018',
        description: ['Systems Analyst: E-Payment system, CCMS, Mobile Customer Portal, Agency Portal.'],
        logo: dai
      }, {
        title: 'WEEBPAL CORPORATION',
        subtitle: 'ITBA/QC',
        daterange: '2017',
        description: [
          'Project Analyst: NATIONAL WEBSITE OF OPERATION Les Enfants du patrimoine - CAUE EDP website of France',
          'QC: Emmobilier Project - Interior Design website of France'
        ],
        logo: wee
      }]
    }, {
      title: 'PROJECTS',
      list: [{
        title: 'BKOOL',
        subtitle: 'Assignment',
        daterange: 'Oct 2017 - Dec 2018',
        description: ['BKOOL is a programming language that we were assigned to write it a compiler. BKOOL is a very simple language having some basic operations.',
          'This is a personal assignment of a subject named Principles of Programming Language. I have learned about how programming language works, what exactly is below the things like C or Pascal.',
          'Use: Scala']
      }, {
        title: 'Music Genre Recognition',
        subtitle: 'Thesis',
        daterange: 'Oct 2017 - Jun 2018',
        description: ['My thesis is about how to give the correct music genre with a piece of music input.',
          'I and one friend have researched artificial neural network, convolutional neural network, spectrogram of sound, etc. to complete this project.',
          'We decided to use two models of ANN and CNN for deep learning in this field and when we combine two models, the accuracy is quite appreciable at 83 percent.']
      }, {
        title: 'Graphics blabla',
        subtitle: 'Whereee',
        daterange: 'Jun 2017 - Aug 2017',
        description: ['ABCavasda dsad asdasa sdasda sdasd',
          'I developed a few pages on this website.',
          'Use: Typescript, React, Redux, Html, CSS']
      }
    ]
    }, {
      title: 'ACTIVITIES',
      list: [{
        title: 'CSE Job Fair 2017',
        subtitle: 'Volunteers',
        daterange: 'Nov 2017',
        description: ['My job here is helping the companies prepare booth and brochures as well as guiding visitors.']
      }, {
        title: 'Tiếp sức mùa thi 2016',
        subtitle: 'Volunteers',
        daterange: 'Jun 2016',
        description: ['Volunteer like me instructed examinees registering profiles and designed media publications.']
      }, {
        title: 'CSE Job Fair 2015',
        subtitle: 'Volunteers',
        daterange: 'Dec 2015',
        description: ['My job here is helping the companies prepare booth and brochures as well as guiding visitors.']
      }, {
        title: 'Tư vấn tuyển sinh Về trường 2015',
        subtitle: 'Volunteers',
        daterange: 'Jan 2015',
        description: ['I came back to high school to introduce students there about my university.']
      }, {
        title: 'International Friendship Day 2014',
        subtitle: 'Volunteers',
        daterange: 'Dec 2014',
        description: ['I supported Vietnamese abroad alumni in organizing the festival and guided visitors.']
      }]
    }, {
      title: 'HONORS & AWARDS',
      list: 
      [
        {
        title: 'Volunteer for Education - VEO',
        subtitle: 'Certificate that I has successfully completed a volunteer program within responsible travel for community development project',
        daterange: '2016 - 2018'
        },
        {
          title: 'Thanh niên làm theo lời Bác',
          daterange: '2016'
        },
        {
          title: 'Certificate for Youth movement',
          daterange: '2017'
        }
      ]
    }, {
      title: 'CERTIFICATIONS',
      list: [{
        title: 'IELTS Certificate with overall band 5.5',
        subtitle: 'issued by IDP',
        daterange: 'Sep 2017'
      }, {
        title: 'Bachelor of Graphic Design',
        subtitle: 'Kent College International HCMC',
        daterange: 'Nov 2017'
      }]
    }, {
      title: 'INTERESTS',
      list: [{
        description: ['Music is my first interest. I like many kinds of music but I usually listen to Pop, Slow, Latin and Boléro. Besides, I play keyboards as a hobby.',
          'I love family movies, especially some animated films made by Disney or Dreamworks.',
          'I read books an hour a day. I have many books in categories such as autobiography, novel, fiction, science, etc.',
          'Traveling is one of my favourite activities. It gives me chances to experience our fantastic world.',
          'Playing sports has never been my strength. Though, I usually go swimming when I have free time.']
      }]
    }]
  const skills = [
    {title: 'Graphic Design', percent: 4},
    {title: 'Project Analyst', percent: 3.5},
    {title: 'Web Layout Design', percent: 3}
  ]

  return (
    <>
      <Header data={headerData}/>
      <div className='body-info'>
        <BasicInfo data={basicData} skills={skills}/>
        <Background data={background}/>
      </div>
    </>
  )
}

export default App
