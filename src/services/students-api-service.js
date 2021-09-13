const studentsApiService = {
  // Get request for student info
  getStudents() {
    return fetch(`https://api.hatchways.io/assessment/students`).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default studentsApiService;
