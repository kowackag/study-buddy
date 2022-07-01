import { useCallback } from 'react';
import axios from 'axios';

export const useStudents = () => {
  const getGroups = useCallback(async () => {
    try {
      const result = await axios.get('/groups');
      return result.data.groups;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getStudents = useCallback(async (groupId) => {
    try {
      const result = await axios.get(`/students/${groupId}`);
      return result.data.students;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getAllStudents = useCallback(async () => {
    try {
      const result = await axios.get(`/students`);
      return result.data.students;
    } catch (e) {
      console.log(e);
    }
  }, []);

  return { getAllStudents, getStudents, getGroups };
};
