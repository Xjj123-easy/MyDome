import myCharts from './charts.vue'

const com = [myCharts]
const install = (app) => {
    com.forEach((v) => {
        app.component(v.name, v)
    })
}
export default {
    install
}

export {
    myCharts
}