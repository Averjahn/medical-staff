import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

interface Doctor {
  id: number
  name: string
  department: string
  isHead: boolean
}

interface Nurse {
  id: number
  name: string
  department: string
}

export const useMedicalStaffStore = defineStore('medicalStaff', () => {
  const doctors = ref<Doctor[]>([])
  const nurses = ref<Nurse[]>([])

  const fetchDoctors = async () => {
    const response = await fetch('/doctors.json')
    doctors.value = await response.json()
  }

  const fetchNurses = async () => {
    const response = await fetch('/nurses.json')
    nurses.value = await response.json()
  }

  const addDoctor = (doctor: Doctor) => {
    doctors.value.push(doctor)
  }

  const addNurse = (nurse: Nurse) => {
    nurses.value.push(nurse)
  }

  return {
    doctors,
    nurses,
    fetchDoctors,
    fetchNurses,
    addDoctor,
    addNurse,
  }
})