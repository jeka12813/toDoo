class Todo {
    storege = localStorage.getItem("data")
    parsedStorege = this.storege ? JSON.parse(this.storege) : []
    data = this.parsedStorege
    lisEdit = false
    constructor() {
        this.forElement = document.querySelector("#form")
        this.listElement = document.querySelector("#list")
        this.inputElement = document.querySelector("#input_serch")
        this.sortElement = document.querySelector("#sort")
        this.di44Element = document.querySelector("#die")
        this.di44Element.addEventListener("click", this.qaqaqaq.bind(this))
        this.forElement.addEventListener("submit", this.construction.bind(this))
        this.inputElement.addEventListener("input", this.funSort.bind(this))
        this.sortElement.addEventListener("change", this.funInput.bind(this))
        this.listElement.addEventListener("change", this.eavesdropping.bind(this))
        this.listElement.addEventListener("click", this.examination.bind(this))
        this.listElement.addEventListener("click", this.henexamination.bind(this))
        this.listElement.addEventListener("submit", this.xzxzxz.bind(this))
        document.addEventListener("DOMContentLoaded", () => this.render(this.data))
        window.addEventListener("beforeunload", () => {
            const string = JSON.stringify(this.data)
            localStorage.setItem("data", string)
        })
    }
    qaqaqaq() {
        console.log("fkdsfn")
    }



    construction(event) {
        event.preventDefault()
        let todo = {
            id: new Date().getTime(),
            tik: new Date(),
            isChecked: false

        }
        console.log(todo)
        let box = new FormData(this.forElement)
        for (let [name, value] of box) {
            todo[name] = value
        }
        this.data.push(todo)
        this.forElement.reset()
        this.render(this.data)

    }

    rendering({
        title,
        id,
        isChecked,
        select,
        nambr,
        tik
    }) {


        let tak = this.tiktak(tik)
        let box = this.stars(select)
        let newId = "new" + id
        let xzx = isChecked ? "checked" : ""
        let azs = nambr == 0 ? "" : nambr + "ч"
        let ccc = isChecked ? 'island_checked' : ""

        return `<div class="island ${ccc}" >
    <input  type="checkbox" id="${newId}"  ${xzx} data-id="${id}">
    <label for="${newId}" data-role="${id}">${title}</label>
    <form name="title" class="form_edit" data-id="${id}">
    <input  name="title"  value="${title}" >
    <button>✔</button>
    </form> 
    <span>${box}</span>
    <span>${azs}</span>
    <span>${tak}</span>
    <button class="btn_edit" data-id="${id}" data-role="edit">✏</button>
    <button data-id="${id}" data-role="remove">🗑</button>

    </div>
`
    }

    funSort(event) {
        let {
            target
        } = event
        let sum = target.value
        let box = this.data.filter((item) => {
            if (item.title.includes(sum)) {
                return true
            }
        })
        this.render(box)
    }

    funInput(event) {
        let {
            target
        } = event
        let sel = []
        if (target.value == 1) {
            this.sel = this.data.sort((a, b) => {
                if (a.select > b.select) return 1;
                if (a.select == b.select) return 0;
                if (a.select < b.select) return -1;
            })

        }
        if (target.value == 2) {
            this.sel = this.data.sort((a, b) => {
                if (+a.nambr > +b.nambr) return 1;
                if (+a.nambr == +b.nambr) return 0;
                if (+a.nambr < +b.nambr) return -1;

            })

        }
        if (target.value == 0) {
            this.sel = this.data
        }



        this.render(this.sel)
    }

    xzxzxz(event) {
        event.preventDefault()
        let {
            target
        } = event
        let rfv = target.querySelector('input[name="title"]')
        const {
            value
        } = rfv
        const {
            id
        } = target.dataset

        this.data.forEach((item) => {
            if (item.id == id) {
                item.title = value
            }

        })

        let qaqs = target.closest('.island')
        qaqs.classList.remove('island_edit')
        this.isEdit = false
        this.render(this.data)
    }

    tiktak(tik = new Date) {
        let obgDate = new Date()

        let dat = this.tran(obgDate.getDate())
        let mes = this.tran(obgDate.getMonth() + 1)
        let god = this.tran(obgDate.getFullYear())
        return dat + "." + mes + "." + god
    }

    tran(box) {
        let item = box < 10 ? "0" + box : box
        return item
    }

    stars(select) {
        this.sum = ""
        for (let item = 0; select > item; item++) {
            this.sum = this.sum + "⭐"
        }

        return this.sum

    }

    henexamination(event) {
        let {
            target
        } = event
        if (target.dataset.role != "edit") return
        if (this.isEdit) {
            alert("редоктируется")
            return
        }
        let qaqs = target.closest('.island')
        qaqs.classList.add('island_edit')
        this.isEdit = true

    }

    examination(event) {
        let {
            target
        } = event
        if (target.dataset.role != "remove") return

        let {
            id
        } = target.dataset
        this.data.forEach((item, index) => {
            if (item.id == id) {
                this.data.splice(index, 1)
            }
        })
        this.render(this.data)
    }


    eavesdropping(event) {
        let {
            target
        } = event
        if (target.type != "checkbox") return
        let {
            id
        } = target.dataset

        this.data.forEach((item) => {
            if (item.id == id) {
                item.isChecked = target.checked
                console.log(item.isChecked)
            }
        })
        let qaqs = target.closest('.island')
        qaqs.classList.toggle('island_checked')
    }


    render(data) {
        let result = " "
        data.forEach((todo) => {
            let tomplate = this.rendering(todo)
            result = result + tomplate

        })
        this.listElement.innerHTML = result
    }

}
let box = new Todo()


