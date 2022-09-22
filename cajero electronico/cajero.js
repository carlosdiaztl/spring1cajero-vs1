const usuarios = [
  {
    tipoUsuario: "admin",
    nombre: "Juan",
    cedula: "1111",
    clave: "1234",
  },
  {
    tipoUsuario: "cliente",
    nombre: "carlos",
    cedula: "1010",
    clave: "4321",
  },
  {
    tipoUsuario: "cliente",
    nombre: "david",
    cedula: "1212",
    clave: "0123",
  },
];
// let adminIngreso=prompt('Ingrese user admin')
//     let claveIngreso=prompt('Ingrese claveadmin')
//     if(adminUser&&adminIngreso&&adminClave&&claveIngreso)
//     {alert('Que desea realizar ,1 cargar dinero 2 salir') }}
let opcion;
let adminUser = "carlos";
let clave = "1234";
let userU = "laura";
let totalGeneral = 0;
let billetes = {};
while (true) {
  opcion = prompt('Selecione una opcion 1 admin 2 user 3 salir"');
  if (opcion == "1") {
    let adminIngres = prompt("Hola admin usuario");
    let claveAdmin = prompt("Hola admin clave");
    if (adminUser && adminIngres && clave && claveAdmin) {
      let menuAdmin = prompt("4,cargar dinero o salir cualquier tecla");
      if (menuAdmin == "4") {
        let saldo = {
          billetes5: Number(prompt(`Cuantos billetes de 5 va a entrar?`)),
          billetes10: Number(prompt(`Cuantos billetes de 10 va a entrar?`)),
          billetes20: Number(prompt(`Cuantos billetes de 20 va a entrar?`)),
          billetes50: Number(prompt(`Cuantos billetes de 50 va a entrar?`)),
          billetes100: Number(prompt(`Cuantos billetes de 100 va a entrar?`)),
        };
        billetes = saldo;
        //   }
        console.log(billetes);
        const calculateMoney = (a, b) => {
          let total = a * b;
          return total;
        };
        const totalMoney = {
          total5: calculateMoney(billetes.billetes5, 5000),
          total10: calculateMoney(billetes.billetes10, 10000),
          total20: calculateMoney(billetes.billetes20, 20000),
          total50: calculateMoney(billetes.billetes50, 50000),
          total100: calculateMoney(billetes.billetes100, 100000),
        };
        totalGeneral =
          totalMoney.total5 +
          totalMoney.total10 +
          totalMoney.total20 +
          totalMoney.total50 +
          totalMoney.total100;
        console.log(totalMoney);
        console.log(totalGeneral);
      } else {
        alert("chao admin");
      }
    } else {
      alert("clave incorrecta cajero bloqueado");
      break;
    }
  } else if (opcion == 2) {
    let userIngreso = prompt("Hola user ingrese usuario");
    let claveUser = prompt("ingrese clave");
    if (userIngreso == userU && clave == claveUser) {
      if (totalGeneral === 0) {
        alert("cajero sin fondos");
      } else {
        let cantidadDeseada = Number(prompt(`Cantidad deseada a retirar`));
        alert(
          `La cantidad de dinero que puede entregar el cajero es ${totalGeneral} \n Los tipos de billetes son:\n5.000\n10.000\n20.0000\n50.0000\n100.000`
        );
        console.log(totalGeneral, cantidadDeseada);
        if (totalGeneral > cantidadDeseada) {
          const devolverDinero = (cuanto) => {
            const {
              billetes5,
              billetes10,
              billetes20,
              billetes50,
              billetes100,
            } = billetes;
            let restante = cuanto - (cuanto % 5000);
            console.log(restante);
            let billetesUsados = { b5: 0, b10: 0, b20: 0, b50: 0, b100: 0 };
            console.log("Puede entregar maximo: ", totalGeneral);
            while (restante > 0) {
              if (restante / 100000 >= 1 && billetes100 > 0) {
                billetes.billetes100 -= 1;
                billetesUsados.b100 += 1;
                restante -= 100000;
              } else if (restante / 50000 >= 1 && billetes50 > 0) {
                billetes.billetes50 -= 1;
                billetesUsados.b50 += 1;
                restante -= 50000;
              } else if (restante / 20000 >= 1 && billetes20 > 0) {
                billetes.billetes20 -= 1;
                billetesUsados.b20 += 1;
                restante -= 20000;
              } else if (restante / 10000 >= 1 && billetes10 > 0) {
                billetes.billetes10 -= 1;
                billetesUsados.b10 += 1;
                restante -= 10000;
              } else if (restante / 5000 >= 1 && billetes5 > 0) {
                billetes.billetes5 -= 1;
                billetesUsados.b5 += 1;
                restante -= 5000;
              }
            }
            console.log(
              `Se usaron ${billetesUsados.b5} billetes de 5, ${billetesUsados.b10} billetes de 10, ${billetesUsados.b20} billetes de 20, ${billetesUsados.b50} billetes de 50, ${billetesUsados.b100} billetes de 100`
            );
            console.log(
              `Quedaron ${billetes.billetes5} billetes de 5, ${billetes.billetes10} billetes de 10, ${billetes.billetes20} billetes de 20, ${billetes.billetes50} billetes de 50, ${billetes.billetes100} billetes de 100`
            );
          };
          devolverDinero(cantidadDeseada);
          break;
        } else {
          console.log(`miller y whytnei me ayude un poquis de internet XD`);
        }
      }
    }
  } else if (opcion == "3") {
    alert("hasta luego");
    break;
  } else {
    alert("ingrese una opción valida");
  }
}
