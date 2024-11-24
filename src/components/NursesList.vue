<template>
    <div class="container mx-auto pt-5 mt-3 bg-blue-600">
      <h2 class="text-2xl font-bold mb-6 text-center text-gray-300">Список Медсестер</h2>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
          <thead class="bg-blue-600 text-white">
            <tr>
              <th class="border px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">ФИО</th>
              <th class="border px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Отделение</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="nurse in medicalStaffStore.nurses" :key="nurse.id" class="transition-colors duration-300 hover:bg-blue-100">
              <td class="border px-6 py-4 text-sm text-gray-700">{{ nurse.name }}</td>
              <td class="border px-6 py-4 text-sm text-gray-700">{{ nurse.department }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script setup lang="ts">
import { useMedicalStaffStore } from '../store/medicalStaff'
import { onMounted, ref } from 'vue'

const medicalStaffStore = useMedicalStaffStore()

onMounted(() => {
    medicalStaffStore.fetchNurses()
})

</script>

<style scoped>
</style>