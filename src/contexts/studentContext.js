import React, { Component } from 'react';

const StudentContext = React.createContext({
  error: null,
  students: [],
  studentInfo: {},
  setError: () => {},
  clearError: () => {},
  setStudents: () => {},
  setStudentInfo: () => {},
});
export default StudentContext;

export class StudentProvider extends Component {
  state = {
    error: null,
    students: [],
    studentInfo: {},
  };

  setError = (error) => {
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setStudents = (students) => {
    this.setState({ students: students });
  };

  setStudentInfo = (studentInfo) => {
    this.setState({ studentInfo });
  };

  render() {
    const value = {
      error: this.state.error,
      students: this.state.students,
      studentInfo: this.state.studentInfo,
      setError: this.setError,
      clearError: this.clearError,
      setStudents: this.setStudents,
      setStudentInfo: this.setStudentInfo,
    };
    return (
      <StudentContext.Provider value={value}>
        {this.props.children}
      </StudentContext.Provider>
    );
  }
}
