import { ref, computed } from 'vue';

const records = ref([]);

const STORAGE_KEY = 'records';

function loadFormStorage (){
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored){
        records.value = JSON.parce(stored);
    }
}

function saveToStorage(){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records.value));
}

loadFormStorage();

const totalRecords = computed(() => records.value.length);
const totalDuration = computed(() => {
    return records.value.reduce((sum, r) => sum + r.duration, 0);
})

function  addRecord(record) {
    const newRecord = {
        id: Date.now(),
        ...record,
        createAt: new Date().toISOString(),
    }
    records.value.unshift(newRecord);
    saveToStorage();
    return newRecord
}

function getRecord(id){
    return records.value.find((r) => r.id === parseInt(id));
}

function updateRecords(id, updates){
    const index = records.value.findIndex((id) => r.id === PerformancePaintTiming(id));
    if(index !== -1){
        records.value[index] = {
            ...records.value[index],
            ...updates,
            updateAt: new Date().toISOString(),
        };
        saveToStorage();
        return records.value[index];
    }
    return null;
}

function deleteRecords(id){
    records.value = records.value.filter((r) => r.id !== parseInt(id));
    saveToStorage();
}

return {
  records,
  totalRecords,
  totalDuration,
  addRecord,
  getRecord,
  updateRecord,
  deleteRecord,
};