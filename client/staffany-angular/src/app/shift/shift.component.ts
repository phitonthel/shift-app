import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import * as dayjs from 'dayjs';
import Swal from 'sweetalert2'

import { Services } from './services/services'

@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.css']
})
export class ShiftComponent implements OnInit {
  currentView: string = 'shift-cards'
  currentAction: string = ''

  weekInput = '2021-W40'

  formData: any = {
    id: '',
    name: '',
    date: '',
    startTime: '',
    endTime: ''
  }

  shifts: any[] = [
    {
      id: 1,
      name: 'Shift 1',
      dateShift: new Date(2021, 8, 14),
      startTime: "07:00",
      endTime: "13:00",
    },
    {
      id: 2,
      name: 'Shift 2',
      dateShift: new Date(2021, 8, 16),
      startTime: "13:00",
      endTime: "18:00",
      isPublished: true
    }
  ]

  constructor() { }

  ngOnInit(): void {
    this.getShift()
  }

  async filterByDay(day: number) {
    // get from database
    const shifts = await this.filterByWeek()

    // filter if user select day
    if (day) {
      this.shifts = []
      shifts.forEach((shift: any) => {
        if (shift.dateShift.getDay() == day) {
          this.shifts.push(shift)
        }
      });
    } else {
      this.shifts = shifts
    }
  }

  async filterByWeekButton() {
    this.shifts = await this.filterByWeek()
  }

  async filterByWeek() {
    const year = +this.weekInput.split('-')[0]
    const week = +this.weekInput.split('-')[1].slice(1, 3)

    let date = new Date(year, 0, week * 7)

    const firstday = new Date(date.setDate(date.getDate() - date.getDay()))
    const lastday = new Date(date.setDate(date.getDate() - date.getDay() + 6))

    const shifts = await Services.getShiftPerWeek(firstday.toISOString(), lastday.toISOString())
    return shifts
  }

  setView(view: string, payload: any, action: string) {
    this.currentView = view
    this.currentAction = action

    if (payload) {
      const dateStr = dayjs(payload.dateShift).format("YYYY-MM-DD");

      this.formData.id = payload.id
      this.formData.name = payload.name
      this.formData.date = dateStr
      this.formData.startTime = payload.startTime
      this.formData.endTime = payload.endTime
    } else {
      this.formData.id = ''
      this.formData.name = ''
      this.formData.date = ''
      this.formData.startTime = ''
      this.formData.endTime = ''
    }
  }

  async create() {
    console.log(this.formData);
    const payload = {
      name: this.formData.name,
      dateShift: new Date(this.formData.date),
      startTime: this.formData.startTime,
      endTime: this.formData.endTime,
    }

    // validation startTime should be lower than endTime
    if (payload.startTime > payload.endTime) {
      Swal.fire({
        icon: 'error',
        text: `Start time should be lower than end time!`,
      })
      return
    }

    // create and get the latest shifts
    await Services.createShift(payload)
    this.getShift()
  }

  async update() {
    console.log(this.formData);
    const payload = {
      name: this.formData.name,
      dateShift: new Date(this.formData.date),
      startTime: this.formData.startTime,
      endTime: this.formData.endTime,
    }

    // validation: startTime should be lower than endTime
    if (payload.startTime > payload.endTime) {
      Swal.fire({
        icon: 'error',
        text: `Start time should be lower than end time!`,
      })
      return
    }

    // update and get the latest shifts
    await Services.updateShift(payload, this.formData.id)

    this.getShift()
  }

  async delete(id: number) {
    // delete and get the latest shifts
    await Services.deleteShift(id)
    this.getShift()
  }

  async publishAll() {
    await Services.publishAll('publish')
    this.getShift()
  }

  async unpublishAll() {
    await Services.publishAll('unpublish')
    this.getShift()
  }

  async publish(id: number) {
    await Services.publishShift(id)
    this.getShift()
  }

  async unpublish(id: number) {
    await Services.unpublishShift(id)
    this.getShift()
  }

  // get all shift (deprecated, now using get shift per week)
  async getShift() {
    // this.shifts = await Services.getShift()
    this.shifts = await this.filterByWeek()
  }


}
