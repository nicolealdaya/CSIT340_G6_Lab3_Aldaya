const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part
        name={props.parts[0].name}
        exercises={props.parts[0].exercises}
      />
      <Part
        name={props.parts[1].name}
        exercises={props.parts[1].exercises}
      />
      <Part
        name={props.parts[2].name}
        exercises={props.parts[2].exercises}
      />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of units{' '}
      {props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises}
    </p>
  )
}

const Footer = (props) => {
  return (
    <footer>
      {props.name} - {props.courseCode} - {props.section}
    </footer>
  )
}

const App = () => {
  const course = {
    name: 'CSIT340 - Industry Elective 1',
    parts: [
      {
        name: 'CSIT321 - Applications Development and Emerging Technologies',
        exercises: 3
      },
      {
        name: 'IT365 - Data Analytics 1',
        exercises: 3
      },
      {
        name: 'CSIT327 - Information Management 2',
        exercises: 3
      }
    ]
  }

  const fullName = 'Nicole Sheen P. Aldaya'
  const courseCode = 'CSIT340'
  const section = 'G6'

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Footer
        name={fullName}
        courseCode={courseCode}
        section={section}
      />
    </div>
  )
}

export default App