/////дззззззззззззззззззззззззззззззззззззззззззззззззз

// class Shape {
//     constructor(color, width) {
//         this.color = color
//         this.width = width
//         this.render()
//     }



//     template() {
//         return `
//         <div style="width: ${this.width}px; height: ${this.width}px; background-color: ${this.color}"></div>
//         `
//     }

//     render() {
//         const template = this.template()
//         document.body.innerHTML = document.body.innerHTML + template
//     }

// }


// class Square extends Shape {
//     constructor(color, width) {
//         super(color, width)
//     }
// }

// let square1 = new Square('red', 50);

// class Circle extends Shape {
//     constructor(color, width) {
//         super(color, width)
//     }

//     template() {
//         return `
//         <div style="width: ${this.width}px; height: ${this.width}px; background-color: ${this.color}; border-radius: 50%"></div>
//         `
//     }
// }

// let circle1 = new Circle('green', 150);


// class Rectangle extends Square {
//     constructor(color, width, height) {
//         super(color, width)
//         this.height = height
//         this.render()
//     }

//     template() {
//         return `
//         <div style="width: ${this.width}px; height: ${this.height}px; background-color: ${this.color}"></div>
//         `
//     }
// }
// let rectangle1 = new Rectangle('blue', 250, 100);










// const storege = localStorage.getItem("data")
// const parsedStorege = storege ? JSON.parse(storege) : []
// let data = parsedStorege




// let forElement = document.querySelector("#form")
// let listElement = document.querySelector("#list")
// let inputElement = document.querySelector("#input_serch")
// let sortElement = document.querySelector("#sort")
// inputElement.addEventListener("input", funSort)
// sortElement.addEventListener("change", funInput)

// forElement.addEventListener("submit", construction)
// listElement.addEventListener("change", eavesdropping)
// listElement.addEventListener("click", examination)
// listElement.addEventListener("click", henexamination)
// listElement.addEventListener("submit", xzxzxz)
// let isEdit = false
// window.addEventListener("beforeunload", () => {
//     const string = JSON.stringify(data)
//     localStorage.setItem("data", string)
// })
// document.addEventListener("DOMContentLoaded", () => render(data))

// function construction(event) {
//     event.preventDefault()
//     let todo = {
//         id: new Date().getTime(),
//         tik: new Date(),
//         isChecked: false

//     }
//     console.log(todo)
//     let box = new FormData(forElement)
//     for (let [name, value] of box) {
//         todo[name] = value
//     }
//     data.push(todo)
//     forElement.reset()
//     render(data)
// }

