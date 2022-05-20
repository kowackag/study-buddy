import { useState, useEffect } from 'react';
import axios from 'axios';

export const useStudents = ({ id = '' } = {}) => {
  const [students, setStudents] = useState([]);
  const [allStudents, setAllStudents] = useState([]);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    axios
      .get(`/groups`)
      .then(({ data }) => setGroups(data.groups))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`/students`)
      .then(({ data }) => setAllStudents(data.students))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (!id) return;
    axios
      .get(`/students/${id}`)
      .then(({ data }) => setStudents(data.students))
      .catch((err) => console.log(err));
  }, [id, groups]);

  return { allStudents, students, groups};
};
