import axios from 'axios';
import Swal from 'sweetalert2'

export class Services {
  static baseUrl = 'http://localhost:3000'

  static async getShift() {
    try {
      const resAxios = await axios.get(`${this.baseUrl}/shift`)

      // convert to date
      resAxios.data.forEach((shift) => {
        shift.dateShift = new Date(shift.dateShift)
      });

      // append
      return resAxios.data
    } catch (error) {
      console.log(error);
    }
  }

  static async getShiftPerWeek(start, end) {
    try {
      const resAxios = await axios.get(`${this.baseUrl}/shift/filter/${start}/${end}`)

      // convert to date
      resAxios.data.forEach((shift) => {
        shift.dateShift = new Date(shift.dateShift)
      });

      // append
      return resAxios.data
    } catch (error) {
      console.log(error);
    }
  }

  static async createShift(payload) {
    try {
      const resAxios = await axios({
        method: 'POST',
        url: `${this.baseUrl}/shift`,
        data: payload
      })

      return Swal.fire({
        icon: 'success',
        text: `${payload.name} successfully updated!`,
      })
      
    } catch (error) {
      console.log(error);
      return Swal.fire({
        icon: 'error',
        text: `Shift time clashed!`,
      })
    }
  }

  static async updateShift(payload, id) {
    try {
      const resAxios = await axios({
        method: 'PUT',
        url: `${this.baseUrl}/shift/${id}`,
        data: payload
      })

      return Swal.fire({
        icon: 'success',
        text: `${payload.name} successfully updated!`,
      })
    } catch (error) {
      console.log(error);
      return Swal.fire({
        icon: 'error',
        text: `Shift time clashed!`,
      })
    }
  }

  static async deleteShift(id) {
    try {
      const resAxios = await axios({
        method: 'DELETE',
        url: `${this.baseUrl}/shift/${id}`,
      })

      Swal.fire({
        icon: 'success',
        text: `Deleted!`,
      })
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'success',
        text: `Can't delete!`,
      })
    }
  }

  static async publishAll(action) {
    try {
      const resAxios = await axios({
        method: 'PUT',
        url: `${this.baseUrl}/shift/publish/all/${action}`,
      })

      Swal.fire({
        icon: 'success',
        text: `All shift unpublished!`,
      })
    } catch (error) {
      console.log(error);

      Swal.fire({
        icon: 'error',
        text: `Can't unpublish all shift!`,
      })
    }
  }

  static async publishShift(id) {
    try {
      const resAxios = await axios({
        method: 'PUT',
        url: `${this.baseUrl}/shift/publish/${id}`,
      })

      Swal.fire({
        icon: 'success',
        text: `Published!`,
      })
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        text: `Can't publish!`,
      })
    }
  }

  static async unpublishShift(id) {
    try {
      const resAxios = await axios({
        method: 'PUT',
        url: `${this.baseUrl}/shift/unpublish/${id}`,
      })

      Swal.fire({
        icon: 'success',
        text: `Unpublished!`,
      })
    } catch (error) {
      console.log(error);

      Swal.fire({
        icon: 'error',
        text: `Can't unpublished!`,
      })
    }
  }
}