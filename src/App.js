import React, { Component } from 'react';
import studentsApiService from './services/students-api-service';
import StudentContext from './contexts/studentContext';

class App extends Component {
  static contextType = StudentContext;

  componentDidMount() {
    this.context.clearError();
    studentsApiService.getStudents().then((res) => {
      this.context.setStudents(res);
      console.log(res, 'RES');
      console.log(this.context.students, 'THIS CONTEXT STUDENTS');
    });
  }

  studentAverage(ave) {
    let average;
    let sum = 0;
    for (let i = 0; i < ave.length; i++) {
      sum += parseInt(ave[i]);
      average = sum / ave.length;
    }
    return average;
  }

  render() {
    const studentsArray = Object.values(this.context.students).map(
      (student, index) => {
        return (
          <li key={index}>
            <img src={student[index].pic} />
            <h3>
              {student[index].firstName} {student[index].lastName}
            </h3>
            <p>Email: {student[index].email}</p>
            <p>Company: {student[index].company}</p>
            <p>Skill: {student[index].skill}</p>
            <p>Average: {this.studentAverage(student[index].grades)}%</p>
          </li>
        );
      }
    );
    return (
      <main className='App'>
        <h1>Testing App</h1>
        <section>
          <ul>{studentsArray}</ul>
        </section>
      </main>
    );
  }
}

export default App;
