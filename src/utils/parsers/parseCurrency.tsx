export default function parseCurrency(value: number){
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}