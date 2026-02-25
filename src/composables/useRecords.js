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