import axios from 'axios';
const URL_FAC = "http://localhost:8080/Faculty/addfaculty";
const URL_SUB = "http://localhost:8080/Subject/addsubject";

class Service {


    // for Bus
    getFaculty() {
        return axios.get(URL_FAC);
    }

    createFaculty(fac) {
        return axios.post(URL_FAC, fac);
    }
    getFacultyById(facId) {
        return axios.get(URL_FAC + '/' + facId);
    }

    updateFaculty(fac, facId) {
        return axios.put(URL_FAC + '/' + facId, fac);

    }
    deleteFaculty(facId) {
        return axios.delete(URL_FAC + '/' + facId);
    }
    // for Bus
    getSubject() {
        return axios.get(URL_SUB);
    }

    createSubject(sub) {
        return axios.post(URL_SUB, sub);
    }
    getSubjectById(subId) {
        return axios.get(URL_SUB+'/'+ subId);
    }

    updateSubject(sub, subId) {
        return axios.put(URL_SUB + '/' + subId, sub);

    }
    deleteSubject(subId) {
        return axios.delete(URL_SUB + '/' + subId);
    }

}
export default new Service();