const form = document.querySelector('form')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener('change', save)

function add(){
    const today = new Date().toLocaleDateString('pt-br').slice(0,-5)// data criada e convertida pra pt br com o ano retirado atraves do splice
    const dayExists = nlwSetup.dayExists(today)

    if(dayExists){
        alert('dia ja incluso')
        return
    }

    


    alert('Adicionado com sucesso')
    nlwSetup.addDay(today)
}

function save(){
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
} //salvando os dados no localstorage


const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}

nlwSetup.setData(data)
nlwSetup.load()