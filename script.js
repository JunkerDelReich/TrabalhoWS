
initialize_r();
initialize_f();
/**
 * AQUI ESTÁ O CÓDIGO DA FARMÁCIA
 */

var id_f = 0;
var selectedRow_f = null;


async function initialize_f(){
    var response = await fetch('https://5f02650b9e41230016d42d46.mockapi.io/api/v1/farmacia', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }        
    });
    var retorno = await response.json();

    for (var i = 0; i < retorno.length; i++) {
        insertRow_f(retorno[i]);
    }

}

function clear_f() {
    document.getElementById("fnome").value = " ";
    document.getElementById("fcidade").value = " ";

    selectedRow_f = null;
    id_f = 0;
}

function save_f() {
    if (selectedRow_f == null)
        opInsert_f();
    else
        opUpdate_f();

}

async function opUpdate_f() {
    obj = validateFields_f();
    if (obj != null) {
        var json = { "nome": obj.fnome.value, "cidade": obj.fcidade.value };
        var response = await fetch('https://5f02650b9e41230016d42d46.mockapi.io/api/v1/farmacia/' + id_f, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(json)
        });
        var retorno = await response.json();

        updateRow_f(retorno);
    }
}

async function onDelete_f(td) {
    if (confirm('você tem certeza que deseja excluir este registro ?')) {


        row = td.parentElement.parentElement;
        id_f = row.cells[0].innerText;
        var response = await fetch('https://5f02650b9e41230016d42d46.mockapi.io/api/v1/farmacia/' + id_f, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (response != null) {
            document.getElementById("myTable_f").deleteRow(row.rowIndex);
            clear_f();
        }
        id_f = 0;
    }
}

async function opInsert_f() {
    obj = validateFields_f();
    if (obj != null) {
        var json = { "nome": obj.fnome.value, "cidade": obj.fcidade.value }
        var response = await fetch('https://5f02650b9e41230016d42d46.mockapi.io/api/v1/farmacia', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(json)
        });
        var retorno = await response.json();

        insertRow_f(retorno);
    }
}

function insertRow_f(data) {
    var table = document.getElementById("myTable_f").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell0 = newRow.insertCell(0);
    cell0.innerHTML = data.id;
    cell1 = newRow.insertCell(1);
    cell1.innerHTML = data.nome;
    cell2 = newRow.insertCell(2);
    cell2.innerHTML = data.cidade;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="onEdit_f(this)">Edit</a>
                       <a onClick="onDelete_f(this)">Delete</a>`;

}

function updateRow_f(data) {
    selectedRow_f.cells[1].innerHTML = data.nome;
    selectedRow_f.cells[2].innerHTML = data.cidade;

    clear_f();
}

function validateFields_f() {
    var fnome = document.getElementById("fnome");
    var fcidade = document.getElementById("fcidade");;

    if ((fnome.value != "") || (fcidade.value != "")) {
        var obj = Object;
        obj.fnome = fnome;
        obj.fcidade = fcidade;
        return obj;
    }
    return null;
}

function onEdit_f(td) {
    selectedRow_f = td.parentElement.parentElement;

    id_f = selectedRow_f.cells[0].innerHTML;
    document.getElementById("fnome").value = selectedRow_f.cells[1].innerHTML;
    document.getElementById("fcidade").value = selectedRow_f.cells[2].innerHTML;

}


/**
 * AQUI ESTÁ O CÓDIGO DO REMÉDIO
 */
var id_r = 0;
var selectedRow_r = null;

function clear_r() {
    document.getElementById("rnome").value = " ";
    document.getElementById("rpreco").value = 0;
    document.getElementById("rdescricao").value = " ";
    document.getElementById("rfoto").value = " ";

    selectedRow_r = null;
    id_r = 0;
}

function save_r() {
    if (selectedRow_r == null)
        opInsert_r();
    else
        opUpdate_r();




}

async function initialize_r() {
    var response = await fetch('https://5f02650b9e41230016d42d46.mockapi.io/api/v1/remedio', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }        
    });
    var retorno = await response.json();

    for (var i = 0; i < retorno.length; i++) {
        insertRow_r(retorno[i]);
    }
}

async function opUpdate_r() {
    obj = validateFields_r();
    if (obj != null) {
        var json = { "nome": obj.rnome.value, "preco": obj.rpreco.value, "descricao": obj.rdescricao.value, "foto": obj.rfoto.value };
        var response = await fetch('https://5f02650b9e41230016d42d46.mockapi.io/api/v1/remedio/' + id_r, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(json)
        });
        var retorno = await response.json();

        updateRow_r(retorno);
    }
}

async function onDelete_r(td) {
    if (confirm('você tem certeza que deseja excluir este registro ?')) {


        row = td.parentElement.parentElement;
        id_r = row.cells[0].innerText;
        var response = await fetch('https://5f02650b9e41230016d42d46.mockapi.io/api/v1/remedio/' + id_r, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (response != null) {
            document.getElementById("myTable_r").deleteRow(row.rowIndex);
            clear_r();
        }
        id_r = 0;
    }
}

async function opInsert_r() {
    obj = validateFields_r();
    if (obj != null) {
        var json = { "nome": obj.rnome.value, "preco": obj.rpreco.value, "descricao": obj.rdescricao.value, "foto": obj.rfoto.value }
        var response = await fetch('https://5f02650b9e41230016d42d46.mockapi.io/api/v1/remedio', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(json)
        });
        var retorno = await response.json();

        insertRow_r(retorno);
    }
}

function insertRow_r(data) {
    var table = document.getElementById("myTable_r").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell0 = newRow.insertCell(0);
    cell0.innerHTML = data.id;
    cell1 = newRow.insertCell(1);
    cell1.innerHTML = data.nome;
    cell2 = newRow.insertCell(2);
    cell2.innerHTML = data.preco;
    cell3 = newRow.insertCell(3);
    cell3.innerHTML = data.descricao;
    cell3 = newRow.insertCell(4);
    cell3.innerHTML = data.foto;
    cell4 = newRow.insertCell(5);
    cell4.innerHTML = `<a onClick="onEdit_r(this)">Edit</a>
                       <a onClick="onDelete_r(this)">Delete</a>`;

}

function updateRow_r(data) {
    selectedRow_r.cells[1].innerHTML = data.nome;
    selectedRow_r.cells[2].innerHTML = data.preco;
    selectedRow_r.cells[3].innerHTML = data.descricao;
    selectedRow_r.cells[4].innerHTML = data.foto;

    clear_r();
}

function validateFields_r() {
    var rnome = document.getElementById("rnome");
    var rpreco = document.getElementById("rpreco");
    var rdescricao = document.getElementById("rdescricao");
    var rfoto = document.getElementById("rfoto");

    if ((rnome.value != "") || (rpreco.value != "") || (rdescricao.value != "") || (rfoto.value != "")) {
        var obj = Object;
        obj.rnome = rnome;
        obj.rpreco = rpreco;
        obj.rdescricao = rdescricao;
        obj.rfoto = rfoto;
        return obj;
    }
    return null;
}

function onEdit_r(td) {
    selectedRow_r = td.parentElement.parentElement;

    id_r = selectedRow_r.cells[0].innerHTML;
    document.getElementById("rnome").value = selectedRow_r.cells[1].innerHTML;
    document.getElementById("rpreco").value = selectedRow_r.cells[2].innerHTML;
    document.getElementById("rdescricao").value = selectedRow_r.cells[3].innerHTML;
    document.getElementById("rfoto").value = selectedRow_r.cells[4].innerHTML;

}
