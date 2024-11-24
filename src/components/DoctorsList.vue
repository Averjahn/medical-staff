<template>
    <div class="container mx-auto pt-5 mt-3 bg-blue-600 ">
      <h2 class="text-2xl font-bold mb-6 text-center text-gray-300 ">Список Врачей</h2>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead class="bg-blue-600 text-white">
            <tr>
              <th class="border px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">ФИО</th>
              <th class="border px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Отделение</th>
              <th class="border px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Заведующий</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="doctor in medicalStaffStore.doctors"
              :key="doctor.id"
              class="transition-colors duration-300 hover:bg-blue-100"
            >
              <td class="border px-6 py-4 text-sm text-gray-700">{{ doctor.name }}</td>
              <td class="border px-6 py-4 text-sm text-gray-700">{{ doctor.department }}</td>
              <td class="border px-6 py-4 text-sm text-gray-700">{{ doctor.isHead ? 'Да' : 'Нет' }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useMedicalStaffStore } from '../store/medicalStaff'
  import { onMounted } from 'vue'
  
  const medicalStaffStore = useMedicalStaffStore()
  
  onMounted(() => {
    medicalStaffStore.fetchDoctors()
  })
  </script>
  
  <style scoped>
  /* Дополнительные стили для улучшения оформления */
  .table-header {
    background-color: #3b82f6; /* Цвет заголовка */
  }
  
  .table-row:hover {
    background-color: #e0f2fe; /* Цвет при наведении */
  }
  
  .table-cell {
    color: #374151; /* Цвет текста ячеек */
  }
  </style>