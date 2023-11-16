import type { Strore } from "@/interfaces/Store"
import { reactive } from "vue"

const store = reactive<Strore>({
    name: "luis",
    surname: "g",
    age: 20,
    student: true,
    creecer:() => {
        this.age++
    }
})
export default store