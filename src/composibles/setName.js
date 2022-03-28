import { ref } from "vue"

const setName = () => {

    const Myname = ref({'name': 'silas', 'age': '25'})

    const changeName = () => {
        return Myname.value = "silas"
    }

    return { Myname, changeName }
}

export default  setName