// function rendering({title,id,isChecked,select,nambr,tik}) {
//     let tak = tiktak(tik)
//     let box = stars(select)
//     console.log(box)
//     let newId = "new" + id
//     let xzx = isChecked ? "checked" : ""
//     let azs = nambr == 0 ? "" : nambr + "ч"
//     let ccc = isChecked ? 'island_checked' : ""

//     return `<div class="island ${ccc}" >
//     <input  type="checkbox" id="${newId}"  ${xzx} data-id="${id}">
//     <label for="${newId}" data-role="${id}">${title}</label>
//     <form name="title" class="form_edit" data-id="${id}">
//     <input  name="title"  value="${title}" >
//     <button>✔</button>
//     </form> 
//     <span>${box}</span>
//     <span>${azs}</span>
//     <span>${tak}</span>
//     <button class="btn_edit" data-id="${id}" data-role="edit">✏</button>
//     <button data-id="${id}" data-role="remove">🗑</button>

//     </div>
// `
// }

// function funSort(event) {
//     let {
//         target
//     } = event
//     let sum = target.value
//     let box = data.filter((item) => {
//         if (item.title.includes(sum)) {
//             return true
//         }
//     })
//     render(box)
// }

// function funInput(event) {
//     let {
//         target
//     } = event
//     let sel = []
//     if (target.value == 1) {
//         sel = data.sort((a, b) => {
//             if (a.select > b.select) return 1;
//             if (a.select == b.select) return 0;
//             if (a.select < b.select) return -1;
//         })

//     }
//     if (target.value == 2) {
//         sel = data.sort((a, b) => {
//             if (+a.nambr > +b.nambr) return 1;
//             if (+a.nambr == +b.nambr) return 0;
//             if (+a.nambr < +b.nambr) return -1;

//         })

//     }
//     if (target.value == 0) {
//         sel = data
//     }



//     render(sel)
// }

// function xzxzxz(event) {
//     event.preventDefault()
//     let {
//         target
//     } = event
//     let rfv = target.querySelector('input[name="title"]')
//     const {
//         value
//     } = rfv
//     const {
//         id
//     } = target.dataset

//     data.forEach((item) => {
//         if (item.id == id) {
//             item.title = value
//         }

//     })

//     let qaqs = target.closest('.island')
//     qaqs.classList.remove('island_edit')
//     isEdit = false
//     render(data)
// }

// function tiktak(tik = new Date) {
//     let obgDate = new Date()

//     let dat = tran(obgDate.getDate())
//     let mes = tran(obgDate.getMonth() + 1)
//     let god = tran(obgDate.getFullYear())
//     return dat + "." + mes + "." + god
// }

// function tran(box) {
//     let item = box < 10 ? "0" + box : box
//     return item
// }

// function stars(select) {
//     sum = ""
//     for (let item = 0; select > item; item++) {
//         sum=sum+zxcElement
//     }
//     console.log(sum)    
//     return sum

// }

// function henexamination(event) {
//     let {
//         target
//     } = event
//     if (target.dataset.role != "edit") return
//     if (isEdit) {
//         alert("редоктируется")
//         return
//     }
//     let qaqs = target.closest('.island')
//     qaqs.classList.add('island_edit')
//     isEdit = true

// }

// function examination(event) {
//     let {
//         target
//     } = event
//     if (target.dataset.role != "remove") return

//     let {
//         id
//     } = target.dataset
//     data.forEach((item, index) => {
//         if (item.id == id) {
//             data.splice(index, 1)
//         }
//     })
//     render(data)
// }


// function eavesdropping(event) {
//     let {
//         target
//     } = event
//     if (target.type != "checkbox") return
//     let {
//         id
//     } = target.dataset

//     data.forEach((item) => {
//         if (item.id == id) {
//             item.isChecked = target.checked
//             console.log(item.isChecked)
//         }
//     })
//     let qaqs = target.closest('.island')
//     console.log(qaqs)
//     qaqs.classList.toggle('island_checked')
// }


// function render(data) {
//     let result = " "
//     data.forEach((todo) => {
//         let tomplate = rendering(todo)
//         result = result + tomplate

//     })
//     listElement.innerHTML = result
// }


// window.addEventListener("beforeunload", () => {
//     const string = JSON.stringify(data)
//     localStorage.setItem("data", string)
// })
// document.addEventListener("DOMContentLoaded", () => render(data))